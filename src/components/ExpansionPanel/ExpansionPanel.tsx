import * as React from 'react'
import injectSheet from 'react-jss';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import classNames from 'classnames'
import Link from 'gatsby-link'

import HQTheme from '../../theme/theme'
import { ReactNode } from "react";

const styles = {
  expansionPanelWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    marginBottom: '16px',
    color: '#999999',
    padding: '24px',
    cursor: 'pointer',
    borderBottom: '1px solid gainsboro',
    transition: 'all 300ms',
    maxHeight: '28px',
    overflow: 'hidden',
    "& $expansionPanel $expansionPanelTitle": {
      "@media (max-width: 767px)": {
        width: 'calc(100% - 32px)',
        overflow: 'hidden',
        height: '25px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },
    "&.-expanded": {
      maxHeight: '500px',
      "& $expansionPanel $expansionPanelTitle": {
        overflow: 'visible',
        height: 'auto',
        whiteSpace: 'initial',
        textOverflow: 'initial',
      }
    }
  },
  expansionPanel: {
    position: 'relative'
  },
  expandIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
    color: '#999999',
    fontSize: '2rem'
  },
  expansionPanelTitle: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: HQTheme.palette.primary.main,
    lineHeight: '1.8rem',
    height: '32px',
    width: 'calc(100% - 32px)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'

  },
  expansionPanelContent: {
    marginTop: '24px',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    fontWeight: '300',
    "& > a": {
      color: HQTheme.palette.primary.main
    }
  }
}

interface ExpansionPanelProps {
  classes?: any,
  question: string,
  answer: string
}

interface ContentLink {
  type: 'link',
  url: string,
  label: string
}

type ContentNode = string | ContentLink | ContentArray | ContentList | ContentBreak

type ContentArray = ContentNode[]

interface ContentList {
  type: 'list',
  items: ContentNode[]
}

interface ContentBreak {
  type: 'break'
}

class ExpansionPanel extends React.Component<ExpansionPanelProps, {}> {
    state = {
      expanded: false
    }
    toggleExpansion = () => {
      this.setState(prevState => {
        return {expanded: !prevState.expanded}
      })
    }
    convertContentToReact(content: any): ReactNode {
      if (typeof content === 'string') {
        return this.convertContentStringToReact(content as string)
      }
      if (Array.isArray(content)) {
        return this.convertContentArrayToReact(content as any[])
      }
      if (! content) {
        throw Error('content is not an object, string or array');
      }
      if (! content.type) {
        throw Error('content is an object but does not have a type property');
      }
      if (content.type === 'link') {
        return this.convertContentLinkToReact(content as ContentLink)
      }
      if (content.type === 'list') {
        return this.convertContentListToReact(content as ContentList)
      }
      if (content.type === 'break') {
        return this.convertContentBreakToReact(content as ContentBreak)
      }
      throw Error('content is an object but does not have a valid type: link or list')
    }
    convertContentStringToReact(content: string): ReactNode {
      return content
    }
    convertContentBreakToReact(content: ContentBreak): ReactNode {
      return <br />
    }
    convertContentArrayToReact(content: ContentArray): ReactNode {
      return <>{content.map(childNode => this.convertContentToReact(childNode))}</>
    }
    convertContentLinkToReact(content: ContentLink): ReactNode {
      if (content.url.substr(0, 1) === '/') {
        return <Link to={content.url}>{content.label}</Link>
      }
      return <a href={content.url}>{content.label}</a>
    }
    convertContentListToReact(content: ContentList): ReactNode {
      return (
        <ul>
          {
            content.items.map((item, index) => {
              return <li key={index}>{this.convertContentToReact(item)}</li>
            })
          }
        </ul>
      )
    }
    render() {
      const { classes: c, title, content } = this.props;
      const { expanded } = this.state;

      return (
        <div className={classNames(c.expansionPanelWrapper, expanded ? '-expanded' : undefined)} onClick={() => this.toggleExpansion()}>
          <div className={c.expansionPanel}>
            <div className={c.expansionPanelTitle}>{title}</div>
            {
              !! expanded ? <MdExpandLess className={c.expandIcon} /> : <MdExpandMore className={c.expandIcon} />
            }
          </div>
          <div className={c.expansionPanelContent}>
            { this.convertContentToReact(JSON.parse(content)) }
          </div>
        </div>
      )
    }
}

export default injectSheet(styles)(ExpansionPanel)
