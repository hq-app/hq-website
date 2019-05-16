import * as React from 'react'
import injectSheet from 'react-jss'
import { Link as ScrollLink} from 'react-scroll'
import { Link } from 'gatsby'
import { FaTwitter, FaYoutube, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import Boundaries from "../Boundaries/Boundaries";
import HubspotFormDialog from "../../components/Hubspot/Form";
import HubspotForm from 'react-hubspot-form'
import ScrollLinks from "../../components/PageNavigation/ScrollLinks";

const styles = {
  footer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: '#2E9FC3'
  },
  footerContent: {
    display: 'flex',
    padding: '24px 0',
    justifyContent: 'space-between',
    "@media (max-width: 1200px)": {
      flexDirection: 'column',
      marginBottom: '48px',
    },
    "& > div:first-of-type": {
      flex: '1 100%'
    },
    "& > div:last-of-type": {
      flex: '0 0 40%'
    }
  },
  footerContentLinks: {
    display: 'flex',
    "& > div": {
      marginRight: '48px',
      "& > .links": {
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        fontWeight: '500',
        fontSize: '1.2rem',
        lineHeight: '2.4rem',
        "& a": {
          color: 'rgba(255, 255, 255, 0.4)',
          textDecoration: 'none',
          cursor: 'pointer',
          "&:hover": {
            color: '#FFFFFF'
          }
        }
      }
    },
    "@media (max-width: 1200px)": {
      justifyContent: 'inherit'
    },
    "@media (max-width: 767px)": {
      flexWrap: 'wrap',
      justifyContent: 'initial',
      "& > div:first-of-type, & > div:nth-of-type(2)": {
        width: '50%',
        marginRight: '0'
      },
      "& > div:nth-of-type(3)": {
        width: '100%',
        marginRight: '0',
        marginTop: '24px'
      }
    },
  },
  footerContentHeader: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#FFFFFF'
  },
  footerEnd: {
    height: '64px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    "& > div": {
      height: '100%'
    }
  },
  footerEndContent: {
    height: '100%',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    "& > a": {
      color: 'rgba(255, 255, 255, 0.4)',
      textDecoration: 'none',
      "&:hover": {
        color: '#FFFFFF'
      }
    }
  },
  connectItems: {
    display: 'flex'
  },
  connectColumn: {
    marginRight: '32px'
  },
  connectItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    cursor: 'pointer',
    "& > span:first-of-type": {
      height: '40px',
      width: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderRadius: '50%',
      display: 'inline-block',
      position: 'relative',
      textAlign: 'center',
      marginRight: '16px',
      "& > svg": {
        height: '24px',
        width: '100%',
        position: 'absolute',
        top: 'calc(50% - 12px)',
        left: '0',
        color: '#359FC1'
      }
    },
    "&:hover": {
      "& > span:first-of-type": {
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }
    }
  },
  subscribeToNewsletter: {
    "@media (max-width: 767px)": {
      marginTop: '24px'
    }
  },
  subscribeToNewsletterForm: {
    display: 'flex',
    marginTop: '24px',
    "& > input": {
      height: '32px',
      fontSize: '1rem',
      marginRight: '8px',
      width: '100%',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      padding: '12px',
      color: '#205F74',
      fontWeight: '500',
      "@media (max-width: 1500px)": {
        width: '40%',
      },
      "@media (max-width: 1024px)": {
        width: '100%',
      },
      "&:focus": {
        outline: 'none'
      }
    },
    "& > div": {
      width: '100%',
      "& > div[id^='reactHubspotForm']": {
        width: '100%',
        "& > div.submitted-message": {
          color: '#FFFFFF'
        },
        "& > form": {
          display: 'flex',
          alignItems: 'center',
          "& > div > label": {
            display: 'none'
          },
          "& > div:first-of-type": {
            flex: '1 100%',
            "& > div": {
              "& > input": {
                height: '56px',
                fontSize: '1rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                color: '#205F74',
                fontWeight: '500',
                "@media (max-width: 1024px)": {
                  width: '100%',
                },
                "&:focus": {
                  outline: 'none'
                }
              }
            },
            "& > ul": {
              position: 'absolute',
              color: '#FFFFFF',
              padding: '0',
              listStyle: 'none'
            }
          },
          "& > div.hs_error_rollup": {
            display: 'none'
          },
          "& > div:last-of-type": {
            flex: '0 0 90px',
            "& > div:last-of-type": {
              "& > input": {
                height: '56px',
                marginLeft: '8px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                fontWeight: '500',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: '#205F74',
                textAlign: 'center',
                border: 'none',
                "&:hover": {
                  backgroundColor: '#FFFFFF',
                  color: '#359FC1'
                },
                "&:focus": {
                  outline: 'none'
                }
              }
            }
          }
        }
      }
    }
  }
}

interface FooterProps {
  classes?: any,
  hashLinks?: boolean
}

class Footer extends React.Component<FooterProps,{}> {
  state = {
    formId: ''
  }

  renderContactForm = () => {
    this.setState({formId: "1e0d4ce1-2273-4dc5-8774-1a60518cf1f0"})
  }

  closeContactForm = () => {
    this.setState({formId: ''})
  }

  renderScrollLinks = () => {
    return (
      <>
        <ScrollLinks />
        <a href={"https://www.hq.app/app"}>Log in</a>
      </>
    )
  }

  renderHashLinks = () => {
    return (
      <>
        <Link to="#discover">
          Discover
        </Link>
        <Link to="#testimonials">
          Testimonials
        </Link>
        <Link to="#pricing">
          Pricing
        </Link>
        <a href={"https://www.hq.app/app"}>Log in</a>
      </>
    )
  }

  render() {
    const { classes: c, hashLinks } = this.props;
    return (
      <div className={c.footer}>
        <Boundaries>
          <div className={c.footerContent}>
            <div className={c.footerContentLinks}>
              <div>
                <div className={c.footerContentHeader}>Product</div>
                <div className={"links"}>
                  {
                    hashLinks
                    ? this.renderHashLinks()
                    : this.renderScrollLinks()
                  }
                </div>
              </div>
              <div>
                <div className={c.footerContentHeader}>Community</div>
                <div className={"links"}>
                  <Link to={"/about"}>About</Link>
                  <Link to={"/pricing-plans"}>Pricing plans</Link>
                  <a href={"https://hq.app/help"}>Help Center</a>
                </div>
              </div>
              <div>
                <div className={c.footerContentHeader}>Connect with us</div>
                <div className={"links"}>
                  <div className={c.connectItems}>
                    <div className={c.connectColumn}>
                      <a className={c.connectItem} href={"https://www.facebook.com/HQAppBe/"} target={"_blank"} >
                        <span><FaFacebookF /></span>
                        <span>Facebook</span>
                      </a>
                      <a className={c.connectItem} href={"https://www.linkedin.com/company/hqappbe/"} target={"_blank"} >
                        <span><FaLinkedinIn /></span>
                        <span>LinkedIn</span>
                      </a>
                      <a className={c.connectItem} href={"https://www.instagram.com/hqappbe/"} target={"_blank"} >
                        <span><FaInstagram /></span>
                        <span>Instagram</span>
                      </a>
                    </div>
                    <div>
                      <a className={c.connectItem} href={"https://twitter.com/hqappbe"} target={"_blank"} >
                        <span><FaTwitter /></span>
                        <span>Twitter</span>
                      </a>
                      <a className={c.connectItem} href={"https://www.youtube.com/channel/UC9KJYHmjexQkzc_P2A0VArA/about?disable_polymer=1"} target={"_blank"} >
                        <span><FaYoutube /></span>
                        <span>Youtube</span>
                      </a>
                      <a onClick={() => this.renderContactForm()} className={c.connectItem}>
                        <span><FaEnvelope /></span>
                        <span>Mail</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div>
              <form></form>
            </div>


            <div className={c.subscribeToNewsletter}>
              <div className={c.footerContentHeader}>Subscribe to our newsletter</div>
              <div className={c.subscribeToNewsletterForm}>
                <HubspotForm
                  portalId={'5161923'}
                  formId={'aa9e22d9-1289-447d-979f-5e8f930164fa'}
                  loading={<div>Loading...</div>}
                />
              </div>
            </div>
          </div>
        </Boundaries>
        <div className={c.footerEnd}>
          <Boundaries>
            <div className={c.footerEndContent}>
              <div>Copyright 2019 © HQ</div>
              <Link to={"/privacy-policy"}>Privacy Policy</Link>
            </div>
          </Boundaries>
        </div>
        {
          !! this.state.formId && <HubspotFormDialog portalId={"5161923"} formId={this.state.formId} handleClose={this.closeContactForm}/>
        }
      </div>
    )
  }
}

export default injectSheet(styles)(Footer);
