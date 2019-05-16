import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { Tooltip } from 'react-tippy';

import Layout from '../components/layout'

import {MdRemove, MdCheck, MdKeyboardArrowDown, MdKeyboardArrowUp, MdInfoOutline} from 'react-icons/md'
import HubspotFormDialog from "../components/Hubspot/Form";
import ExpansionPanelContainer from "../components/ExpansionPanel/ExpansionPanelContainer";
import Page from "../components/Page/Page";
import HQTheme from '../theme/theme';

import 'react-tippy/dist/tippy.css'

const stringifyValue = (val) => {
  return JSON.stringify(val)
}

const faqs = [
  {
    title: 'How do I create an account?',
    content: stringifyValue(['You can create an account by going to ', {type: 'link', url: 'https://hq.app/app/login', label: 'hq.app'}, '.'])
  },
  {
    title: 'How do I add an integration?',
    content: stringifyValue('You can add an integration by going to the settings, which you can find in the right upper corner of the app. There, you can see which integrations you have already added with their corresponding email address. To add a new integration, simply press the "+" button of the integration you would like to add and follow the steps. After successfully adding your integration, you can search for your files in HQ!')
  },
  {
    title: 'How do I delete an integration?',
    content: stringifyValue(['Sadly this is not possible yet. We are working on it though and will let you know as soon as this feature is available. For now, if you want to remove our permissions to your accounts, you can go to the the account provider, e.g. ', {type: 'link', url: 'https://www.dropbox.com/account/connected_apps', label: 'https://www.dropbox.com/account/connected_apps'}])
  },
  {
    title: 'Do you store files in HQ and do I have to move my files to yet another online file storage?',
    content: stringifyValue('No we do not store files in HQ. HQ offers a virtual organizing system which means you do not have to move all your files, since they stay stored in the original apps and accounts.')
  },
  {
    title: 'Can I use HQ without internet connection?',
    content: stringifyValue('Sadly this is not possible yet. We are working on it though and will let you know as soon as this feature is available.')
  },
  {
    title: 'How do you manage the data stream that goes through the application? Are you keeping a copy or do you have access to my Dropbox, email or Google Drive files?',
    content: stringifyValue(['We never keep copies of files longer than needed to deliver you a speedy service. To be exact, when you use any of these features, we are storing something temporarily:', {type: 'list', items: ['Upload: the file passes through our server to the service you want to upload;', 'Edit: to make sure you do not lose these files, we are keeping a copy until you close it;', 'Preview: a copy is kept for 24 hours or until you reach your maximum preview cache - which can be upgraded on the pro plan;', 'Download: a copy is removed after 24 hours to allow you to re-download faster.']}, {type: 'break'}, 'All other features do not cause any storage on our service. The goal is actually to re-use your existing storage more easily and to not compete with these services.', {type: 'break'}, {type: 'break'}, 'We are also considering adding an extra option \'Full Privacy Mode\' for pro-users, which would remove these functionalities from the app. We also have an Enterprise plan, where the server-part of our app that causes storage can be deployed at the client.'])
  }
]

const features = [
  {
    name: 'Apps, accounts and integrations',
    included: [
      {
        plan: 'Free',
        info: '5 third-party apps'
      },
      {
        plan: 'Pro',
        info: 'Unlimited'
      },
      {
        plan: 'Enterprise',
        info: 'Unlimited'
      }
    ],
    category: 'General'
  },
  {
    name: 'Library',
    included: [
      {
        plan: 'Free',
        info: '10.000 documents'
      },
      {
        plan: 'Pro',
        info: 'Unlimited'
      },
      {
        plan: 'Enterprise',
        info: 'Unlimited'
      }
    ],
    category: 'General'
  },
  {
    name: 'Searchable activity',
    included: [
      {
        plan: 'Free',
        info: '30 days of recent activity'
      },
      {
        plan: 'Pro',
        info: '2 years of recent activity'
      },
      {
        plan: 'Enterprise',
        info: 'Unlimited'
      }
    ],
    category: 'General'
  },
  {
    name: 'Additional team members',
    included: [
      {
        plan: 'Free',
        info: ''
      },
      {
        plan: 'Pro',
        info: '5'
      },
      {
        plan: 'Enterprise',
        info: 'Unlimited'
      }
    ],
    category: 'General'
  },

  {
    name: '1 searchbar for all your apps and accounts',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Find'
  },
  {
    name: 'Typehead instant search in My Library',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Find'
  },
  {
    name: 'View and filter documents by person, app and more',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Find'
  },
  {
    name: 'Rich metadata for each document*',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Find'
  },
  {
    name: 'Full-text search on any connected app',
    includedIn: ['Enterprise'],
    category: 'Find'
  },
  {
    name: 'Create smart folders in My Library',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Organize'
  },
  {
    name: 'Add bookmarks and upload or import documents',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Organize'
  },
  {
    name: 'Tag your saved items',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Organize'
  },
  {
    name: 'Broken Bookmarks & Documents Detection',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Organize'
  },
  {
    name: 'Enhanced Data Defense and Backup',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Organize'
  },
  {
    name: 'Create new documents right from HQ',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Work'
  },
  {
    name: 'Chrome extension',
    includedIn: ['Free', 'Pro', 'Enterprise'],
    category: 'Work'
  },
  {
    name: 'HQ for teams',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Work'
  },
  {
    name: 'Documents & App insights',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Work'
  },
  {
    name: 'Advanced Sharing & Collaborator Management',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Work'
  },
  {
    name: 'Custom Branding',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Customization'
  },
  {
    name: 'Enterprise-level customization',
    includedIn: ['Enterprise'],
    category: 'Customization'
  },
  {
    name: 'Single sign-in via google',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Administration'
  },
  {
    name: 'Admin controls / User management',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Administration'
  },
  {
    name: 'Priority Support',
    includedIn: ['Pro', 'Enterprise'],
    category: 'Support'
  },
  {
    name: 'Personalized onboarding',
    includedIn: ['Enterprise'],
    category: 'Support'
  },
  {
    name: 'Support level agreement',
    includedIn: ['Enterprise'],
    category: 'Support'
  }
]

const pricingPlans = [
  {
    title: 'Free',
    price: '€0',
    description: 'For individuals and small teams wanting to try HQ for an unlimited period of time.',
    action: 'Get started'
  },
  {
    title: 'Pro',
    monthlyPrice: '€10 - per user per month',
    yearlyPrice: '€8 - per user per month',
    description: 'For teams and businesses who want to search and organize all their documents in one place.',
    action: 'Early access'
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations that need more historical access to document activity.',
    action: 'Contact us'
  }
]

const styles = {
  pricingPlans: {
    margin: '48px 0 16px 0',
  },
  pricingGrid: {
    display: 'grid',
    backgroundColor: '#FFFFFF',
    gridTemplateColumns: '1fr',
    //gridAutoRows: 'minmax(50px, auto)',
    border: '1px solid gainsboro',
    borderRadius: '4px'
  },
  pricingGridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    "&.-single": {
      gridTemplateColumns: '1fr',
    },
    "&.-double": {
      gridTemplateColumns: '1fr 60px',
    },
    "& > div:first-of-type:not(.title)": {
      fontWeight: '500',
      color: '#212121',
      "& > div": {
        marginRight: 'calc(24px + 32px)',
        "@media (max-width: 767px)": {
          marginRight: '0'
        }
      }

    }
  },
  highlightItem: {
    backgroundColor: '#fcfdfe'
  },
  pricingGridRowItem: {
    padding: '16px',
    borderLeft: '1px solid gainsboro',
    borderBottom: '1px solid gainsboro',
    fontSize: '1rem',
    color: '#999999',
    fontWeight: '300',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'column',
    lineHeight: '1.5',
    "& > div:nth-of-type(2)": {
      color: '#999999',
      fontSize: '1rem',
      fontWeight: '300'
    },
    "&:first-of-type": {
      borderLeft: 'none'
    },
    "& > .title": {
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#409FBD'
    }
  },
  pricingPlan: {
    position: 'relative',
    lineHeight: '1.5',
    width: '100%'
  },
  planTitle: {
    fontSize: '1.2rem',
    color: '#212121',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between'
  },
  planToggle: {
    fontSize: '1rem',
    fontWeight: '300',
    color: HQTheme.palette.primary.main,
    cursor: 'pointer'
  },
  planPrice: {
    fontSize: '1rem',
    color: '#409FBD',
    fontWeight: '500'
  },
  planDescription: {
    margin: '16px 0',
    minHeight: '84px',
    fontSize: '1rem',
    color: '#999999',
    fontWeight: '300',
    "@media (max-width: 1100px)": {
      minHeight: '105px'
    },
    "@media (max-width: 1024px)": {
      minHeight: 'initial'
    }
  },
  planAction: {
    backgroundColor: HQTheme.palette.primary.main,
    borderRadius: '4px',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    padding: '8px',
    textAlign: 'center',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
    "&:hover": {
      backgroundColor: HQTheme.palette.secondary.main,
    }
  },
  infoIcon: {
    position: 'absolute',
    right: '16px',
    top: 'calc(50% - 12px)',
    fontSize: '1.5rem',
    justifyContent: 'center'
  },
  icon: {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pricingMoreLessFeatures: {
    alignItems: 'center',
    cursor: 'pointer',
    "& > div": {
      display: 'flex',
      alignItems: 'center',
      color: '#666666',
      "& > span": {
        marginRight: '8px'
      }
    }
  },
  toggleableContent: {
    overflow: 'hidden',
    maxHeight: '0',
    border: 'none',
    transition: 'all 300ms ease-in',
    "&.-open": {
      maxHeight: '100%',
    }
  },
  faqs: {
    margin: '48px 0',
    "& > div": {
      width: '75%',
      margin: 'auto',
      "@media (max-width: 1024px)": {
        width: '100%',
      }
    }
  },
  desktop: {
    '@media (max-width: 1024px)': {
      display: 'none'
    }
  },
  mobile: {
    display: 'none',
    '@media (max-width: 1024px)': {
      display: 'block'
    }
  },
  tabs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#999999',
    marginBottom: '24px',
    "& > div": {
      cursor: 'pointer',
      padding: '8px 16px'
    },
    "& > .-active": {
      backgroundColor: '#409FBD',
      color: '#FFFFFF',
      borderRadius: '8px'
    }
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#999999',
    fontWeight: '500'
  }
}

interface Plan {
  title: string,
  price: string,
  description: string,
  action: string
}

interface PricingPlansProps {
  classes?: any,
  location?: any
}

interface PricingPlansState {
  showMore: boolean,
  selectedPlan: Plan,
  monthlyPrice: boolean,
  formId: string
}

class PricingPlans extends React.Component<PricingPlansProps, PricingPlansState> {
  state = {
    showMore: false,
    monthlyPrice: false,
    selectedPlan: {
      title: 'Free',
      price: '€0',
      description: 'For individuals and small teams wanting to try HQ for an unlimited period of time.',
      action: 'Get started'
    },
    formId: ''
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
  toggleFeatures = () => {
    this.setState(prevState => {
      return {showMore: !prevState.showMore}
    })
  }
  renderFeatureToggle = () => {
    const { classes: c } = this.props;

    return (
      <div className={classNames(c.pricingGridRow, '-single')}>
        <div onClick={() => this.toggleFeatures()} className={classNames(c.pricingGridRowItem, c.pricingMoreLessFeatures)}>
          <div>
                  <span>
                    {this.state.showMore ? 'See less features' : 'See more features'}
                  </span>
            {this.state.showMore ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
          </div>
        </div>
      </div>
    )
  }
  setPlan = (plan) => {
    const newPlan = pricingPlans.filter(p => {
      return p.title === plan
    });

    this.setState({selectedPlan: newPlan[0]})
  }
  renderFeatures = ({category, plan, includeMissingFeatures = false}) => {
    const { classes: c } = this.props;

    const renderRowWithIcon = ({feature, included = false}) => {
      return (
        <div key={feature} className={classNames(c.pricingGridRow, '-double')}>
          <div className={c.pricingGridRowItem}>
            <div>{ feature }</div>
          </div>
          <div className={c.pricingGridRowItem}>
            <div className={c.icon}>
              {
                included ? <MdCheck color={'#7ED321'}/> : <MdRemove color={'#999999'}/>
              }
            </div>
          </div>
        </div>
      )
    }

    const renderRow = ({feature, info = ''}) => {
      return (
        <div key={feature} className={classNames(c.pricingGridRow, '-single')}>
          <div className={c.pricingGridRowItem}>
            <div>{ feature }</div>
            <div>
              {
                info ? info : <MdRemove color={'#999'}/>
              }
            </div>
          </div>
        </div>
      )
    }

    if (category === 'General') {
        return (
          features.filter(f => {
            return f.category === category
          }).map(filteredFeature => {
            let currentPlanFeature = filteredFeature.included.filter(f => {
              return f.plan === plan.title
            })
            let { info } = currentPlanFeature[0];

            return renderRow({ feature: filteredFeature.name, info})
          })
        )
    } else {
      if (includeMissingFeatures) {
        return (
          features.filter(f => {
            return f.category === category
          }).map(filteredFeature => {
            return renderRowWithIcon({feature: filteredFeature.name, included: filteredFeature.includedIn.indexOf(plan.title) !== -1})
          })
        )
      } else {
        return (
          features.filter(f => {
            return f.category === category && f.includedIn.indexOf(plan.title) !== -1
          }).map(filteredFeature => {
            return renderRowWithIcon({feature: filteredFeature.name, included: true})
          })
        )
      }
    }
  }
  renderPlanAction = (plan) => {
    const { classes: c } = this.props;

    if (plan.title === 'Free') {
      return (
        <a href={'https://hq.app/app'} className={c.planAction}>
          {plan.action}
        </a>
      )
    } else {
      return (
        <a onClick={() => this.renderContactForm(plan.title)} className={c.planAction}>
          {plan.action}
        </a>
      )
    }
  }
  renderPlanHead = (plan) => {
    const { classes: c } = this.props;

    return (
      <div className={classNames(c.pricingGridRow, '-single')}>
        <div className={c.pricingGridRowItem}>
          <div className={c.pricingPlan}>
            <div className={c.planTitle}>
              <span>{plan.title}</span>
              {
                plan.title === 'Pro'
                && <span className={c.planToggle} onClick={this.toggleMonthlyPrice}>{`View ${this.state.monthlyPrice ? 'annualy' : 'monthly'} plan`}</span>
              }
            </div>
            <div className={c.planPrice}>
              {
                plan.title === 'Pro'
                  ? this.state.monthlyPrice
                  ? plan.monthlyPrice
                  : plan.yearlyPrice
                  : plan.price
              }
            </div>
            <div className={c.planDescription}>
              { plan.description }
            </div>
            {
              this.renderPlanAction(plan)
            }
          </div>
        </div>
      </div>
    )
  }
  renderMobileView = () => {
    const { classes: c } = this.props;

    const renderTitle = (title) => {
      return (
        <div className={classNames(c.pricingGridRow, '-single')}>
          <div className={c.pricingGridRowItem}>
            <div className={'title'}>{ title }</div>
          </div>
        </div>
      )
    }

    return (
      <>
        <div className={c.tabs}>
          {
            pricingPlans.map(plan => {
              return (
                <div key={plan.title} className={plan.title === this.state.selectedPlan.title ? "-active" : undefined} onClick={() => this.setPlan(plan.title)}>{ plan.title }</div>
              )
            })
          }
        </div>
        <div className={c.pricingGrid}>
          { this.renderPlanHead(this.state.selectedPlan) }
          { renderTitle('General') }
          { this.renderFeatures({category: 'General', plan: this.state.selectedPlan}) }
          { this.renderFeatureToggle() }

          <div className={classNames(c.toggleableContent, this.state.showMore && '-open')}>
            {
              ['Find', 'Organize', 'Work', 'Customization', 'Administration', 'Support'].map(category => {
                return (
                  <React.Fragment key={category}>
                    { renderTitle(category)}
                    {
                      this.renderFeatures({category: category, plan: this.state.selectedPlan, includeMissingFeatures: true})
                    }
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
  toggleMonthlyPrice = () => {
    this.setState(prevState => {
      return { monthlyPrice: !prevState.monthlyPrice }
    })
  }
  renderDesktopView = () => {
    const { classes: c } = this.props;

    return (
      <div className={c.pricingGrid}>
        <div className={c.pricingGridRow}>
          <div className={c.pricingGridRowItem}></div>
          {
            pricingPlans.map(plan => {
              return (
                <div key={plan.title} className={c.pricingGridRowItem}>
                  <div className={c.pricingPlan}>
                    <div className={c.planTitle}>
                      <span>{plan.title}</span>
                      {
                        plan.title === 'Pro'
                        && <span className={c.planToggle} onClick={this.toggleMonthlyPrice}>{`View ${this.state.monthlyPrice ? 'annualy' : 'monthly'} plan`}</span>


                      }
                    </div>
                    <div className={c.planPrice}>
                      {
                        plan.title === 'Pro'
                          ? this.state.monthlyPrice
                            ? plan.monthlyPrice
                            : plan.yearlyPrice
                          : plan.price
                      }
                    </div>
                    <div className={c.planDescription}>
                      {plan.description}
                    </div>
                    {
                      plan.title === 'Free'
                        ? <a href={'https://hq.app/app'} className={c.planAction}>
                          {plan.action}
                        </a>
                        : <a onClick={() => this.renderContactForm(plan.title)} className={c.planAction}>
                          {plan.action}
                        </a>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className={classNames(c.pricingGridRow, '-single')}>
          <div className={c.pricingGridRowItem}>
            <div className={'title'}>General</div>
          </div>
        </div>
        <div className={c.pricingGridRow}>
          <Tooltip
            title={'The amount of apps, accounts and integrations you can add to HQ'}
            position="top"
            trigger="mouseenter"
            arrow={true}
            distance={4}
            className={classNames(c.pricingGridRowItem, c.highlightItem)}
          >
            <div>
              Apps, accounts and integrations <MdInfoOutline className={c.infoIcon}/> <MdInfoOutline className={c.infoIcon}/>
            </div>
          </Tooltip>
          <div className={c.pricingGridRowItem}>5 third-party apps</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
        </div>
        <div className={c.pricingGridRow}>
          <Tooltip
            title={'The amount of documents and bookmarks you can add to your HQ Library'}
            position="top"
            trigger="mouseenter"
            arrow={true}
            distance={4}
            className={classNames(c.pricingGridRowItem, c.highlightItem)}
          >
            <div>
              Library <MdInfoOutline className={c.infoIcon}/>
            </div>
          </Tooltip>
          <div className={c.pricingGridRowItem}>10.000 documents</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
        </div>
        <div className={c.pricingGridRow}>
          <Tooltip
            title={'The timeline of the creation-, modification- and sharing activities in your Activity Feed'}
            position="top"
            trigger="mouseenter"
            arrow={true}
            distance={4}
            className={classNames(c.pricingGridRowItem, c.highlightItem)}
          >
            <div>
              Searchable activity <MdInfoOutline className={c.infoIcon}/>
            </div>
          </Tooltip>
          <div className={c.pricingGridRowItem}>30 days of recent activity</div>
          <div className={c.pricingGridRowItem}>2 years of recent activity</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
        </div>
        <div className={c.pricingGridRow}>
          <Tooltip
            title={'The amount of team members you can add for collaboration purposes'}
            position="top"
            trigger="mouseenter"
            arrow={true}
            distance={4}
            className={classNames(c.pricingGridRowItem, c.highlightItem)}
          >
            <div>
              Additional team members <MdInfoOutline className={c.infoIcon}/>
            </div>
          </Tooltip>
          <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
          <div className={c.pricingGridRowItem}>5</div>
          <div className={c.pricingGridRowItem}>Unlimited</div>
        </div>

        { this.renderFeatureToggle() }

        <div className={classNames(c.toggleableContent, this.state.showMore && '-open')}>
          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Find</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={"Find all your documents and folders with just one search bar, no matter on which app or account they're located"}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                1 search bar for all your apps and accounts <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Easily find your added documents with our autocomplete filter function'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Typehead instant search in My Library <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Drill-down search results on person, app, type, date and more when looking for something specific'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                View and filter documents by person, app and more <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'See where it\'s located, when it was made and last modified, who the collaborators are and more\n' +
              '(Version History not included in the Free-plan)'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div> <MdInfoOutline className={c.infoIcon}/>
                Rich metadata for each document*
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={"Search and filter on the full text of a document, no matter on which app it's located"}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Full-text search on any connected app <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>

          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Organize</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Create folders where you can add documents from different apps and accounts combined'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Create smart folders in My Library <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Add existing bookmarks, documents & folders from your connected apps or by uploading from your computer'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Add bookmarks and upload or import documents <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Centrally tag documents and bookmarks to organize collections effortlessly'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Tag your saved items <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'When a document or bookmark becomes unavailable, HQ notifies you right away'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Broken Bookmarks & Documents Detection <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'To recover broken items, HQ detects threats and ensures to store extra backups to maximize protection'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Enhanced Data Defense and Backup <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>

          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Work</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Start working on new Google & Office documents right from HQ'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Create new documents right from HQ <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Install the Chrome extension to upgrade your bookmarks and put HQ at your fingertips'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Chrome extension <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Create a team library, share tags, centralize billing and connect Team Drives and Dropbox Teams'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                HQ from teams <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Keep track of what documents & apps are being shared, visited, opened & more in one simple dashboard'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Documents & Apps Insights <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Manage permissions from items on your connected apps and create privately shared My Library folders'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Advanced Sharing & Collaborator Management <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>

          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Customization</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Connect your domain to add custom branding to HQ e-mails, sharing links and sharing pages'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Custom branding <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Connect enterprise apps (like sharepoint) and on-premise storage. Plus customize parts of the HQ experience to your specifications'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Enterprise-level customization <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>

          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Administration</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'For other SSO options, contact us'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Single sign-in via google <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Connect custom SSO providers & active directory and manage your users'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Admin controls / User management <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>

          <div className={classNames(c.pricingGridRow, '-single')}>
            <div className={c.pricingGridRowItem}>
              <div className={'title'}>Support</div>
            </div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Get priority over free accounts when submitting help requests'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Priority Support <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'On-site productivity workshops/seminars to improve onboarding for your teams and discover company-specific requirements'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Personalized onboarding <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
          <div className={c.pricingGridRow}>
            <Tooltip
              title={'Get a custom SLA, possibly including next-business-day support on-site, a dedicated account manager or phone assistance'}
              position="top"
              trigger="mouseenter"
              arrow={true}
              distance={4}
              className={classNames(c.pricingGridRowItem, c.highlightItem)}
            >
              <div>
                Support level agreement <MdInfoOutline className={c.infoIcon}/>
              </div>
            </Tooltip>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdRemove color={'#999'}/></div>
            <div className={classNames(c.pricingGridRowItem, c.icon)}><MdCheck color={'#7ED321'}/></div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    const { classes: c, location } = this.props;

    return (
      <Layout location={location}>
        <Page title={'Choose the HQ plan that suits you the most'} subtitle={'Search and organize in one centralized workspace'}>
          <div className={classNames(c.pricingPlans, c.desktop)}>
            {this.renderDesktopView()}
          </div>
          <div className={classNames(c.pricingPlans, c.mobile)}>
            {this.renderMobileView()}
          </div>
          <div className={c.faqs}>
            <h2 className={c.subtitle}>Frequently Asked Questions</h2>
            <ExpansionPanelContainer items={faqs} />
          </div>
          {
            !! this.state.formId && <HubspotFormDialog portalId={"5161923"} formId={this.state.formId} handleClose={this.closeContactForm}/>
          }
        </Page>
      </Layout>
    )
  }
}

export default injectSheet(styles)(PricingPlans)
