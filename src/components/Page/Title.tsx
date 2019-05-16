import * as React from 'react'
import injectSheet from 'react-jss'

const styles = {
  pageTitle: {
    fontFamily: 'Poppins, sans-serif',
    //backgroundColor: '#FAFAFA',
    textAlign: 'center',
    margin: '0',
    padding: '64px 0 40px 0',
    "& > h2": {
      margin: '0',
      marginTop: (props: any) => props.extraTopMargin ? '120px' : '0',
      marginBottom: (props: any) => props.extraBottomMargin ? '120px' : '0',
      display: 'inline-block',
      fontSize: '3.6rem',
      fontWeight: '200',
      "@media (max-width: 767px)": {
        marginTop: (props: any) => props.extraTopMargin ? '60px' : '0',
        marginBottom: (props: any) => props.extraBottomMargin ? '60px' : '0',
        lineHeight: '4.5rem'
      }
    }
  },
  titleLine: {
    height: '4px',
    width: '100%',
    backgroundColor: '#409FBD',
    borderRadius: '4px',
    position: 'relative',
    "& > div.-left": {
      height: '4px',
      width: '16px',
      position: 'absolute',
      left: 'calc(75% - 2px)',
      top: '0',
      backgroundColor: '#FFFFFF'
    },
    "& > div.-right": {
      height: '4px',
      width: '16px',
      position: 'absolute',
      right: 'calc(75% - 2px)',
      top: '0',
      backgroundColor: '#FFFFFF'
    }
  }
}

interface TitleProps {
  classes?: any
}

class Title extends React.Component<TitleProps, {}> {
  render() {
    const { classes: c, children } = this.props;
    return (
      <div className={c.pageTitle}>
        <h2>
          <div className={c.titleLine}>
            <div className={'-left'}></div>
          </div>
          { children }
          <div className={c.titleLine}>
            <div className={'-right'}></div>
          </div>
        </h2>
      </div>
    )
  }
}

export default injectSheet(styles)(Title)
