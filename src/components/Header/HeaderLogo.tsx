import * as React from 'react'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import { Image } from "cloudinary-react"

const styles = {
  logoContainer: {
    color: '#000000',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '48px',
    flex: '0 0 48px',
    height: '48px',
    "& > a": {
      display: 'block',
      height: '100%',

    }
  },
  logo: {
    display: 'block',
    borderRadius: '12px'
  }
}

interface HeaderLogoProps {
  classes?: any
}

class HeaderLogo extends React.Component<HeaderLogoProps, {}> {
  render() {
    const { classes: c } = this.props;
    return (
        <div className={c.logoContainer}>
          <Link to="/">
            <Image cloudName="hq-app" publicId="logo.png" className={c.logo} width="48" height="48" crop="scale" dpr="2.0" />
          </Link>
        </div>
    )
  }
}

export default injectSheet(styles)(HeaderLogo);
