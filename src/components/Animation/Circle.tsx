import * as React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import {Image} from 'cloudinary-react';
import './style.css';

const styles = {
  orbitOptions: {
    animationDuration: (props: any) => props.duration ? `${props.duration}s !important` : '4s !important',
    animationDelay: (props: any) => props.offset ? `${props.offset}s !important` : '0s !important'
  }
}

interface CircleProps {
  classes?: any,
  image: string,
  line: 'inner' | 'center' | 'outer',
  reverse?: boolean
}

class Circle extends React.Component<CircleProps, {}> {
  renderOnLine = (line) => {
    let c = '';
    switch (line) {
      case 'inner':
        c = 'orbit-1';
        break;
      case 'center':
        c = 'orbit-2';
        break;
      case 'outer':
        c = 'orbit-3';
        break;
    }

    return c;
  }
  render() {
    const { classes: c, image, line, reverse } = this.props;
    return (
      <div className={classNames('icon-wrapper', 'orbit', c.orbitOptions, this.renderOnLine(line), reverse && 'reverse')}>
        <div className="app-icon">
          <Image cloudName="hq-app" width="40" publicId={image} crop="scale" dpr="2.0" />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Circle)