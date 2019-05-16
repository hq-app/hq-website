import * as React from 'react'
import injectSheet from 'react-jss';

import ExpansionPanel from './ExpansionPanel'

const styles = {
  expansionPanelContainer: {
    height: 'auto',
    "&:first-child": {
      "& > h1": {
        marginTop: '0'
      }
    }
  },
  expansionPanelContainerTitle: {
    fontSize: '2rem',
    fontWeight: '300'
  }
}

interface IExpansionPanel {
  title: string,
  content: string
}

interface ExpansionPanelContainerProps {
  classes?: any,
  items: IExpansionPanel[],
  sectionTitle?: string
}

class ExpansionPanelContainer extends React.Component<ExpansionPanelContainerProps, {}> {
    render() {
      const { classes: c, items, sectionTitle } = this.props;
      return (
        <div className={c.expansionPanelContainer}>
          { !! sectionTitle && <h1 className={c.expansionPanelContainerTitle}>{sectionTitle}</h1>}
          {
            items.map(item => {
              return <ExpansionPanel key={item.title} title={item.title} content={item.content} html={item.html}/>
            })
          }
        </div>
      )
    }
}

export default injectSheet(styles)(ExpansionPanelContainer)
