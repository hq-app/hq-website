import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Title from "../Page/Title";

const styles = {
  section: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: (props: any) => props.bgColor ? props.bgColor : '#FAFAFA',
    "&.-dark": {
      backgroundColor: "#F6F6F6"
    }
  }
}

interface SectionProps {
  classes?: any,
  title?: string,
  dark?: boolean,
  sectionName?: string
}

class Section extends React.Component<SectionProps, {}> {
  render() {
    const { classes: c, dark, title, children, sectionName } = this.props;
    return (
      <div className={classNames(c.section, dark && '-dark', sectionName)}>
        {
          title && <Title>{ title }</Title>
        }
        { children }
      </div>
    )
  }
}

export default injectSheet(styles)(Section)
