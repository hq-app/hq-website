import * as React from 'react';
import injectSheet from 'react-jss';

import './style.css';
import Circle from "./Circle";
import { Image } from 'cloudinary-react'

const styles = {

}

interface CircleAnimationProps {
  classes?: any
}

const circles = [
  {
    image: 'drive.png',
    line: 'inner',
    duration: 26,
    offset: 0,
    reverse: false
  },
  {
    image: 'outlook.png',
    line: 'inner',
    duration: 26,
    offset: -6,
    reverse: false
  },
  {
    image: 'dropbox.png',
    line: 'center',
    duration: 26,
    offset: -26,
    reverse: true
  },
  {
    image: 'applemail.png',
    line: 'center',
    duration: 26,
    offset: -31,
    reverse: true
  },
  {
    image: 'onedrive.png',
    line: 'outer',
    duration: 26,
    offset: -13,
    reverse: true
  },
  {
    image: 'gmail.png',
    line: 'outer',
    duration: 26,
    offset: -9,
    reverse: true
  },

  {
    image: 'slack2.png',
    line: 'outer',
    duration: 26,
    offset: -17,
    reverse: true
  },
  {
    image: 'finder.png',
    line: 'outer',
    duration: 26,
    offset: -21,
    reverse: true
  },
]

class CircleAnimation extends React.Component<CircleAnimationProps, {}> {
  componentDidMount() {
    if(window.matchMedia("(max-width: 767px)").matches){
      const animationContainer = document.querySelector('.animation-container');
      animationContainer.style.width = document.documentElement.clientWidth - 48 + 'px';
      animationContainer.style.height = document.documentElement.clientWidth - 48 + 'px';
    }
  }
  render() {
    const { classes: c } = this.props;
    return (
      <div className="animation-container">
        <div className="center-wrapper">
          <Image cloudName="hq-app" publicId="logo.png" crop="scale" dpr="2.0" />
        </div>
        <div className="orbit-circle circle-1"></div>
        <div className="orbit-circle circle-2"></div>
        <div className="orbit-circle circle-3"></div>
        {
          circles.map(circle => {
            return (
              <Circle key={circle.image} image={circle.image} line={circle.line} duration={circle.duration} offset={circle.offset} reverse={circle.reverse}/>
            )
          })
        }
      </div>
    )
  }
}

export default injectSheet(styles)(CircleAnimation)