import * as React from 'react'
import injectSheet from 'react-jss'

const styles = {
  boundaries: {
    width: '75%',
    maxWidth: '1600px',
    margin: 'auto',
    "@media (max-width: 767px)": {
      margin: '0 24px',
      width: 'auto',
      maxWidth: 'initial',
    }
  }
}

interface BoundariesProps {
  classes?: any
}

class Boundaries extends React.Component<BoundariesProps, {}> {
  render() {
    const { classes: c, children } = this.props;
    return (
      <div className={c.boundaries}>
        { children }
      </div>
    )
  }
}

export default injectSheet(styles)(Boundaries)
