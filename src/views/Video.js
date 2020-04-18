

import React from 'react';
import PlayerContainer from '../features/player/PlayerContainer';
import Script from '../features/script/Script';
import { Container, Button, Grid, Paper } from '@material-ui/core';






export default class Video extends React.Component {

    constructor(props) {
        super(props);
        this._player = React.createRef();
    }

    state = {
        player: null,
        currentTime: 0,
        duration: 1,
        pause: true
    }

    togglePause() {
        if (this.state.pause) {
            this._player.current.play();
            this.setState({ pause: false });
        } else {
            this._player.current.pause();
            this.setState({ pause: true });
        }
    }

    componentDidMount() {
        this._player.current.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {

        this.setState({
            player: state,
            currentTime: state.currentTime,
            duration: state.duration,
            pause: state.paused
        });
    }


    render() {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={8}>
                        <Paper><PlayerContainer video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ref={this._player} poster="http://via.placeholder.com/3840x1440" />
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper><Script scrollPercentage={this.state.currentTime / this.state.duration}/></Paper>
                    </Grid>
                </Grid>

            </Container>
        );
    }
}

