import * as React from 'react'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import HQTheme from '../../theme/theme'
import classNames from 'classnames'
import Color from 'color'

const defaultButtonColor = Color(HQTheme.palette.primary.main)
const defaultButtonTextColor = Color(HQTheme.palette.text.primary)

const styles = {
  button: {
    padding: '0 16px 0 16px',
    height: '100%',
    margin: '0 8px 0 8px',
    borderRadius: '28px',
    minWidth: '72px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: props => props.buttonColor ? props.buttonColor : defaultButtonColor.hex(),
    color: props => props.textColor ? props.textColor : defaultButtonTextColor.hex(),
    "&:focus": {
      outline: 'none'
    },
    "&:hover": {
      backgroundColor: props => props.hover && props.hover.buttonColor ? props.hover.buttonColor : props.inverted ? HQTheme.palette.primary.main : defaultButtonColor.darken(0.2).hex(),
      color: props => props.hover && props.hover.textColor ? props.hover.textColor : props.inverted ? HQTheme.palette.text.primary : defaultButtonTextColor.hex()
    },
    "&.-inverted": {
      border: `1px solid ${HQTheme.palette.primary.main}`,
      backgroundColor: HQTheme.palette.common.white,
      color: HQTheme.palette.primary.main
    }
  }
}

interface ButtonProps {
  classes?: any,
  internalLink?: string,
  externalLink?: string,
  label: string,
  buttonColor?: string,
  textColor?: string,
  inverted?: boolean,
  onClick?: () => void
}

class Button extends React.Component<ButtonProps,{}> {
  render() {
    const { internalLink, externalLink, label, buttonColor, textColor, inverted, onClick} = this.props;
    return (
          !! externalLink
          ? <a href={externalLink} className={classNames(this.props.classes.button, inverted ? '-inverted' : undefined)}>{label}</a>
          : !! internalLink
            ? <a className={classNames(this.props.classes.button, inverted ? '-inverted' : undefined)}><Link to={internalLink}>{label}</Link></a>
            : <a onClick={onClick} className={classNames(this.props.classes.button, inverted ? '-inverted' : undefined)}>{label}</a>
    )
  }
}

export default injectSheet(styles)(Button);
