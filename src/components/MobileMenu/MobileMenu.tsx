import * as React from 'react'
import injectSheet from 'react-jss'
import PageNavigation from '../PageNavigation/PageNavigation'
import { MdClear } from 'react-icons/md'
import Img from "gatsby-image"

const styles = {
  mobileMenu: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#FFFFFF',
    zIndex: '2',
    "& > nav": {
      height: 'calc(100% - 160px)'
    }
  },
  closeMenuIcon: {
    fontSize: '2rem',
    position: 'absolute',
    top: '32px',
    right: '24px',
    color: '#000',
    cursor: 'pointer'
  },
  startit: {
    position: 'absolute',
    left: '16px',
    bottom: '16px',
    "& > img": {
      width: '56px',
      filter: 'opacity(0.2) drop-shadow(0 0 0 white)'
    }
  },
}

interface MobileMenuProps {
  classes?: any,
  activePage: string,
  sections: any,
  closeMenu: () => void,
  image?: any,
  hashLinks: boolean
}

class MobileMenu extends React.Component<MobileMenuProps,{}> {
  render() {
    const { classes: c, activePage, sections, closeMenu, image, hashLinks } = this.props;
    return (
      <div className={this.props.classes.mobileMenu}>
        <PageNavigation mobile activePage={activePage} sections={sections} hashLinks={hashLinks} closeMenu={closeMenu}/>
        <MdClear onClick={closeMenu} className={c.closeMenuIcon} />
        {
          image && <a href="http://startit.be/startups" className={c.startit}><Img  fixed={image} /></a>
        }
      </div>
    )
  }
}

export default injectSheet(styles)(MobileMenu);
