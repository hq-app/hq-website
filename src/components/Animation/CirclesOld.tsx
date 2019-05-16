import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const test = require('../../../static/assets/favicon-small.png') as string;

const styles = {
  "@keyframes orbit-1": {
    from: {
      transform: 'rotate(0deg) translateY(-80px) rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg) translateY(-80px) rotate(-360deg)'
    }
  },
  "@keyframes orbit-2": {
    from: {
      transform: 'rotate(0deg) translateY(-120px) rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg) translateY(-120px) rotate(-360deg)'
    }
  },
  "@keyframes orbit-3": {
    from: {
      transform: 'rotate(0deg) translateY(-160px) rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg) translateY(-160px) rotate(-360deg)'
    }
  },
  orbit: {
    animationDuration: (props: any) => props.duration ? props.duration : '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationDelay: (props: any) => props.offset ? props.offset : '0s',
    willChange: 'transform',
    contain: 'layout'
  },
  reverse: {
    animationDirection: 'reverse'
  },
  orbit1: {
    animationName: 'orbit-1'
  },
  orbit2: {
    animationName: 'orbit-2'
  },
  orbit3: {
    animationName: 'orbit-3'
  }
}

interface CircleAnimationProps {
  classes?: any
}

class CircleAnimation extends React.Component<CircleAnimationProps, {}> {
  render() {
    const { classes: c } = this.props;
    return (
      <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
        <filter id="image-1" x="0%" y="0%" width="100%" height="100%">
          <feImage xlinkHref={test} />
        </filter>

        <circle cx="50%" cy="50%" r="40" fill="#fff"/>
        <g>
          <circle cx="50%" cy="50%" r="80" stroke="#fff" strokeWidth="4" fill="transparent"/>
          <circle cx="50%" cy="50%" r="120" stroke="#fff" strokeWidth="4" fill="transparent"/>
          <circle cx="50%" cy="50%" r="160" stroke="#fff" strokeWidth="4" fill="transparent"/>
        </g>
        <g>
          <circle cx="50%" cy="50%" r="20" fill="#fff" filter="url(#image-1)" className={classNames(c.orbit, c.orbit1)} />
          <circle cx="50%" cy="50%" r="20" fill="#fff" filter="url(#image-1)" className={classNames(c.orbit, c.orbit1)} />

          <circle cx="50%" cy="50%" r="20" fill="#fff" filter="url(#image-1)" className={classNames(c.orbit, c.orbit2, c.reverse)} />

          <circle cx="50%" cy="50%" r="20" fill="#fff" filter="url(#image-1)" className={classNames(c.orbit, c.orbit3)} />

        </g>

      </svg>
    )
  }
}

export default injectSheet(styles)(CircleAnimation)