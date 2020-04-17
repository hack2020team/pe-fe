import React from 'react';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';
import "./video-react.css";

export class PlayerContainer extends React.Component {

  render() {
    return (
      <Player poster="/assets/poster.png">
        <source src={this.props.video} />

        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[1.5, 1.25, 1, 0.75]} order={7.1} />
          <VolumeMenuButton />
        </ControlBar>
      </Player>
    );
  }
};
