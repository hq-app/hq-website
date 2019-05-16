import * as React from 'react'
import injectSheet from 'react-jss'
import Boundaries from "../../components/Boundaries/Boundaries";
import Stroke from "../../components/Page/Stroke";
import classNames from 'classnames';
import { MdStar } from 'react-icons/md';
import Section from "../../components/Section/Section";
import Toggle from "../../components/Toggle/Toggle";
import HQTheme from "../../theme/theme";
import { Link } from "gatsby";
import { Element } from 'react-scroll';
import HubspotFormDialog from "../../components/Hubspot/Form";
import SmallTestimonial from "../../components/SocialProof/smallTestimonial";

const styles = {
  pricingCards: {
    display: 'flex',
    justifyContent: 'space-evenly',
    "@media (max-width: 1024px)": {
      flexDirection: 'column',
      margin: '24px 0'
    }
  },
  pricingCard: {
    width: '360px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    borderRadius: '30px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    border: '4px solid transparent',
    "&:nth-child(2)": {
      margin: '0 24px',
      "@media (max-width: 1024px)": {
        margin: '24px 0'
      }
    },
    "& > div": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "&.-main": {
      border: '4px solid #3B9FBF',
      "& $pricingCardButton": {
        backgroundColor: '#3B9FBF',
        color: '#FFFFFF',
        "&:hover": {
          backgroundColor: '#235F73'
        }
      },
      "& > $pricingCardHeader": {
        "& > h2": {
          backgroundColor: '#3B9FBF',
          color: '#FFFFFF',
          width: '100%',
          margin: '0',
          padding: '16px 0',
          borderRadius: '24px 24px 0 0',
        },
      }
    },
    "@media (max-width: 1024px)": {
      width: '100%'
    }
  },
  pricingCardHeader: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 150px',
    "& > h2": {
      borderBottom: '3px solid #359FC1',
      width: '60%',
      fontSize: '1.6rem',
      fontWeight: '500',
      margin: '0',
      padding: '16px 0',
      color: '#3B9FBF',
    },
    "& > p": {
      width: '70%',
      margin: 'auto',
      color: '#999',
      fontWeight: '300',
      fontSize: '1rem'
    }
  },
  pricingCardPrice: {
    flex: '0 0 130px',
    fontSize: '3.6rem',
    fontWeight: '500',
    color: '#666',
    flexDirection: 'column',
    "& > span": {
      position: 'relative',
      "& > span": {
        position: 'absolute',
        fontSize: '1.6rem',
        top: '4px',
        left: '-16px'
      }
    },
    "& > span:nth-child(2)": {
      color: '#999',
      fontSize: '1rem',
      marginBottom: '6px',
      fontWeight: '500'
    },
    "& > span:nth-child(3)": {
      color: '#999',
      fontSize: '1rem',
      fontWeight: '300'
    },
  },
  pricingCardFeatures: {
    flex: '0 150px',
    flexDirection: 'column',
    marginBottom: '24px',
    color: '#666',
    "& > div": {
      flex: '0 32px'
    }
  },
  pricingCardButtonContainer: {
    flex: '0 0 64px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  pricingCardButton: {
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #3B9FBF',
    width: '60%',
    color: '#3B9FBF',
    textTransform: 'uppercase',
    marginBottom: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
    "&:hover": {
      backgroundColor: '#3B9FBF',
      color: '#FFFFFF'
    }
  },
  mostPopular: {
    position: 'absolute',
    height: '56px',
    width: '56px',
    border: '6px solid #FAFAFA',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#3B9FBF',
    color: '#FFFFFF',
    borderRadius: '50%',
    padding: '4px',
    "& > svg": {
      width: '32px',
      height: '32px'
    }
  },
  pricingTopInfo: {
    margin: '12px 0 32px 0',
    fontSize: '1.5rem',
    lineHeight: '1.8'
  },
  trialInfo: {
    fontWeight: '300',
    color: '#666',
    textAlign: 'center'
  },
  YearMonthToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666666'
  },
  limitedOffer: {
    margin: '32px 0 0 0',
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
    lineHeight: '1.8',
    "& > span": {
      fontWeight: '300',
      color: '#666',
      "& > strong": {
        color: '#409FBD'
      }
    }
  },
  moreInfoLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '48px 0',
    textAlign: 'center',
    "& > a": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '56px',
      padding: '0 24px',
      color: '#FFFFFF',
      fontSize: '1.2rem',
      fontWeight: '500',
      backgroundColor: HQTheme.palette.primary.main,
      borderRadius: '12px',
      cursor: 'pointer',
      textDecoration: 'none',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      "&:hover": {
        backgroundColor: HQTheme.palette.secondary.main,
      }
    }
  },
  pricingTestimonials: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '75%',
    margin: 'auto',
    "& > div": {
      width: '100%',
      height: '100%'
    },
    "& > div:first-child": {
     marginRight: '8px'
    },
    "& > div:last-child": {
      marginLeft: '8px'
    },
    "@media(max-width: 767px)": {
      width: '100%'
    }
  }
}

interface PricingProps {
  classes?: any
}

interface PricingState {
  monthlyPrice: boolean,
  formId: string
}

class Pricing extends React.Component<PricingProps, PricingState> {
  state = {
    monthlyPrice: false,
    formId: ''
  }
  toggleMonthlyPrice = () => {
    this.setState(prevState => {
      return { monthlyPrice: !prevState.monthlyPrice }
    })
  }
  renderContactForm = (planName) => {
    if (planName === 'Pro') {
      this.setState({formId: "4d339805-7106-46ea-b92e-f1dfc79b1953"})
    }
    if (planName === 'Enterprise') {
      this.setState({formId: "ba399cd2-e3fe-41d8-820e-4e0f865155e7"})
    }
  }
  closeContactForm = () => {
    this.setState({formId: ''})
  }
  render() {
    const { classes: c } = this.props;
    return (
      <Element name="pricing" className={c.pricing}>
        <Section dark>
          <Stroke dark stretch title={ "Pricing" }>
            <Boundaries>
                <div className={c.pricingTopInfo}>
                  <div className={c.trialInfo}>Free 30 days trial for PRO plans, no credit card required</div>
                  <div className={c.YearMonthToggle}>
                    <span>Annual</span>
                    <Toggle
                      id={`priceToggle`}
                      isChecked={this.state.monthlyPrice}
                      handleChange={this.toggleMonthlyPrice}
                      onColor={HQTheme.palette.primary.light}
                      onHandleColor={HQTheme.palette.common.white}
                    />
                    <span>Month</span>
                  </div>
                  <div className={c.limitedOffer}>Limited offer: <span>Save <strong>20%</strong> on annual plans</span></div>
              </div>
              <div className={c.pricingCards}>
                <div className={c.pricingCard}>
                  <div className={c.pricingCardHeader}>
                    <h2>Essentials</h2>
                    <p>For individuals and small teams wanting to try HQ</p>
                  </div>
                  <div className={c.pricingCardPrice}>Free</div>
                  <div className={c.pricingCardFeatures}>
                    <div>5 third-party apps</div>
                    <div>10.000 documents</div>
                    <div>30 days of recent activity</div>
                  </div>
                  <div className={c.pricingCardButtonContainer}>
                    <a className={c.pricingCardButton} href={'https://hq.app/app'}>Get started</a>
                  </div>
                </div>

                <div className={classNames(c.pricingCard, '-main')}>
                  <div className={c.mostPopular}><MdStar /></div>
                  <div className={c.pricingCardHeader}>
                    <h2>PRO</h2>
                    <p>For professionals and larger teams who want more</p>
                  </div>
                  <div className={c.pricingCardPrice}>
                    {this.state.monthlyPrice ? <span><span>€</span>10</span> : <span><span>€</span>8</span>}
                    <span>per user / month</span>
                    {this.state.monthlyPrice ? <span>billed monthly</span> : <span>billed yearly</span>}
                  </div>
                  <div className={c.pricingCardFeatures}>
                    <div>Unlimited third-party apps</div>
                    <div>Unlimited documents</div>
                    <div>2 years of recent activity</div>
                    <div>Add up to 15 members to a team</div>
                  </div>
                  <div className={c.pricingCardButtonContainer}>
                    <div className={c.pricingCardButton} onClick={() => this.renderContactForm('Pro')}>Early access</div>
                  </div>
                </div>

                <div className={c.pricingCard}>
                  <div className={c.pricingCardHeader}>
                    <h2>Enterprise</h2>
                    <p>For larger businesses who want everything</p>
                  </div>
                  <div className={c.pricingCardPrice}>Custom</div>
                  <div className={c.pricingCardFeatures}>
                    <div>Unlimited third-party apps</div>
                    <div>Unlimited documents</div>
                    <div>Unlimited time of recent activity</div>
                    <div>Unlimited members</div>
                  </div>
                  <div className={c.pricingCardButtonContainer}>
                    <div className={c.pricingCardButton} onClick={() => this.renderContactForm('Enterprise')}>Contact us</div>
                  </div>
                </div>
              </div>
              <div className={c.moreInfoLink}><Link to={'/pricing-plans'}>Check out the details of our pricing plans</Link></div>
              <div className={c.pricingTestimonials}>
                <SmallTestimonial
                  name={'Annelies N.'}
                  sub={'Lawyer, Brijs & Burnet'}
                  quote={"I've been using 'HQ.app' for a few months and it saves me so much time"}
                  avatar={'annelies_n_thumb.jpg'}
                  dark
                />
                <SmallTestimonial
                  name={'Michael V.'}
                  sub={'Sales Manager, Santana'}
                  quote={'My new favorite app. Hands-down.'}
                  avatar={'michael_v_thumb.jpeg'}
                  dark
                />
              </div>
            </Boundaries>
          </Stroke>
        </Section>
        {
          !! this.state.formId && <HubspotFormDialog portalId={"5161923"} formId={this.state.formId} handleClose={this.closeContactForm}/>
        }
      </Element>
    )
  }
}

export default injectSheet(styles)(Pricing)
