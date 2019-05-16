import * as React from 'react'
import injectSheet from 'react-jss'

const titleHeight = 96;

const styles = {
  title: {
    margin: '0',
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: '300',
    height: `${titleHeight}px`,
    lineHeight: `${titleHeight}px`
  }
}

class HeaderTitle extends React.Component {
  render() {
    return (
        <h1 className={this.props.classes.title}>{this.props.title}</h1>
    )
  }
}

export default injectSheet(styles)(HeaderTitle);
