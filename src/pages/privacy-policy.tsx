import * as React from 'react'
import injectSheet from 'react-jss'

import Layout from '../components/layout'
import Page from "../components/Page/Page";
import HQTheme from "../theme/theme"

import classNames from "classnames";

const styles = {
  contentBlocks: {
    marginTop: '48px',
    marginBottom: '48px',
    "& > div:first-of-type": {
      marginBottom: '32px'
    }
  },
  contentBlock: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    marginBottom: '16px',
    boxShadow: '0 0px 2px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24)',
    borderRadius: '4px',
    "& > :first-child": {
      marginTop: '0'
    },
    "& > :last-child": {
      marginBottom: '0'
    },
    "&.-alternativeBg": {
      backgroundColor: '#F2F2F2',
      boxShadow: 'none',
      borderLeft: `4px solid ${HQTheme.palette.primary.main}`
    },
    "&.-noBg": {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    "&.-compact": {
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'justify'
    },
    "&.-stretch": {
      height: 'calc(100% - 64px)'
    }
  },
  contentBlockTitle: {
    fontSize: '1.2rem',
    color: HQTheme.palette.primary.main,
    fontWeight: '500'
  },
  contentBlockText: {
    fontSize: '1rem',
    color: '#999999',
    fontWeight: '300',
    lineHeight: '1.5',
    "& > div": {
      margin: '32px 0 32px 0',
      "& > p > a": {
        margin: '0',
        color: HQTheme.palette.text.primaryContrast,
        fontWeight: '300',
      }
    },
    "& > ul": {
      margin: '0'
    },
    "& :last-child": {
      margin: '0'
    }
  }
}

interface PrivacyPolicyProps {
  classes?: any,
  location?: any
}

class PrivacyPolicyPage extends React.Component<PrivacyPolicyProps, {}> {
    render() {
      const { classes: c, location } = this.props;
      return (
        <Layout location={location}>
          <Page title={'Privacy policy'} subtitle={'Understand (capital U)'}>
            <div className={c.contentBlocks}>
              <div className={classNames(c.contentBlock, '-alternativeBg')}>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      This privacy policy is written for the visitors of the website hq.app and the users of the web application HQ. We encourage you to read this statement in order to understand how your privacy and personal data are protected while using our website and web application. This policy informs you of what and how your data is collected and used in order to have an account and use HQ, and how it’s protected. The usage of our website and web application is considered as an acceptance of this policy. We may modify this policy at any time and such modification shall be posted on our site or directly notified to you.
                    </p>
                  </div>
                </div>
              </div>
              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  0. Summary
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p><strong>We don't:</strong></p>
                    <ul>
                      <li>store your files permanently<strong>*</strong>; </li>
                      <li>save your passwords; </li>
                      <li>delete your files or alter their content; </li>
                      <li>change your sharing settings without your consent.</li>
                    </ul>
                    <p><strong>*</strong> Temporary file storage might occur in order to improve the user experience.</p>
                  </div>

                  <div>
                    <p><strong>We may use your data for:</strong></p>
                    <ul>
                      <li>improving our website and web application;</li>
                      <li>improving our business operations;</li>
                      <li>improving our user experience;</li>
                      <li>improving our customer service;</li>
                      <li>notifying you about these improvements.</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Note that since HQ works with third-parties such as Dropbox, Google Drive, Slack and Gmail, their privacy policies will also be applicable when you use the application.</strong></p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  1. Definitions
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <ul>
                      <li>HQ is a web application, referred to as ‘HQ’, ‘the application’ or ‘the service’, owned by the Belgian company Sleek CVBA, referred to as ‘Sleek’, ‘the company’ or ‘we’;</li>
                      <li>anyone using the application will be referred to as ‘the user’ or ‘you’;</li>
                      <li>external services like Google Drive, Dropbox, Slack Gmail and others will be referred to as ‘external services’ or ‘third-parties’;</li>
                      <li>‘personal data’, also referred to as ‘data’, is any data that we are given access to and is not part of the public domain, including ‘Personal information’;</li>
                      <li>‘personal information’, also referred to as ‘information’, is any factual or subjective information that can readily identify a person;</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  2. Data covered in this privacy policy
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      This policy covers the collection, use and protection of your personal data that HQ gathers when you access the website and/or when you use the web application. It also covers the personal data that we gather from the external services. It does not apply to the practices of companies that Sleek CVBA does not own or control or to individuals who are no employees of the company.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  3. Collection of personal data
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      When you register for an account on HQ, we request you to fill in personal information, such as your name and e-mail address and to allow us access to existing accounts you may have on external services including, but not limited to, Google, Slack, or Dropbox. It is your responsibility to fill in current, complete and accurate information and to keep this information up to date. Since we work with external services and rely on their data, this accuracy responsibility is extended to the information on those profiles. We are not responsible for problems related to incomplete or inaccurate information.
                    </p>
                    <p>
                      Secondly we may also collect data such as: data of your visit to our website or use of our application, web pages viewed, links clicked and other similar actions connected to our website and web application. Some user-initiated actions like file upload or file conversion will store files on our services temporarily. We never keep file data longer than needed to serve our users.
                      <br />
                      Furthermore, we may process data from your computer, such as your IP address, browser specifications, access times and operating system. All of the above is solely used to optimize our application.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  4. Use of personal data
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      HQ only uses your personal data in a way that is suitable with and relevant for the purposes for which it was collected; the operation and improvement of our service and its personalized user experience. This usage depends on what data we collect and how you use our website and web application.
                    </p>
                    <p>
                      <strong>These uses and purposes include:</strong>
                    </p>
                    <ul>
                      <li>creating or administering your account and sending you related information like sign-up confirmations;</li>
                      <li>enabling you to easily access and use the service by minimizing the amount of times you have to enter the same information;</li>
                      <li>performing transactions and sending you related information like purchase confirmations and invoices;</li>
                      <li>providing customer and technical service and support;</li>
                      <li>answering your messages and responding to your comments, questions and requests;</li>
                      <li>asking you to participate in surveys to improve our personalized experience;</li>
                      <li>adding features and displaying content that suits your preferences and interests;</li>
                      <li>sending you information about updates, security alerts and other technical support;</li>
                      <li>providing you with commercial information such as newsletters about new products and services or such as offers, promotions and contests;</li>
                      <li>contacting you to inform you of product updates and (new) features that you may be interested in;</li>
                      <li>running analyses aimed at improving the service;</li>
                      <li>compiling user statistics and analyzing ongoing trends, usages and activities for marketing or advertising purposes;</li>
                      <li>and respecting our legal and regulatory obligations.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  5. Disclosing of personal data to third parties
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      Your personal data will not be used for any other purposes than the ones described in the paragraph above.
                    </p>
                    <p>
                      We may employ third-party companies or individuals to facilitate our service, to provide the service on our behalf, to perform service-related services or to analyze how our service is being used. These services include hosting sites, processing credit card payments, delivering customer support and the delivery of mailings. Therefore these third-party companies have access to your personal data, but this access is strictly restricted to the data necessary for them to deliver the respective services. They are furthermore prohibited of disclosing or using your data for other purpose then the ones we employed them to and are restricted by this privacy policy and other applicable confidentiality and security measures and regulations.
                    </p>
                    <p>
                      We do not sell, rent or share your personal data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  6. Protection of personal data
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p className={c.text}>
                      HQ will take appropriate measures to protect your personal data against loss, misuse, disclosure and unauthorized access. We have put in place appropriate physical, technical, and administrative procedures to safeguard and secure your data. Furthermore we use privacy-enhancing technologies such as encryption.
                    </p>
                    <p className={c.text}>
                      However, no security system is 100% impenetrable and no internet data transmission can be guaranteed 100% secure. By using our web application you accept that we cannot ensure the security of our database nor can we ensure the security of data you transmit over the internet.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  7. Automatically collected data
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      We may collect and store certain types of data every time you use our website or web application. We may also automatically receive and store data from your browser including, but not limited to, your IP address, cookie information and the pages you request. To collect this data we use cookies.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  8. Change of the privacy policy
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      We reserve the right to change this policy when required. This may occur when there are changes in laws, regulations or requirements imposed by data protection regulations. If changes are made, we will post the updated policy on our website. If we make changes we deem substantially impactful to the privacy of your personal data, we will immediately notify you and if necessary, obtain your approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className={c.contentBlock}>
                <h3 className={c.contentBlockTitle}>
                  9. Contact us
                </h3>
                <div className={c.contentBlockText}>
                  <div>
                    <p>
                      For any questions or comments you may have regarding this policy, feel free to contact us at <a href="mailto:privacy@hq.app">privacy@hq.app</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Page>
        </Layout>
      )
    }
}

export default injectSheet(styles)(PrivacyPolicyPage)
