import * as React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Title from "../Page/Title";

const styles = {
  stroke: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: (props: any) => props.desktop ? `${props.desktop}px` : 'auto',
    backgroundColor: (props: any) => props.bgColor ? props.bgColor : '#FAFAFA',
    "&.-dark": {
      backgroundColor: "#F6F6F6"
    },
    "&.-stretch": {
      "@media (max-width: 1024px)": {
        height: 'auto',
        maxHeight: 'initial'
      }
    },
    "@media (max-width: 1024px)": {
      padding: '48px 0',
      height: (props: any) => props.tablet ? `${props.tablet}px` : 'auto'
    },
    "@media (max-width: 767px)": {
      height: (props: any) => props.phone ? `${props.phone}px` : 'auto'
    }
  },
  strokeContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 0',
  },
  subtitle: {
    fontWeight: '300',
    margin: '0',
    color: '#999999',
    fontSize: '2rem',
    textAlign: 'center'
  }
}

interface StrokeProps {
  classes?: any,
  dark?: boolean,
  bgColor?: string,
  maxHeight?: number,
  stretch?: boolean,
  title?: string,
  subtitle?: string
}

class Stroke extends React.Component<StrokeProps, {}> {
  render() {
    const { classes: c, dark, children, stretch, title, subtitle } = this.props;
    return (
      <div className={classNames(c.stroke, dark && '-dark', stretch && '-stretch')}>
        {
          title && <Title>{ title }</Title>
        }
        {
          subtitle && <h2 className={c.subtitle}>{ subtitle }</h2>
        }
        <div className={c.strokeContent}>
          { children }
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Stroke)
