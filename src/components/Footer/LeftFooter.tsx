import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { MdClear } from 'react-icons/md'
import { FaTwitter, FaYoutube, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa'

import Link from 'gatsby-link'
import Img from "gatsby-image"

import HQTheme from '../../theme/theme'
import HubspotFormDialog from "../Hubspot/Form";

const socialIcons = [
  {
    icon: FaEnvelope,
    url: 'mailto:info@hq.app',
    customAction: true
  },
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/HQAppBe/'
  },
  {
    icon: FaTwitter,
    url: 'https://twitter.com/hqappbe'
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/company/hqappbe/'
  },
  {
    icon: FaYoutube,
    url: 'https://www.youtube.com/channel/UC9KJYHmjexQkzc_P2A0VArA/about?disable_polymer=1'
  }
]

const styles = {
  footer: {
    width: '400px',
    height: 'calc(100% - 96px - 96px)',
    transform: 'translateX(-100%)',
    transition: 'all 300ms',
    position: 'fixed',
    top: '0',
    zIndex: '1',
    "&.-open": {
      transform: 'translateX(0)',
      "& $footerToggle": {
        backgroundColor: '#1F0D84',
        color: '#fff',
        "@media (max-width: 464px)": {
          display: 'none'
        }
      }
    },
    "@media (max-width: 1300px)": {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
    "@media (max-width: 1024px)": {
      display: 'none'
    }
  },
  footerContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1F0D84',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  footerContentBlock: {
    padding: '8px 24px 8px 24px',
    color: '#fff',
    "& > h3": {
      fontFamily: 'Poppins, sans serif',
      fontWeight: '400',
      marginBottom: '4px'
    },
    "& > a": {
      textDecoration: 'none',
      fontWeight: '300',
      color: HQTheme.palette.text.secondary,
      lineHeight: '2rem',
      display: 'block',
      "&.-active": {
        color: HQTheme.palette.secondary.main,
      },
      "&:hover": {
        color: HQTheme.palette.secondary.main
      }
    }
  },
  footerToggle: {
    position: 'absolute',
    top: 'calc(50% - 25px)',
    borderRadius: '0 12px 12px 0',
    right: '-64px',
    width: '64px',
    height: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: HQTheme.palette.primary.main,
    lineHeight: '50px',
    textAlign: 'center',
    cursor: 'pointer',
    "&.-active": {
      backgroundColor: HQTheme.palette.secondary.main,
      color: HQTheme.palette.primary.main,
    }
  },
  footerMask: {
    display: 'none',
    "@media (max-width: 1300px)": {
      display: 'initial',
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  },
  closeIcon: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    fontSize: '2rem',
    color: '#fff',
    cursor: 'pointer'
  },
  version: {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '300',
    fontSize: '0.6rem'
  },
  startit: {
    position: 'absolute',
    right: '16px',
    bottom: '10px',
    opacity: '0.4',
    "& > img": {
      width: '80px'
    }
  },
  socialIcon: {
    display: 'inline-block !important',
    marginRight: '16px',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  footerHeader: {
    height: '48px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#220F80',
    fontFamily: 'Poppins, sans serif',
    justifyContent: 'center',
    "& > span": {
      lineHeight: '1.4rem',
      fontSize: '0.9rem'
    },
    "& > span:first-of-type": {
      fontSize: '1.1rem',
      color: HQTheme.palette.text.primary
    },
    "& > span:last-of-type": {
      color: 'rgba(255, 255, 255, 0.5)'
    }
  },
  footerClosing: {
    position: 'relative',
    height: '48px',
    padding: '24px',
    backgroundColor: '#220F80',
    fontFamily: 'Poppins, sans serif',
  }
}

interface FooterItem {
  name: string,
  slug: string,
  redirect: string
}

interface FooterBlock {
  title: string
  items: FooterItem[]
}

interface LeftFooterProps {
  classes: any,
  open: boolean,
  activePage: string,
  footerBlocks: FooterBlock[],
  handleFooterToggle: () => void,
  image: object
}

class LeftFooter extends React.Component<LeftFooterProps,{}> {
  state = {
    formId: ''
  }
  isActivePage(pageSlug) {
    return pageSlug === this.props.activePage;
  }
  isFooterPage() {
    const pageSlug = this.props.activePage;
    return pageSlug !== '' && pageSlug !== 'discover' && pageSlug !== 'pricing';
  }
  renderContactForm = () => {
    this.setState({formId: "1e0d4ce1-2273-4dc5-8774-1a60518cf1f0"})
  }
  closeContactForm = () => {
    this.setState({formId: ''})
  }
  render() {
    const { classes: c, open, footerBlocks, handleFooterToggle, image } = this.props;
    return (
      <div className={c.footerWrapper}>
        <div className={classNames(c.footer, open ? '-open' : undefined)}>
          <div className={c.footerHeader}>
            <span>HQ</span>
            <span>Work Centralized</span>
          </div>
          <div className={c.footerContent}>
            {
              footerBlocks.map(block => {
                return (
                  <div className={c.footerContentBlock} key={block.title}>
                    <h3>{block.title}</h3>
                    {
                      block.items.map(item => {
                        return (
                          item.redirect
                            ? <a href={item.redirect} key={item.name}>{item.name}</a>
                            : <Link className={this.isActivePage(item.slug) ? '-active' : undefined} to={item.slug} key={item.name}>{item.name}</Link>
                        )
                      })
                    }
                  </div>
                )
              })
            }
            <div className={c.footerContentBlock}>
              <h3>Contact us</h3>
              {
                socialIcons.map(socialIcon => {
                  const SocialIcon = socialIcon.icon;
                  return (

                    socialIcon.customAction
                      ? <a onClick={() => this.renderContactForm()} className={c.socialIcon} key={socialIcon.url}>
                        <SocialIcon />
                      </a>
                      : <a href={socialIcon.url} className={c.socialIcon} key={socialIcon.url}>
                        <SocialIcon />
                      </a>

                  )
                })
              }
            </div>
          </div>
          <div className={c.footerClosing}>
            <div className={c.version}>Version 0.26 - Copyright © 2018 HQ. All rights reserved</div>
            {image && <a href="http://startit.be/startups" className={c.startit}><Img  fixed={image} /></a>}
          </div>
          <div className={classNames(c.footerToggle, this.isFooterPage() ? '-active' : undefined)} onClick={() => handleFooterToggle()}>Info</div>
          <MdClear onClick={() => handleFooterToggle()} className={c.closeIcon}/>
        </div>
        {
          open && <div className={c.footerMask}></div>
        }
        {
          !! this.state.formId && <HubspotFormDialog portalId={"5161923"} formId={this.state.formId} handleClose={this.closeContactForm}/>
        }
      </div>
    )
  }
}

export default injectSheet(styles)(LeftFooter);
