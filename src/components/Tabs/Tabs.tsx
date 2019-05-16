import * as React from 'react'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import _ from 'underscore'
import Tab from './Tab'

import HQTheme from '../../theme/theme'

const styles = {
  tabs: {
    display: 'flex',
    maxWidth: '500px',
    textAlign: 'center',
    margin: 'auto',
    height: '48px',
    "@media (max-width: 767px)": {
      // webkitBoxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
      // mozBoxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
      // boxShadow: '0px -2px 8px 0px rgba(0,0,0,0.3)',
      height: '56px',
      display: 'flex',
      flexDirection: 'row',
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: '#F2F2F2',
      borderTop: '1px solid gainsboro',
      maxWidth: 'initial'
    }
    // "& > div:first-of-type": {
    //   borderRadius: '24px 0 0 24px'
    // },
    // "& div:last-of-type": {
    //   borderRadius: '0 24px 24px 0'
    // },
  }
}

class Tabs extends React.Component {
  // componentDidMount() {
  //   const throttled = _.debounce((e) => this.handleScroll(e), 100);
  //   const targetElement = document.getElementById('page');
  //
  //   targetElement.addEventListener('mousewheel', throttled);
  // }
  //
  // componentWillUnmount() {
  //   const targetElement = document.getElementById('page');
  //   targetElement.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll(event) {
  //   if (event.deltaY < 0) {
  //     this.handleScrollDown();
  //   } else {
  //
  //     this.handleScrollUp();
  //   }
  // }
  //
  // handleScrollUp = () => {
  //   const { items, activeItem, onTabClick } = this.props;
  //   const newItem = activeItem + 1 === items.length ? 0 : activeItem + 1
  //   onTabClick(newItem)
  // }
  //
  // handleScrollDown = () => {
  //   const { items, activeItem, onTabClick } = this.props;
  //   const newItem = activeItem === 0 ? items.length : activeItem - 1
  //   onTabClick(newItem)
  // }

  render() {
    const { classes: c, children, items, activeItem, onTabClick } = this.props;
    return (
        <div className={c.tabs}>
          {
            items.map((item, index) => {
              return (
                <Tab
                  onTabClick={() => onTabClick(index)}
                  key={item.name}
                  active={activeItem === index}
                  label={item.name}
                />
              )
            })
          }
        </div>
    )
  }
}

export default injectSheet(styles)(Tabs);
