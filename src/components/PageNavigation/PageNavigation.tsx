import * as React from 'react'
import injectSheet from 'react-jss'
import { Link as HashLink } from 'gatsby';
import MobilePageNavigation from "../PageNavigation/PageNavigationMobile";
import ScrollLinks from "../../components/PageNavigation/ScrollLinks";

const styles = {
  pageNavigation: {
    "& > div": {
      marginLeft: '24px'
    },
    "& > div > a": {
      marginRight: '24px',
      fontWeight: '500',
      color: '#FFFFFF',
      cursor: 'pointer',
      textDecoration: 'none',
      "&:hover": {
        color: '#2FF3CA'
      },
      "&.active": {
        color: '#2FF3CA'
      }
    }
  }
}

export interface PageNavigationProps {
  classes?: any,
  mobile?: boolean,
  hashLinks?: boolean,
  activePage?: string,
  closeMenu: () => void
}

class PageNavigation extends React.Component<PageNavigationProps, {}> {
  renderScrollLinks = () => {
    return (
      <div>
        <ScrollLinks />
      </div>
    )
  }

  renderHashLinks = () => {
    return (
      <div>
        <HashLink to="#discover">
          Discover
        </HashLink>
        <HashLink to="#testimonials">
          Testimonials
        </HashLink>
        <HashLink to="#pricing">
          Pricing
        </HashLink>
      </div>
    )
  }

  renderMobileView() {
    const { sections, closeMenu, hashLinks, activePage } = this.props;

    return <MobilePageNavigation sections={sections} closeMenu={closeMenu} hashLinks={hashLinks} activePage={activePage}/>
  }
  renderDesktopView() {
    const { classes: c, hashLinks } = this.props;

    return (
      <nav className={c.pageNavigation}>
        {
          hashLinks ? this.renderHashLinks() : this.renderScrollLinks()
        }
      </nav>
    )
  }
  render() {
    const { mobile } = this.props;

    return mobile ? this.renderMobileView() : this.renderDesktopView()
  }
}

export default injectSheet(styles)(PageNavigation);
