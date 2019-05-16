import * as React from 'react'
import injectSheet from 'react-jss'
import {MdMenu} from 'react-icons/md'

const styles = {
  headerMobileMenu: {
    fontSize: '2rem',
    cursor: 'pointer',
    "@media (max-width: 1024px)": {
      borderRadius: '4px',
      padding: '8px',
      zIndex: '1',
      color: '#FFF'
    }
  }
}

interface HeaderMobileMenuProps {
  classes?: any,
  openMenu: () => void
}

class HeaderMobileMenu extends React.Component<HeaderMobileMenuProps, {}> {
  render() {
    const { classes: c, openMenu } = this.props;

    return <MdMenu className={c.headerMobileMenu} onClick={openMenu}/>;
  }
}

export default injectSheet(styles)(HeaderMobileMenu);
