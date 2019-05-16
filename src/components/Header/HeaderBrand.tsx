import * as React from 'react'
import injectSheet from 'react-jss'
import HeaderLogo from './HeaderLogo'
import HQTheme from '../../theme/theme'

const styles = {
  brand: {
    zIndex: '1',
    flex: '0 0 220px',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    "& > div": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: '16px',
      "& > span": {
        lineHeight: '1.3rem',
        display: 'block',
        fontSize: '1rem'
      },
      "& > span:first-of-type": {
        color: HQTheme.palette.text.primary,
        fontSize: '1.1rem'
      },
      "& > span:last-of-type": {
        color: HQTheme.palette.text.secondary
      }
    }
  }
}

interface HeaderBrandProps {
  classes?: any
}

class HeaderBrand extends React.Component<HeaderBrandProps, {}> {
  render() {
    const { classes: c } = this.props;

    return (
      <div className={c.brand}>
        <HeaderLogo />
        <div>
          <span>HQ</span>
          <span>Work Centralized</span>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderBrand);
