import * as React from 'react'
import injectSheet from 'react-jss'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'gatsby'
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import HQTheme from '../../theme/theme'
import HubspotFormDialog from "../../components/Hubspot/Form";
import classNames from 'classnames';

const socialIcons = [
  {
    icon: FaEnvelope,
    dialog: true
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

const linkStates = {
  "&:hover": {
    color: HQTheme.palette.primary.main
  },
  "&.-active": {
    color: '#13F4CA'
  }
}

const styles = {
  pageNavigationMobile: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '48px'
  },
  footerBlocksMobile: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  footerBlockMobile: {
    flex: '1 50%',
    margin: '16px 0 16px 0'
  },
  footerBlockTitleMobile: {
    color: '#212121'
  },
  footerBlockItemMobile: {
    textDecoration: 'none',
    display: 'block',
    lineHeight: '3rem',
    color: HQTheme.palette.primary.main,
    fontSize: '1.25rem',
    cursor: 'pointer',
    ...linkStates,
    "& > a": {
      ...linkStates,
    }
  },
  socialIcon: {
    padding: '0 8px',
    borderRadius: '8px',
    display: 'inline-block !important',
    marginRight: '16px',
    marginBottom: '16px',
    border: '2px solid #999',
    fontSize: '1.8rem',
    color: '#999',
    lineHeight: '3rem',
    ...linkStates,
    "&:hover": {
      color: HQTheme.palette.primary.main,
      border: `2px solid ${HQTheme.palette.primary.main}`,
    },
    "& > svg": {
      verticalAlign: 'middle'
    }
  }
}

export interface MobilePageNavigationProps {
  classes?: any,
  sections: any,
  hashLinks?: boolean,
  activePage?: string,
  closeMenu: () => void
}

class MobilePageNavigation extends React.Component<MobilePageNavigationProps, {formId: string}> {
  state = {
    formId: ''
  }
  isActive = (slug) => {
    return slug === this.props.activePage
  }
  renderSections = (sections) => {
    const { classes: c, closeMenu, hashLinks } = this.props;

    return sections.map(section => {
      return (
        <div className={c.footerBlockMobile} key={section.title}>
          <h2 className={c.footerBlockTitleMobile}>{section.title}</h2>
          {
            section.items.map(item => {
              return (
                item.redirect
                  ? <a className={c.footerBlockItemMobile} href={item.redirect} onClick={closeMenu} key={item.name}>{item.name}</a>
                  : item.singlePage
                  ? <Link to={item.slug} key={item.name} className={classNames(c.footerBlockItemMobile, this.isActive(item.slug) && '-active')}>{item.name}</Link>
                  : hashLinks
                  ? <Link to={`#${item.slug}`} key={item.name} className={c.footerBlockItemMobile}>{item.name}</Link>
                  : <ScrollLink to={item.slug} key={item.name} activeClass="-active" spy={true} smooth={true} className={c.footerBlockItemMobile} onClick={closeMenu}>{item.name}</ScrollLink>
              )
            })
          }
        </div>
      )
    })
  }
  renderContactForm = () => {
    this.setState({formId: "1e0d4ce1-2273-4dc5-8774-1a60518cf1f0"})
  }
  closeContactForm = () => {
    this.setState({formId: ''})
  }
  renderSocialIcons = () => {
    const { classes: c, closeMenu } = this.props;

    return socialIcons.map(socialIcon => {
      const SocialIcon = socialIcon.icon;

      if (socialIcon.dialog) {
        return (
          <a onClick={this.renderContactForm} className={c.socialIcon} key={'dialogTrigger'}>
            <SocialIcon />
          </a>
        )
      }

      return (
        <a href={socialIcon.url} onClick={closeMenu} className={c.socialIcon} key={socialIcon.url}>
          <SocialIcon />
        </a>
      )
    })
  }
  render() {
    const { classes: c, sections, activePage } = this.props;
    console.log(activePage)
    return (
      <nav className={c.pageNavigationMobile}>
        <div className={c.footerBlocksMobile}>
          {!! sections && this.renderSections(sections)}
          <div className={c.footerBlockMobile}>
            <h2 className={c.footerBlockTitleMobile}>Contact us</h2>
            { this.renderSocialIcons() }
          </div>
        </div>
        {
          !! this.state.formId && <HubspotFormDialog portalId={"5161923"} formId={this.state.formId} handleClose={this.closeContactForm}/>
        }
      </nav>
    )
  }
}

export default injectSheet(styles)(MobilePageNavigation);
