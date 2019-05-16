import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import { ReactNode } from "react";
import Boundaries from "../Boundaries/Boundaries";
import FeatureVideo from "../Video/FeatureVideo";

const playerDimensions = ({width = 640, height = 360}) => {
  return {
    width: `${width}px !important`,
    height: `${height}px !important`,
    "& > div > iframe": {
      width: `${width}px !important`,
      height: `${height}px !important`,
    }
  }
}

// const playerDimensions = ({width, height}) => {
//   return {
//     width: '300px !important',
//     height: '400px !important',
//     "& > div > iframe": {
//       width: '300px !important',
//       height: '400px !important',
//     }
//   }
// }

const styles = {
  splitContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    "& > div": {
      //flex: '0 1 50%',
    },
    "& > div:first-of-type": {
      //flex: '0 1 50%',
      marginRight: '48px'
    },
    "& > div:last-of-type": {
      marginLeft: '48px'
    },
    "@media (max-width: 1200px)": {
      flexDirection: 'column',
      textAlign: 'center',
      "&.-reverse": {
        flexDirection: 'column-reverse',
      },
      "& > div": {
        flex: '1'
      },
      "& > div:first-of-type": {
        margin: '0'
      },
      "& > div:last-of-type": {
        margin: '0'
      },
    }
  },
  contentTextBlock: {
    "& > h3": {
      color: '#212121',
      fontFamily: 'Poppins, sans-serif',
      margin: '0',
      fontSize: '3.2rem',
      lineHeight: '1.2',
      fontWeight: '500',
      "& > span": {
        color: '#409FBD'
      }
    }
  },
  contentImageBlock: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    "& > img": {
      width: '100%',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      "@media (max-width: 1024px)": {
        width: '100%',
        margin: 'auto',
        marginTop: '48px'
      }
    }
  },
  responsiveIframe: {
    position: 'relative',
    // overflow: 'hidden',
    // paddingTop: '56.25%',
    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    // borderRadius: '8px',
    "& > div": {
      position: 'relative',
      overflow: 'hidden',
      margin: 'auto',
      //paddingTop: '56.25%',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      borderRadius: '8px',
      ...playerDimensions({}),
      "& > div > div > iframe": {
        position: 'absolute',
        top: '0',
        left: '0',
        border: '0'
      },
      "@media (max-width: 1500px)": {
        ...playerDimensions({width:640/1.2, height:360/1.2}),
      },
      "@media (max-width: 1350px)": {
        ...playerDimensions({width:640/1.6, height:360/1.6}),
      },
      "@media (max-width: 1200px)": {
        ...playerDimensions({width:640, height:360}),
      },
      "@media (max-width: 870px)": {
        ...playerDimensions({width:640/1.2, height:360/1.2}),
      },
      "@media (max-width: 600px)": {
        ...playerDimensions({width:640/1.5, height:360/1.5}),
      },
      "@media (max-width: 480px)": {
        ...playerDimensions({width:640/1.7, height:360/1.7}),
      },
      "@media (max-width: 400px)": {
        ...playerDimensions({width:640/2, height:360/2}),
      },
    }
  },

}

interface SplitContentProps {
  classes?: any,
  textTitle: string,
  textParagraphs: ReactNode,
  image?: string,
  video?: string,
  reverse?: boolean,
}

class SplitContent extends React.Component<SplitContentProps> {
  renderMedia = () => {
    const { classes: c, image, video } = this.props;

    return (
      <div className={c.contentImageBlock}>
        {
          image
            ? <img src={ image } alt={"feature"} />
            : video
            ? <div className={c.responsiveIframe}>
              <FeatureVideo video={video}/>
            </div>
            : 'No media'
        }
      </div>
    )
  };
  renderNormal = () => {
    const { classes: c, textTitle, textParagraphs } = this.props;
    const titleParts = this.cutFirst(textTitle, ' ');

    return (
      <>
        <div className={c.contentTextBlock}>
          <h3><span>{ titleParts[0] } </span>{ titleParts[1] }</h3>
          <div className={c.text}>
            { textParagraphs }
          </div>
        </div>
        { this.renderMedia() }
      </>
    )
  };
  renderReverse = () => {
    const { classes: c, textTitle, textParagraphs } = this.props;
    const titleParts = this.cutFirst(textTitle, ' ');

    return (
      <>
        { this.renderMedia() }
        <div className={c.contentTextBlock}>
          <h3><span>{ titleParts[0] } </span>{ titleParts[1] }</h3>
          <div className={c.text}>
            { textParagraphs }
          </div>
        </div>
      </>
    )
  };
  cutFirst = (str,token) => {
    const arr = str.split(token);
    const fst = arr.splice(0,1);
    return [fst.join(""),arr.join(token)];
  };
  render() {
    const { classes: c, reverse } = this.props;
    return (
      <Boundaries>
        <div className={classNames(c.splitContent, reverse && '-reverse')}>

          {
            reverse ? this.renderReverse() : this.renderNormal()
          }
        </div>
      </Boundaries>
    )
  }
}

export default injectSheet(styles)(SplitContent)
