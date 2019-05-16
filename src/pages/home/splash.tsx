import * as React from "react";
import injectSheet from "react-jss";
import HQTheme from "../../theme/theme";
import Header from "../../components/Header/Header";
import classNames from "classnames";
import { MdPlayArrow } from "react-icons/md";
import { graphql, StaticQuery } from "gatsby";
import Boundaries from "../../components/Boundaries/Boundaries";
import FormDialog from "../../components/Dialog/Dialog";
import CircleAnimation from "../../components/Animation/Circles";
import TrustedCompanies from "../../components/SocialProof/TrustedCompanies";
import Img from "gatsby-image";
import { Image, Transformation } from "cloudinary-react";

const headerHeight = 80;
const trustedCompaniesHeight = 160;
const borderHeight = 1;

const styles = {
  splash: {
    height: `100vh`,
    //minHeight: '700px',
    position: "relative",
    overflow: "hidden",
    //display: 'flex',
    //flexDirection: 'co`lumn',
    //justifyContent: 'space-between',
    // background: '#1f0e84',
    // background: '-moz-linear-gradient(top, #1f0e84 0%, #2dcdda 100%)',
    // background: '-webkit-linear-gradient(top, #1f0e84 0%,#2dcdda 100%)',
    //backgroundImage: 'url(assets/swoosh.png)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //background: 'linear-gradient(to bottom, #1f0e84 0%,#2dcdda 100%)',
    //filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f0e84', endColorstr='#2dcdda',GradientType=0 )",
    "& > div:first-of-type": {
      //flex: '1 100%'
    },
    "& > div:nth-child(2)": {
      height: `calc(100% - ${headerHeight}px - ${trustedCompaniesHeight}px - ${borderHeight}px)`,
      "@media (max-width: 1300px)": {
        height: `calc(100% - ${headerHeight}px)`
      }
    }
  },
  bg: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    "& > div:first-of-type": {
      height: "100%",
      "& > picture > img": {
        zIndex: "-1"
      }
    }
  },
  splashContent: {
    height: `calc(100vh - ${headerHeight}px - ${trustedCompaniesHeight}px)`,
    marginTop: "80px",
    "@media (max-width: 1024px)": {
      height: `calc(100vh - ${headerHeight}px)`
    }
  },
  infoBlock: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "#ffffff",
    height: "100%",
    "& > div": {
      width: "100%"
    },
    "& > div:first-of-type": {
      marginRight: "12px",
      zIndex: "1",
      "& > h2": {
        margin: "0",
        fontSize: "3.6rem",
        fontWeight: "500",
        "@media (max-width: 1024px)": {
          fontSize: "5.6rem"
        },
        "@media (max-width: 767px)": {
          fontSize: "3.6rem"
        }
      },
      "@media (max-width: 1024px)": {
        textAlign: "center",
        width: "100%"
      }
    },
    "& > div:last-of-type": {
      marginLeft: "12px",
      "& > video": {
        width: "100%",
        "@media (max-width: 1300px)": {
          position: "absolute",
          top: "calc(50% - 420px)",
          left: "40%",
          opacity: "0.3",
          height: "900px"
        },
        "@media (max-width: 1024px)": {
          left: "calc(50% - 250px)",
          top: "auto",
          bottom: "calc(25% - 170px)",
          opacity: "0.3",
          width: "500px",
          height: "auto"
        },
        "@media (max-width: 767px)": {
          bottom: "0",
          opacity: "0.1",
          width: "auto"
        }
      }
    },
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      //display: 'block',
      position: "relative"
      //justifyContent: 'center'
    }
  },
  text: {
    margin: "48px 0",
    fontSize: "1.3rem",
    lineHeight: "1.5",
    fontWeight: "300",
    "@media (max-width: 400px)": {
      margin: "16px 0 16px 0"
    }
  },
  highlight: {
    color: "#13F4CA"
  },
  textHighlight: {
    color: "#13F4CA",
    fontWeight: "700"
  },
  buttonContainer: {
    height: "48px",
    lineHeight: "48px",
    "@media (max-width: 1024px)": {
      textAlign: "center",
      width: "100%"
    },
    "@media (max-width: 400px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  button: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
    letterSpacing: "1px",
    textTransform: "uppercase",
    border: "1px solid #FFFFFF",
    cursor: "pointer",
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "#ffffff",
    borderRadius: "12px",
    width: "auto",
    margin: "auto",
    padding: "16px 24px",
    height: "32px",
    display: "inline",
    "&:hover": {
      border: "1px solid transparent",
      backgroundColor: "rgba(22, 47, 195, 0.7)"
    },
    "&.-signup": {
      marginRight: "16px",
      backgroundColor: "#FFF",
      color: HQTheme.palette.primary.main
    },
    "&.-signup:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.7)"
    },
    "@media (max-width: 767px)": {
      fontSize: "1rem"
    },
    "@media (max-width: 400px)": {
      display: "flex",
      alignItems: "center",
      "&.-signup": {
        margin: "0"
      },
      "&:not(.-signup)": {
        textDecoration: "underline",
        border: "none"
      }
    }
  },
  playIcon: {
    fontSize: "1.4rem",
    verticalAlign: "text-top",
    color: "#13F4CA",
    marginRight: "4px",
    "@media (max-width: 400px)": {
      display: "none"
    }
  },
  video: {
    width: "746px",
    height: "420px",
    "@media (max-width: 676px)": {
      width: "320px",
      height: "180px"
    }
  }
};

interface SplashProps {
  classes?: any;
  location?: any;
  scrollDirection?: string;
}

interface SplashState {
  menuOpen?: boolean;
  playVideo?: boolean;
}

class Splash extends React.Component<SplashProps, SplashState> {
  state = {
    menuOpen: false,
    playVideo: false
  };
  getActiveSlug() {
    const { location } = this.props;

    if (!!location) {
      return location.pathname.substring(1).split("/")[0];
    }
  }
  onMenuClick = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };
  renderVideo = () => {
    const { classes: c } = this.props;
    return (
      <iframe
        className={c.video}
        src="https://player.vimeo.com/video/309315899?&muted=1&autoplay=1"
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
      />
    );
  };
  openVideo = () => {
    this.setState({ playVideo: true });
  };
  closeVideo = () => {
    this.setState({ playVideo: false });
  };
  render() {
    const { classes: c } = this.props;
    return (
      <div className={c.splash}>
        <div className={c.bg}>
          <Image cloudName="hq-app" publicId="swoosh.png">
            <Transformation quality="auto:low" flags="lossy" />
          </Image>
        </div>
        <Boundaries>
          <div className={c.splashContent}>
            <div className={c.infoBlock}>
              <div>
                <h2>
                  <span className={c.highlight}>F*ck</span> wasting time
                </h2>
                <div className={c.text}>
                  <p>
                    And stop worrying about productivity.
                    <br />
                    We got you.
                  </p>
                  <p>
                    Nobody likes working with a gazillion different open apps
                    and tabs. But why would you?
                    <span className={c.textHighlight}>
                      {" "}
                      HQ unites your Dropbox, Drive, Gmail, Slack and any other
                      app
                    </span>{" "}
                    you use. You don’t have to switch apps or migrate your data;{" "}
                    <span className={c.textHighlight}>
                      just connect your accounts
                    </span>{" "}
                    and let us do the work. Get more done, TODAY.
                  </p>
                </div>
                <div className={c.buttonContainer}>
                  <a
                    href="https://hq.app/app"
                    className={classNames(c.button, "-signup")}
                  >
                    Sign up free
                  </a>
                  <div onClick={this.openVideo} className={c.button}>
                    <MdPlayArrow className={c.playIcon} />
                    Watch video
                  </div>
                </div>
              </div>
              <div>
                <CircleAnimation />
              </div>
            </div>
          </div>
          <TrustedCompanies color={"white"} hideOnTablet />
        </Boundaries>
        {!!this.state.playVideo && (
          <FormDialog
            template={this.renderVideo()}
            handleClose={this.closeVideo}
            open={this.state.playVideo}
            cover
            shrink
            center
          />
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Splash);
