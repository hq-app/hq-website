import * as React from "react";
import ReactPlayer from "react-player";
import injectSheet from 'react-jss';
import { MdVolumeMute, MdVolumeUp, MdReplay } from "react-icons/md";

const videoControlButton = {
  display: 'flex',
  padding: '8px',
  backgroundColor: '#212121',
  borderRadius: '50%',
  position: 'absolute',
  color: '#FFF',
  fontSize: '1.2rem',
  top: '12px',
  cursor: 'pointer',
  "&:hover": {
    backgroundColor: '#666666',
  }
}

const styles = {
  playerWrapper: {
    overflow: 'hidden',
    "& > div:first-of-type": {
      height: 'auto !important'
    },
    "&:hover": {
      "& > $customControls": {
        opacity: '1',
      }
    }
  },
  customControls: {
    opacity: '0',
    transition: 'all 300ms ease-in',
  },
  muteButton: {
    ...videoControlButton,
    left: '12px'
  },
  restartButton: {
    ...videoControlButton,
    left: '56px'
  }
}

interface FeatureVideoProps {
  classes?: any,
  video: string,
}

class FeatureVideo extends React.Component<FeatureVideoProps, {muted?: boolean}> {
  constructor(props) {
    super(props)
    this.player = React.createRef()
  }
  state = {
    muted: true
  }
  toggleMute = () => {
    this.setState(prevState => {
      return {muted: !prevState.muted}
    })
  }
  restartVideo = () => {
    this.player.current.seekTo(0)
  }
  render() {
    const { classes: c, video } = this.props;
    return (
      <div className={c.playerWrapper}>
        <ReactPlayer
          className={c.test}
          ref={this.player}
          url={`${video}`}
          playing
          loop
          volume={0.3}
          muted={this.state.muted}
          controls={false}
        />
        <div className={c.customControls}>
          <span onClick={this.toggleMute} className={c.muteButton}>
            { this.state.muted ?  <MdVolumeMute /> : <MdVolumeUp />}
          </span>
          <span onClick={this.restartVideo} className={c.restartButton}>
            <MdReplay />
          </span>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(FeatureVideo)