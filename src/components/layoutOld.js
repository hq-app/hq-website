import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import HeaderTitle from './Header/HeaderTitle'
import MobileMenu from './MobileMenu/MobileMenu'
import Footer from './Footer/Footer'
import {VelocityTransitionGroup} from 'velocity-react'

import Header from '../components/Header/Header'

import HQTheme from '../theme/theme';

const styles = {
  '@global': {
    html: {
      fontSize: '16px',
      "&.-discover": {
        "& .intercom-launcher": {
          bottom: '72px'
        },
        "@media (max-width: 767px)": {
          '& #intercom-container .intercom-launcher-frame, #intercom-container .intercom-launcher-discovery-frame, #intercom-positioner-tree .intercom-launcher-frame, #intercom-positioner-tree .intercom-launcher-discovery-frame': {
            right: '20px !important',
            bottom: '64px !important'
          },
          '& #intercom-container .intercom-launcher-badge-frame, #intercom-positioner-tree .intercom-launcher-badge-frame': {
            right: 'calc(20px - 4px) !important',
            bottom: 'calc(64px + 40px) !important'
          }
        },
      },
      "@media (max-width: 1000px)": {
        fontSize: "calc(12px + .4vw)"
      }
    },
    body: {
      fontFamily: 'Roboto, sans-serif',
      margin: '0',
      "& > #___gatsby": {
        height: '100%',
        "& > div": {
          height: '100%'
        }
      }
    }
  },
  layout: {
    minHeight: '100vh',
    //overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    color: HQTheme.palette.text.primary,
    transition: 'all 300ms',
    width: '100%',
    marginLeft: 'auto',
    position: 'relative',
    background: '#1f0e84',
    background: '-moz-linear-gradient(top, #1f0e84 0%, #2dcdda 100%)',
    background: '-webkit-linear-gradient(top, #1f0e84 0%,#2dcdda 100%)',
    background: 'linear-gradient(to bottom, #1f0e84 0%,#2dcdda 100%)',
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f0e84', endColorstr='#2dcdda',GradientType=0 )",
    "& > div": {
      width: '70%',
      margin: 'auto',
      "@media (max-width: 1024px)": {
        marginTop: '8px'
      },
      "@media (max-width: 767px)": {
        width: 'auto',
        margin: 'initial',
        marginTop: '8px',
      }
    },
    "@media (max-width: 1024px)": {
      //paddingBottom: 'calc(56px + 50px + 48px)',
    },
    // "&.-index": {
    //   "@media (max-width: 1024px)": {
    //       paddingBottom: '0',
    //   },
    // },
    "&.-footerOpen": {
      width: 'calc(100% - 400px)',
      marginLeft: 'auto',
      float: 'right',
      "& $page": {
        "& > div > div:last-of-type": {
          transition: 'all 300ms'
        }
      },
      "@media (max-width: 1300px)": {
        transition: 'none',
        width: 'initial',
        float: 'none',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }
    }
  },
  content: {
    margin:'24px',
    flex: '1 100%',
    //display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    "&.-onePage": {
      height: 'calc(100vh - 96px - 92px)',
      "@media (max-width: 1024px)": {
        height: '100vh'
      }
    },
    //justifyContent: 'center',
    "&.indexPage": {
      margin: '0',
      "& > $page": {
        height: '100%',
        width: '100%'
      }
    }
  },
  page: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    //justifyContent: 'center',
    "& > .full-page": {
      height: '100%',
    }
  },
  "@media (max-width: 1024px)": {
    content: {
      padding: '24px',
      paddingTop: '0'
    }
  },
  "@media (max-width: 767px)": {
    content: {
      flexDirection: 'initial',
      alignItems: 'initial',
      flex: 'initial'
    }
  },
  mobileMenu: {
    display: 'none'
  },
  mobileSignUpButton: {
    transition: 'all 300ms',
    zIndex: '3',
    display: 'none',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    "@media (max-width: 1024px)": {
      position: 'fixed',
      bottom: '24px',
      right: 'calc(50% - 60px - 12px)',
      width: '120px',
      height: '48px',
      backgroundColor: '#3144B5',
      border: '1px solid transparent',
      color: '#FFFFFF',
      padding: '0 16px 0 16px',
      borderRadius: '24px',
      cursor: 'pointer',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      "&:focus": {
        outline: 'none'
      },
      "&:hover": {
        backgroundColor: '#2123A0'
      }
    },
    "@media (max-width: 767px)": {
      "&.-discover": {
        padding: '0',
        height: '55px',

        left: 'auto',
        width: '20%',
        borderRadius: '0',
        bottom: '0',
        right: '0',
        boxShadow: 'none',
        // webkitBoxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
        // mozBoxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
        // boxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
      }
    }
  }
}

class Layout extends React.Component {
  state = {
    menuOpen: false
  }
  getActivePage(pages) {
    const activePage = pages.filter(page => {
      return page.slug === this.getActiveSlug()
    })
    return activePage[0];
  }
  getActiveSlug() {
    const { location } = this.props;

    if (!! location) {
      return location.pathname.substring(1).split('/')[0];
    }
  }
  isPage(page) {
    const { location } = this.props;
    if (!! location) {
      return location.pathname === page;
    }
  }
  onMenuClick = () => {
    this.setState((prevState) => {
      return {menuOpen: !prevState.menuOpen}
    })
  }
  handleFooterToggle = () => {
    this.setState((prevState) => {
      return {footerOpen: !prevState.footerOpen}
    })
  }
  isOnePage= () => {
    const { location } = this.props;
    const checks = ['/', '/discover', '/discover/'];

    return checks.some(check => {
      if (!! location) {
        return location.pathname === check;
      }
    });
  }
  render() {
    const { children, classes: c } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleOldQuery {
            site {
              siteMetadata {
                title,
                description,
                image,
                footerBlocks {
                  title,
                  items {
                    name,
                    slug,
                    redirect,
                    singlePage
                  }
                }
              }
            }
            logo: file(relativePath: { eq: "logo.png" }) {
              childImageSharp {
                fixed(width: 48, height: 48) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            startitFooter: file(relativePath: { eq: "logo-startit-white.png" }) {
              childImageSharp {
                fixed(width: 80) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            startitMobileMenu: file(relativePath: { eq: "logo-startit.png" }) {
              childImageSharp {
                fixed(width: 56) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
          `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.description },
                // TODO get metaImage to work
                { name: 'image', content: '../assets/metaImage.png' },
                { name: 'keywords', content: 'HQ, slack, dropbox, gdrive, googledrive, gmail, apps' },
              ]}
              link={[
                {href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500", rel: "stylesheet"},
                {href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200, 300,400,600", rel: "stylesheet"},
                {href: "https://fonts.googleapis.com/css?family=Roboto:300,500,700", rel: "stylesheet"},
                {href: "../assets/favicon.png", rel: "shortcut icon", type: 'image/png', sizes: '16x16'}
              ]}
            >
              <html lang="en" className={classNames(!this.state.menuOpen && (this.isPage('/discover') || this.isPage('/discover/')) && '-discover')}/>
            </Helmet>
            <div className={classNames(c.layout, this.state.footerOpen ? '-footerOpen' : undefined, this.isPage('/') ? '-index' : undefined)}>
              <Header activePage={this.getActiveSlug()} pages={data.site.siteMetadata.pages} openMenu={this.onMenuClick} logo={data.logo.childImageSharp.fixed}/>
              <div className={classNames(c.content, this.isOnePage() ? '-onePage' : undefined)}>
                <div id="page" className={c.page}>{children}</div>
                <VelocityTransitionGroup enter={{animation: 'fadeIn'}} leave={{animation: 'fadeOut'}}>
                  {this.state.menuOpen && <MobileMenu image={data.startitMobileMenu.childImageSharp.fixed} closeMenu={this.onMenuClick} activePage={this.getActiveSlug()} sections={data.site.siteMetadata.footerBlocks}/>}
                </VelocityTransitionGroup>
              </div>
              {
                ! this.isPage('/') && ! this.isPage('/pricing') && <a href="https://hq.app/app/logout" className={classNames(this.props.classes.mobileSignUpButton, !this.state.menuOpen && this.getActiveSlug() === 'discover' ? '-discover' : undefined)}>Sign up</a>
              }
            </div>
            <Footer image={data.startitFooter.childImageSharp.fixed} footerBlocks={data.site.siteMetadata.footerBlocks} activePage={this.getActiveSlug()} open={this.state.footerOpen} handleFooterToggle={this.handleFooterToggle}/>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectSheet(styles)(Layout)
