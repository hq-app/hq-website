import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames';
import HeaderNavigation from './HeaderNavigation'
import HeaderNavbar from "./HeaderNavbar";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HQTheme from '../../theme/theme'

export const headerHeight = 80;

const styles = {
  headerWrapper: {
    zIndex: '2',
    margin: 'auto',
    height: `${headerHeight}px`,
    display: 'flex',
    "&.-fixed, &.-showOnScroll": {
      "& > div:first-of-type": {
        "& > div:last-of-type": {
          "& > div:last-of-type": {
            "& > a:last-of-type": {
              "&:hover": {
                backgroundColor: HQTheme.palette.secondary.main // Sign up button in fixed header
              },
            },
          },
        },
      }
    },
    "&.-fixed": {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      backgroundColor: '#3B9FBF',
      "& > div:first-of-type": {
        width: '75%',
        "@media (max-width: 767px)": {
          width: '100%',
          margin: '0 24px'
        }
      }
    },
    "&.-showOnScroll": {
      transform: 'translateY(-100%)',
      transition: 'transform 300ms ease-in',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      "& > div:first-of-type": {
        margin: '0 24px',
        "@media (min-width: 768px)": {
          width: '75%',
          margin: 'auto',
        }
      },
      "&.-visible": {
        boxShadow: '0px 2px 4px 0px rgba(66,66,66,1)',
        transform: 'translateY(0)',
      },
    },
    "&.-mobile": {
      display: 'none'
    },
    "@media (max-width: 1024px)": {
      "&.-mobile": {
        display: 'flex'
      },
      "&.-desktop": {
        display: 'none'
      }
    }
  },
  headerBg: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: '#3B9FBF',
    height: '80px'
  }
}

interface HeaderProps {
  classes?: any,
  openMenu: () => void,
  scrollDirection?: string,
  fixed?: boolean,
  hashLinks?: boolean
}

class Header extends React.Component<HeaderProps, {}> {
  createHeader(deviceClass, nav) {
    const { classes: c, scrollDirection, fixed } = this.props;

    return (
      <>
        <div id="header" className={classNames(c.headerWrapper, deviceClass, fixed && '-fixed')}>
          <HeaderNavbar>{ nav }</HeaderNavbar>
        </div>
        {
          !fixed && <div id="header" className={classNames(c.headerWrapper, '-showOnScroll', deviceClass, scrollDirection !== 'initial' && scrollDirection === 'up' && '-visible')}>
            <HeaderNavbar>{ nav }</HeaderNavbar>
            <div className={c.headerBg}></div>
          </div>
        }

      </>
    )
  }
  render() {
    const { classes: c, openMenu, hashLinks } = this.props;

    const mobileNav = <HeaderMobileMenu openMenu={openMenu} />;
    const desktopNav = <HeaderNavigation hashLinks={hashLinks} />;

    return (
      <div className={c.header}>
        {this.createHeader('-mobile', mobileNav)}
        {this.createHeader('-desktop', desktopNav)}
      </div>
    )
  }
}

export default injectSheet(styles)(Header);
