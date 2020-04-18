import React from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PlayToggle
} from 'video-react';
import "./video-react.css";

export default class PlayerContainer extends React.Component {

  constructor(props){
    super(props);
    this._player = React.createRef();
  }

  pause() {
    this._player.current.pause();
  }

  
  play() {
    this._player.current.play();
  }

  subscribeToStateChange(bind) {
    this._player.current.subscribeToStateChange(bind)
  }
  
  load() {
    this._player.current.load();
  }

  render() {
    return (
      <Player poster={this.props.poster} 
              ref={this._player}>
        <source src={this.props.video} />

        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[1.5, 1.25, 1, 0.75]} order={7.1} />
          <VolumeMenuButton />
          <PlayToggle />
        </ControlBar>
      </Player>
    );
  }
};
