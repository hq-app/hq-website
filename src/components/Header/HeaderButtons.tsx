import * as React from 'react'
import injectSheet from 'react-jss'
import Button from '../Button/Button'

import HQTheme from '../../theme/theme'

const styles = {
  headerButtons: {
  	zIndex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '48px',
		alignItems: 'center',
		"& > a": {
  		textDecoration: 'none',
			fontWeight: '500',
			marginRight: '16px',
		},
		"& > a:first-of-type": {
			color: '#FFFFFF',
			"&:hover": {
				color: '#13F4CA'
			}

		}
  }
}

interface HeaderButtonProps {
	classes?: any
}

class HeaderButtons extends React.Component<HeaderButtonProps,{}> {
  render() {
  	const { classes: c } = this.props;
    return (
      <div className={c.headerButtons}>
				<a href="https://hq.app/app" >Log in</a>
        <Button
          buttonColor={HQTheme.palette.common.white}
          textColor={HQTheme.palette.text.primaryContrast}
          hover={{textColor: HQTheme.palette.text.primary, buttonColor: HQTheme.palette.primary.main}}
          externalLink="https://hq.app/app"
          label="Sign up"/>
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderButtons);
