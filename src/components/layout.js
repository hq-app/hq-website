import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import injectSheet from 'react-jss'

import MobileMenu from './MobileMenu/MobileMenu'
import Footer from './Footer/Footer'
import {VelocityTransitionGroup} from 'velocity-react'

import Header from '../components/Header/Header'

import _ from "underscore";
import Boundaries from "./Boundaries/Boundaries";
import { footerHeight } from '../components/Footer/Footer'
import { headerHeight } from '../components/Header/Header'


const styles = {
	'@global': {
		html: {
			fontSize: '16px',
			"@media (max-width: 1600px)": {
				fontSize: '14px',
			},

			"@media (max-width: 767px)": {
				fontSize: '12px',
			}
		},
		body: {
			fontFamily: 'Roboto, sans-serif',
			margin: '0',
			backgroundColor: '#FAFAFA',
			"& div.tippy-tooltip": {
				backgroundColor: '#999999',
				"& > div.arrow-regular": {
					borderTop: '7px solid #999999 !important',
				}
			},
			"& iframe[id^='rFRPLRJpV9SFHB-kEItIFGW8Qq4_rewardingWidgetTrigger']": {
				width: '218px'
			}
		}
	},
  layout: {
		"& > div:first-of-type": {
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0'
		}
	},
	layoutContent: {
		minHeight: `calc(100vh - ${headerHeight}px)`,
		"& > div:first-of-type:not(.home)": {
			marginTop: '80px',
		}
	}
}

class Layout extends React.Component {
  state = {
		scrollDirection: 'down',
    menuOpen: false
  }
	componentDidMount() {
		let previous = window.scrollY;

		const setDirection = () => {
			window.scrollY > previous ? this.setScrollDirection('down') : window.scrollY === 0 ? this.setScrollDirection('initial') : this.setScrollDirection('up');
			previous = window.scrollY;
		}

		window.addEventListener('scroll', _.throttle(setDirection, 500));
	};
	setScrollDirection = (scrollDirection) => {
		this.setState({scrollDirection})
	}
	onMenuClick = () => {
		this.setState((prevState) => {
			return {menuOpen: !prevState.menuOpen}
		})
	}
	getActiveSlug() {
		const { location } = this.props;

		if (!! location) {
			return location.pathname.substring(1).split('/')[0];
		}
	}
	isStandalonePage = () => {
		const { location } = this.props;

		if (!! location) {
			return location.pathname !== '/';
		}
	}
  render() {
    const { children, classes: c } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
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
                <html lang="en" />
              </Helmet>
              <div className={c.layout}>
								<Boundaries>
									<Header scrollDirection={this.state.scrollDirection} hashLinks={this.isStandalonePage()} openMenu={this.onMenuClick} fixed={this.isStandalonePage() }/>
								</Boundaries>
								<div className={c.layoutContent}>{ children }</div>
								<Footer hashLinks={this.isStandalonePage()} />
								<VelocityTransitionGroup enter={{animation: 'fadeIn'}} leave={{animation: 'fadeOut'}}>
									{
										this.state.menuOpen &&
										<MobileMenu
											closeMenu={this.onMenuClick}
											sections={data.site.siteMetadata.footerBlocks}
											hashLinks={this.isStandalonePage()}
                      activePage={this.getActiveSlug()}
										/>}
								</VelocityTransitionGroup>
              </div>
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
