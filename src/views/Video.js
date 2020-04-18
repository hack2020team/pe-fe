

import React from 'react';
import { PlayerContainer } from '../features/player/PlayerContainer';
import { Container, Button } from '@material-ui/core';






export default class Video extends React.Component {
  
    constructor(props) {
        super(props);
        this._player = React.createRef();
    }

    state = {
        pause: false
    }

    togglePause() {
        if(this.state.pause) {
            this._player.current.play();
            this.setState({pause: false});
        } else {
            this._player.current.pause();
            this.setState({pause: true});
        }
    }
  
  render(){
    return (
        <Container>
            <PlayerContainer video="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" ref={this._player} poster="http://via.placeholder.com/3840x1440"/>
            <Button onClick={() => this.togglePause()}>{(this.state.pause) ? "play" : "pause"}</Button>
        </Container>
    );
  }
}

