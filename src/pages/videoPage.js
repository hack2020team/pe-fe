

import React, { useState, useEffect } from 'react';
import PlayerContainer from '../features/player/PlayerContainer';
import Script from '../features/script/Script';
import { Container, Button, Grid, Paper } from '@material-ui/core';
import VideoView from '../views/videoView';

export default class  VideoPage extends React.Component {

    state = {
        completed: false,
        videoId: 1
    }

    constructor(props){
        super(props);
        this._player = React.createRef();
    }

    componentDidUpdate(){
        this._player.current.load();
    }

    handleVideoStateChange = (state) => {
        console.log("Video State Changed!");
        console.log(state);
    }

    render(){
        return (
            <div>
                <Button onClick={() => this.setState({completed:false, videoId: this.state.videoId + 1})}>Next</Button>
                <VideoView videoId={this.state.videoId} source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/"  ref={this._player} videoStateChange={() => this.handleVideoStateChange()}/>
                
            </div>
        );
    }
}

