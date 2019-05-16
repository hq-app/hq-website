import * as React from 'react'
import injectSheet from 'react-jss'
import PageNavigation from '../PageNavigation/PageNavigation'
import {PageNavigationProps as HeaderNavigationProps} from '../PageNavigation/PageNavigation'
import HeaderButtons from "./HeaderButtons";


const styles = {
  navigation: {
    flex: '1 100%',
    justifyContent: 'space-between',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center'
  }
}

class HeaderNavigation extends React.Component<HeaderNavigationProps, {}> {
  render() {
    const { classes: c, hashLinks} = this.props;
    return (
      <div className={c.navigation}>
        <PageNavigation hashLinks={hashLinks} />
        <HeaderButtons />
      </div>
    )
  }
}

export default injectSheet(styles)(HeaderNavigation);
