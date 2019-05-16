import * as React from 'react'
import injectSheet from 'react-jss'
import Link from 'gatsby-link'
import classNames from 'classnames'

import { MdWork as Work } from 'react-icons/md'
import { MdClearAll as Organize } from 'react-icons/md'
import { MdSearch as Find } from 'react-icons/md'

import HQTheme from '../../theme/theme'

const icons = {
  'Work efficiently': Work,
  'Organize quickly': Organize,
  'Find everything': Find
}

const styles = {
  tab: {
    display: 'inline-block',
    lineHeight: '48px',
    flex: '1',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    marginRight: '8px',
    "&:last-child": {
      marginRight: '0'
    },
    "&:hover:not(.-active)": {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    "&.-active": {
      backgroundColor: 'rgba(255, 255, 255, 0.27)',
      color: HQTheme.palette.text.primary,
    },
    "@media (max-width: 767px)": {
      flex: '1',
      textAlign: 'center',
      height: '100%',
      marginRight: '0',
      //lineHeight: '56px',
      color: "#999",
      fontWeight: 300,
      borderRadius: '0',
      "&.-active": {
        borderRadius: '0',
        backgroundColor: "#F2F2F2",
        color: HQTheme.palette.text.primaryContrast,
      },
      "& :before": {
        content: 'test'
      }
    }
  },
  desktopLabel: {
    display: 'block',
    "@media (max-width: 767px)": {
      display: 'none'
    }
  },
  mobileLabel: {
    display: 'none',
    "@media (max-width: 767px)": {
      height: '100%',
      lineHeight: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      "& > svg": {
        fontSize: '1.2rem'
      },
      "& > div": {
        height: '20px'
      }
    }
  }
}

class Tab extends React.Component {
  firstWord(label) {
    return label.split(' ').splice(0, 1).join("")
  }
  render() {
    const { classes: c, active, onTabClick, link, label } = this.props;
    const Icon = icons[label];
    return (
        <div className={classNames(c.tab, active ? '-active' : undefined)} onClick={onTabClick}>
          <span className={c.desktopLabel}>{label}</span>
          <span className={c.mobileLabel}>
            <Icon />
            <div>{this.firstWord(label)}</div>
          </span>
        </div>
    )
  }
}

export default injectSheet(styles)(Tab);
