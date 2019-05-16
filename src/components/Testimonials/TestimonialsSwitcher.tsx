import * as React from "react";
import injectSheet from "react-jss";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Image } from "cloudinary-react";
import DragScroll from "react-dragscroll";
import classNames from "classnames";

const styles = {
  testimonials: {},
  wrapper: {
    "@media (max-width: 767px)": {
      width: "calc(100vw - 48px)",
      margin: "auto"
    }
  },
  overview: {
    width: "100%",
    overflowY: "auto",
    marginBottom: "48px",
    "&::-webkit-scrollbar": {
      height: "4px",
      pointerEvents: "auto"
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#999"
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#666",
      cursor: "pointer"
    }
  },
  overviewWrapper: {
    padding: "16px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "& > div:last-of-type": {
      marginRight: "0"
    },
    "@media (max-width: 1500px)": {
      justifyContent: "initial"
    }
  },
  overviewBlockWrapper: {
    marginRight: "48px",
    maxWidth: "96px",
    "@media (max-width: 767px)": {
      maxWidth: "128px"
    },
    "& > div:first-of-type": {
      transition: "width 300ms ease-in",
      width: "0",
      height: "4px",
      margin: "auto",
      marginBottom: "8px",
      backgroundColor: "#409FBD"
    },
    "& > div:last-of-type": {
      width: "100%",
      height: "24px",
      marginTop: "16px",
      "& > img": {
        margin: "auto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        filter: "brightness(140%)"
      }
    },
    "&.-active": {
      "& > div:first-of-type": {
        width: "90%"
      },
      "& > div:last-of-type > img": {
        filter: "brightness(100%)"
      }
    }
  },
  overviewBlock: {
    height: "96px",
    width: "96px",
    borderRadius: "8px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      opacity: "0.7"
    },
    "@media (max-width: 767px)": {
      height: "128px",
      width: "128px"
    }
  },
  overviewBlockImage: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    borderRadius: "8px",
    "&.-mobile": {
      display: "none"
    },
    "@media (max-width: 767px)": {
      "&.-mobile": {
        display: "block"
      },
      "&.-desktop": {
        display: "none"
      }
    }
  },
  mainBlock: {
    backgroundColor: "#FFFFFF",
    width: "75%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    borderRadius: "16px",
    height: "400px",
    overflow: "hidden",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    "@media (max-width: 1300px)": {
      width: "auto",
      height: "360px",
      margin: "auto"
    },
    "@media (max-width: 767px)": {
      padding: "32px",
      height: "auto"
    }
  },
  mainBlockImage: {
    // position: 'absolute',
    // height: '100%',
    // top: '0',
    // bottom: '0',
    // left: '0',
    // right: '0',
    borderRadius: "16px 0 0 16px"
  },
  image: {
    flex: "0 0 250px",
    borderRadius: "16px 0 0 16px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    "@media (max-width: 767px)": {
      display: "none"
    }
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    zIndex: "1",
    opacity: "0.1",
    borderRadius: "16px 0 0 16px",
    backgroundColor: "#000000",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    "&.-small": {
      height: "96px",
      borderRadius: "8px",
      "@media (max-width: 767px)": {
        height: "128px"
      }
    }
  },
  content: {
    flex: "1 100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "32px",
    "@media (max-width: 767px)": {
      padding: "0"
    },
    "& > div:nth-child(2)": {
      marginBottom: "32px"
    },
    "& > div:nth-child(3)": {
      flex: "1 100%"
    },
    "& > div:last-child": {
      "@media (max-width: 767px)": {
        display: "none"
      },
      "& > div": {
        "& > img": {
          height: "56px"
        }
      }
    },
    "& > div": {
      "& > h2": {
        margin: "0",
        marginBottom: "8px",
        fontSize: "2.2rem",
        color: "#212121"
      },
      "& > h3": {
        margin: "0",
        fontSize: "1.3rem",
        color: "#409FBD"
      },
      "& > p": {
        margin: "0",
        width: "90%",
        lineHeight: "1.5",
        fontSize: "1.2rem",
        fontWeight: "300",
        color: "#999999",
        "@media (max-width: 1024px)": {
          width: "100%"
        }
      }
    }
  },
  buttons: {
    flex: "0 0 64px",
    display: "flex",
    flexDirection: "column",
    "& > div": {
      flex: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#409FBD",
      cursor: "pointer",
      "&:hover": {
        opacity: "0.7"
      },
      "& > svg": {
        fontSize: "1.8rem",
        color: "#FAFAFA"
      },
      "&.-right": {
        borderRadius: "0 0 16px 0",
        borderTop: "0.5px solid #FAFAFA"
      },
      "&.-left": {
        borderRadius: "0 16px 0 0",
        borderBottom: "0.5px solid #FAFAFA"
      }
    },
    "@media (max-width: 1024px)": {
      display: "none"
    }
  },
  progress: {
    height: "5px",
    backgroundColor: "#409FBD",
    width: "10px",
    padding: "0",
    margin: "-32px",
    position: "absolute",
    transition: "width 5000ms linear",
    "&:-active": {
      width: "740px"
    }
  }
  // progressBar: {
  //   height: "100%",
  //   backgroundColor: "#409FBD",
  //   transition: "width 5000ms ease-out",
  //   width: "0px"
  // }
};

interface TestimonialsSwitcher {
  name: string;
  title: string;
  description: string;
  company: string;
  image: string;
  thumb: string;
  logo: string;
  bigLogo?: string;
  smallerLogo?: boolean;
  hide?: boolean;
}

interface TestimonialsSwitcherProps {
  classes?: any;
  testimonials: TestimonialsSwitcher[];
  shortTimer: number;
  longTimer: number;
}

class TestimonialsSwitcher extends React.Component<
  TestimonialsSwitcherProps,
  {}
> {
  state = {
    currentTestimonialIndex: 0,
    maxTime: this.props.shortTimer,
    timePassed: 0
  };

  setTestimonial = (testimonial, currentTestimonialIndex, buttoned) => {
    this.setState({ testimonial });
    this.setState({ currentTestimonialIndex });
    this.setState({ timePassed: 0 });

    const shortTimer = this.props.shortTimer;
    const longTimer = this.props.longTimer;

    if (buttoned) {
      this.setState({ maxTime: longTimer });
    } else {
      this.setState({ maxTime: shortTimer });
    }

    if (this.state.timePassed >= longTimer) {
      this.setState({ maxTime: shortTimer });
    }
  };

  nextTestimonial = (testimonials, buttoned) => {
    const currentIndex = this.state.currentTestimonialIndex;

    const timePassed = this.state.timePassed;
    const maxTime = this.state.maxTime;

    let nextIndex;

    if (timePassed >= maxTime || buttoned) {
      if (currentIndex === testimonials.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = currentIndex + 1;
      }

      this.setTestimonial(testimonials[nextIndex], nextIndex, buttoned);
    }

    // log for debugging and checking timings
    // console.log(
    //   "buttoned",
    //   buttoned,
    //   " timer",
    //   this.state.timePassed,
    //   " maxTimer",
    //   this.state.maxTime
    // );
  };

  previousTestimonial = (testimonials, buttoned) => {
    const currentIndex = this.state.currentTestimonialIndex;

    let previousIndex;

    if (currentIndex === 0) {
      previousIndex = testimonials.length - 1;
    } else {
      previousIndex = currentIndex - 1;
    }

    this.setTestimonial(testimonials[previousIndex], previousIndex, buttoned);
  };

  componentDidMount() {
    setInterval(
      () => this.nextTestimonial(this.props.testimonials, false),
      1000
    );
    setInterval(
      () =>
        this.setState({
          timePassed: this.state.timePassed + 1000
        }),
      1000
    );
  }

  render() {
    const { classes: c } = this.props;
    const testimonials = this.props.testimonials;
    const i = this.state.currentTestimonialIndex;

    return (
      <div className={c.wrapper}>
        <DragScroll className={c.overview}>
          <div className={c.overviewWrapper}>
            {this.props.testimonials.map((t, index) => {
              return (
                <div
                  key={t.name}
                  className={classNames(
                    c.overviewBlockWrapper,
                    i === index && "-active"
                  )}
                >
                  <div />
                  <div
                    className={c.overviewBlock}
                    onClick={() => this.setTestimonial(t, index, true)}
                  >
                    <Image
                      className={classNames(c.overviewBlockImage, "-desktop")}
                      cloudName="hq-app"
                      publicId={t.thumb}
                      width="96"
                      height="96"
                      crop="scale"
                      dpr="2.0"
                    />
                    <Image
                      className={classNames(c.overviewBlockImage, "-mobile")}
                      cloudName="hq-app"
                      publicId={t.thumb}
                      width="128"
                      height="128"
                      crop="scale"
                      dpr="2.0"
                    />
                    <div className={classNames(c.imageWrapper, "-small")} />
                  </div>
                  <div>
                    <Image
                      cloudName="hq-app"
                      publicId={t.logo}
                      crop="scale"
                      dpr="2.0"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </DragScroll>
        <div className={c.mainBlock}>
          <div className={c.image}>
            <Image
              className={c.mainBlockImage}
              cloudName="hq-app"
              publicId={testimonials[i].image}
              width="250"
              height="400"
              crop="scale"
              dpr="2.0"
            />
            <div className={c.imageWrapper} />
          </div>
          <div className={c.content}>
            <div className={c.progress} />
            <div>
              <h2>{testimonials[i].name}</h2>
              <h3>
                {testimonials[i].title} - {testimonials[i].company}
              </h3>
            </div>
            <div>
              <p>"{testimonials[i].description}"</p>
            </div>
            <div>
              <div>
                <Image
                  style={testimonials[i].smallerLogo && { height: "30px" }}
                  cloudName="hq-app"
                  publicId={
                    testimonials[i].bigLogo
                      ? testimonials[i].bigLogo
                      : testimonials[i].logo
                  }
                />
              </div>
            </div>
          </div>

          <div className={c.buttons}>
            <div
              className={"-left"}
              onClick={() =>
                this.previousTestimonial(this.props.testimonials, true)
              }
            >
              <MdKeyboardArrowLeft />
            </div>
            <div
              className={"-right"}
              onClick={() =>
                this.nextTestimonial(this.props.testimonials, true)
              }
            >
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(TestimonialsSwitcher);
