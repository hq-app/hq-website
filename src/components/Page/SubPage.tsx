import * as React from 'react'
import injectSheet from 'react-jss'
import HQTheme from '../../theme/theme'

const styles = {
  subPage: {
    position: 'absolute',
    "@media (max-width: 1300px)": {
      "& > *": {
        alignSelf: 'center'
      }
    },
    "@media (max-width: 1024px)": {
      flexDirection: 'column',
      top: '0',
    },
    "& > img": {
      width: 'calc(40% - 12px)',
      "@media (max-width: 1024px)": {
        width: '100%'
      }
    }
  },
  subPageInfo: {
    width: 'calc(60% - 12px)',
    float: 'left',
    marginRight: '24px',
    "@media (max-width: 1024px)": {
      width: '100%',
      margin: '0 0 24px 0'
    }
  },
  subPageTitle: {
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '1px',
    lineHeight: "4.2rem",
    fontSize: "3.6rem",
    fontWeight: "500",
    width: "100%",
    marginTop: "12px",
    marginBottom: "24px",
    "@media (max-width: 1024px)": {
      width: "100%",
      letterSpacing: '0',
      fontSize: '3rem',
      marginTop: '0',
      marginBottom: '0',
      lineHeight: '3.5rem'
    }
  },
  subPageTitleHighlight: {
    color: HQTheme.palette.secondary.main
  },
  subPageText: {
    marginTop: '6px',
    lineHeight: '1.9rem',
    fontSize: '1.1rem',
    fontWeight: '400',
    width: '80%',
    paddingBottom: '20px',
    "@media (max-width: 1024px)": {
      width: '100%',
      lineHeight: '1.7rem',
      paddingBottom: '6px'
    },
    "& > span.-highlight": {
      fontWeight: '600'
    }
  }
}

interface SubPageProps {
  classes?: any,
  title: string,
  textBlocks: [],
  image: string,
  titleBreakAfterNbWords: number
}

class SubPage extends React.Component<SubPageProps, {}> {
  getFirstWord(title) {
    return title.split(' ').splice(0, 1).join("")
  }
  createTitle(title, breakNumberOfWords) {
    const { classes: c } = this.props;
    const wordArray = title.split(' ');
    const firstWord = wordArray.splice(0, 1).join("");
    const wordsBeforeBreak = wordArray.splice(0, (breakNumberOfWords - 1)).join(' ')
    const wordsAfterBreak = wordArray.join(' ');

    return <><span className={c.subPageTitleHighlight}>{ firstWord }</span> { wordsBeforeBreak } <br /> { wordsAfterBreak }</>
  }
  render() {
    const { classes: c, title, textBlocks, image, titleBreakAfterNbWords } = this.props;
    const breakTitle = titleBreakAfterNbWords || 2;

    return (
      <div className={c.subPage}>
        <div className={c.subPageInfo}>
          <h1 className={c.subPageTitle}>
            { this.createTitle(title, breakTitle) }
          </h1>
          {
            textBlocks.map(textBlock => {
              return (
                <p key={textBlock} className={c.subPageText} dangerouslySetInnerHTML={{__html: textBlock}}></p>
              )
            })
          }
        </div>
        <img src={ image } alt={this.getFirstWord(title)} />
      </div>
    )
  }
}

export default injectSheet(styles)(SubPage)
