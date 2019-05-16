import * as React from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

import Layout from "../components/layout";
import Page from "../components/Page/Page";
import HQTheme from "../theme/theme";
import { Image } from "cloudinary-react";

const styles = {
  contentBlock: {
    padding: "24px",
    margin: "48px 0 0 0",
    width: "50%",
    "&.-hidden": {
      display: "none"
    }
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.75rem",
    color: "#999999",
    fontWeight: "300",
    textAlign: "justify",
    "&:first-of-type": {
      marginTop: "0"
    },
    "&:last-of-type": {
      marginBottom: "0"
    }
  },
  contentGrid: {
    display: "flex",
    margin: "48px auto 48px auto",
    "@media (max-width: 1200px)": {
      margin: "24px auto 24px auto",
      flexDirection: "column",
      "&.-reverse": {
        flexDirection: "column-reverse"
      }
    }
  },
  contentGridHalf: {
    flex: "1",
    "&:first-of-type": {
      marginRight: "24px",
      "@media (max-width: 1200px)": {
        marginRight: "0"
      }
    },
    "&.-stretch": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  contentGridBlock: {
    backgroundColor: "#FFFFFF",
    padding: "24px",
    marginBottom: "16px",
    boxShadow: "0 0px 2px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24)",
    borderRadius: "4px",
    "& > :first-child": {
      marginTop: "0"
    },
    "& > :last-child": {
      marginBottom: "0"
    },
    "&.-alternativeBg": {
      backgroundColor: "#F2F2F2",
      boxShadow: "none",
      borderLeft: `4px solid ${HQTheme.palette.primary.main}`
    },
    "&.-noBg": {
      backgroundColor: "transparent",
      boxShadow: "none"
    },
    "&.-stretch": {
      height: "calc(100% - 64px)"
    }
  },
  contentGridBlockTitle: {
    fontSize: "1.2rem",
    color: HQTheme.palette.primary.main,
    fontWeight: "500"
  },
  contentGridBlockText: {
    fontSize: "1rem",
    color: "#999999",
    fontWeight: "300",
    lineHeight: "1.5",
    "& > a": {
      margin: "0",
      color: HQTheme.palette.text.primaryContrast,
      fontWeight: "300"
    },
    "& > ul": {
      margin: "0"
    }
  },
  contentGridBlockGraphic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > img": {
      width: "50%",
      height: "50%",
      boxShadow: "0 0px 2px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24)",
      borderRadius: "20%",
      "@media (max-width: 1200px)": {
        width: "64px",
        height: "64px",
        borderRadius: "16px"
      }
    }
  },
  callToSignUp: {
    textAlign: "center",
    color: "#666666",
    margin: "0 0 48px 0",
    "& > span:first-of-type": {
      fontWeight: "300",
      fontSize: "1.4rem",
      lineHeight: "1.5"
    },
    "& > span:last-of-type": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "32px 0",
      "& > a": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "56px",
        padding: "0 24px",
        color: "#FFFFFF",
        fontSize: "1rem",
        fontWeight: "500",
        backgroundColor: HQTheme.palette.primary.main,
        borderRadius: "12px",
        cursor: "pointer",
        textDecoration: "none",
        letterSpacing: "1px",
        textTransform: "uppercase",
        "&:hover": {
          backgroundColor: HQTheme.palette.secondary.main
        }
      }
    }
  },
  halfContentBlock: {
    width: "calc(50% - 12px)",
    float: "left",
    backgroundColor: "#FFFFFF",
    padding: "0 24px",
    "&.margin-right": {
      marginRight: "12px"
    },
    "&.margin-left": {
      marginLeft: "12px"
    },
    "@media (max-width: 1024px)": {
      "&.margin-right": {
        marginRight: "0"
      },
      "&.margin-left": {
        marginLeft: "0"
      },
      width: "100%"
    }
  },
  halfBlockTitle: {
    fontSize: "1.5rem",
    fontWeight: "400"
  },
  flexLayout: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  blockTitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "300"
  },
  teamMember: {
    display: "inline-block",
    textAlign: "center",
    width: "25%",
    marginBottom: "32px",
    "&:last-of-type": {
      marginBottom: "0"
    },
    "@media (max-width: 1300px)": {
      width: "calc(100% / 3)"
    },
    "@media (max-width: 767px)": {
      width: "calc(100% / 2)"
    },
    "@media (max-width: 500px)": {
      width: "100%"
    }
  },
  teamMemberGraphic: {
    "& > img": {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      "@media (max-width: 1024px)": {
        width: "200px",
        height: "200px"
      }
    }
  },
  teamMemberInfo: {
    "& > span:first-of-type": {
      fontWeight: "500",
      display: "block"
    },
    "& > span:last-of-type": {
      fontWeight: "300",
      display: "block"
    }
  }
};

interface AboutPageProps {
  classes?: any;
  location?: any;
}

class PressPage extends React.Component<AboutPageProps, {}> {
  render() {
    const { classes: c, location } = this.props;
    const teamMembers = [
      {
        name: "Kenny Vandenberghe1",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe2",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe3",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe4",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe5",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe6",
        jobDesc: "frontend-developer"
      },
      {
        name: "Kenny Vandenberghe7",
        jobDesc: "frontend-developer"
      }
    ];
    return (
      <Layout location={location}>
        <Page title={"About HQ"} subtitle={"Who we are & What we are like"}>
          <div className={classNames(c.contentGrid, "-reverse")}>
            <div className={c.contentGridHalf}>
              <div className={classNames(c.contentGridBlock, "-alternativeBg")}>
                <p className={c.contentGridBlockText}>
                  At <strong>HQ</strong>, we all come to work everyday because
                  we want to solve the biggest productivity problem of our time
                  These days there are so many apps promising to make you more
                  productive and to make it easier to work with your documents,
                  but the real problem is the amount of apps people are using to
                  do so. On average we are using 11 apps every day to find,
                  organize, edit, preview and share documents, bookmarks, videos
                  and pictures. We don’t always realize it, but this makes us
                  <strong> 20% less productive</strong>. Most people don’t
                  really have a choice because of their work (eg consultants or
                  freelancers) or because colleagues, clients, friends and
                  family members keep sharing files through different apps.
                  Migration to one app could be an option but it takes a lot of
                  effort and people will keep sharing you new items via other
                  apps, making this a never-ending ordeal.
                </p>
                <p className={c.contentGridBlockText}>
                  That’s why we build HQ. It lets you keep{" "}
                  <strong>all the apps</strong> and accounts you have now, but{" "}
                  <strong>centralizes them all</strong> in one clean and
                  easy-to-use design. This way you don’t have to migrate, your
                  peers can still share documents with whatever app they want to
                  use, all while you <strong>keep your focus</strong> in just
                  one place. Our mission at HQ is to truly make you more
                  productive.
                </p>
              </div>
            </div>
            <div className={classNames(c.contentGridHalf, "-stretch")}>
              <div className={classNames(c.contentGridBlock, "-noBg")}>
                <div className={c.contentGridBlockGraphic}>
                  <Image
                    cloudName="hq-app"
                    publicId="logo.png"
                    crop="scale"
                    dpr="2.0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(c.contentBlock, "-hidden")}>
            <h1 className={c.blockTitle}>Team</h1>
            <div className={c.flexLayout}>
              {teamMembers.map(member => {
                return (
                  <div key={member.name} className={c.teamMember}>
                    <div className={c.teamMemberGraphic}>
                      <img src="/assets/kenny.jpg" />
                    </div>
                    <div className={c.teamMemberInfo}>
                      <span>Kenny Vandenberghe</span>
                      <span>Frontend-developer</span>
                      <div>Linkedin</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={c.contentGrid}>
            <div className={c.contentGridHalf}>
              <div className={c.contentGridBlock}>
                <h3 className={c.contentGridBlockTitle}>Tagline</h3>
                <p className={c.contentGridBlockText}>
                  Find, organize & work centralized in HQ, the workstation
                  powered by your apps to eliminate switching between a
                  gazillion tabs.
                </p>
              </div>
              <div className={c.contentGridBlock}>
                <h3 className={c.contentGridBlockTitle}>Background</h3>
                <div className={c.contentGridBlockText}>
                  <ul>
                    <li>Founded in December 2016 in Antwerp, Belgium</li>
                    <li>Based in Leuven, Belgium</li>
                    <li>Raised €400K</li>
                    <li>7 team members, 3 founders, 2 wizards, 2 advisors.</li>
                  </ul>
                </div>
              </div>
              <div className={c.contentGridBlock}>
                <h3 className={c.contentGridBlockTitle}>Technology stack</h3>
                <p className={c.contentGridBlockText}>
                  Users interact with HQ via a react-based web application with
                  a desktop & mobile version coming soon. Our back-end runs on
                  .net Core to prepare for on-premise deployment at enterprise
                  customers and even keep the possibility of a serverless
                  version with a packaged deployment of our front- & back-end to
                  the device. A chrome plugin helps to bring an integrated
                  experience between HQ and the internet’s favorite browser.
                </p>
              </div>
            </div>
            <div className={c.contentGridHalf}>
              <div className={classNames(c.contentGridBlock, "-stretch")}>
                <h3 className={c.contentGridBlockTitle}>Description</h3>
                <p className={c.contentGridBlockText}>
                  Remember having just a few apps for work? Nowadays documents
                  are stored everywhere and work is fragmented. It's nearly
                  impossible to stay organized and keep track of what’s
                  happening. HQ is the workstation powered by your apps to
                  eliminate switching between tabs. Simply connect all your
                  existing accounts and enjoy one central place where you can
                  find everything, stay organized and work efficiently.
                </p>
                <p className={c.contentGridBlockText}>
                  Getting started on something new is easy from now on. Open HQ,
                  browse to the right folder and create documents right where
                  you want them. Check the HQ feed to continue where you left
                  off. It displays the most recent documents that were opened,
                  modified or shared with you. Looking for something else? Hit
                  search and get results from all your apps and accounts. Narrow
                  them down on app, account, age, type, collaborator and much
                  more until you find what you need. Don’t want to lose it
                  again? Drag & drop the result to your library and continue
                  working without delay. You can preview and share directly from
                  HQ or open documents with the applications you’re familiar
                  with.
                </p>
              </div>
            </div>
          </div>
          <div className={c.callToSignUp}>
            <span>
              HQ’s essentials are <strong>FREE</strong>. The{" "}
              <strong>PRO</strong> plan adds extra productivity and more
              customizations are offered in the <strong>ENTERPRISE</strong>{" "}
              version.
            </span>
            <span>
              <a href="http://hq.app/app">
                Sign-up at HQ
              </a>
            </span>
          </div>
        </Page>
      </Layout>
    );
  }
}

export default injectSheet(styles)(PressPage);
