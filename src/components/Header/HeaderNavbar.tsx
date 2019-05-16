import * as React from 'react'
import injectSheet from 'react-jss'
import HeaderBrand from "./HeaderBrand";

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: 'auto',
    alignItems: 'center',
    "@media (max-width: 1024px)": {
      padding: '0'
    },
  }
}

interface HeaderNavbarProps {
  classes?: any
}

class HeaderNavbar extends React.Component<HeaderNavbarProps, {}> {
  render() {
    const { classes: c, children } = this.props;

    return (
      <div className={c.navBar}>
        <HeaderBrand />
        { children }
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderNavbar);
