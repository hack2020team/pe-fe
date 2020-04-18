import React from 'react';
import PlayerContainer from '../features/player/PlayerContainer';
import Script from '../features/script/Script';
import { Container, Button, Grid, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom'



export default class VideoView extends React.Component {

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

    handleStateChange = (state, prevState) => {
        this.setState({
            player: state,
            currentTime: state.currentTime,
            duration: state.duration,
            pause: state.paused
        });
        
        this.props.videoStateChange();
    }

    load(){
        this._player.current.load()
    }


    render() {
        return (
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Paper><PlayerContainer video={this.props.source + "v" + this.props.videoId + ".mp4"} ref={this._player} poster={this.props.source + "p" + this.props.videoId + ".jpg"} />
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper><Script scrollPercentage={this.state.currentTime / this.state.duration} videoId={this.props.videoId} source={this.props.source}/></Paper>
                    </Grid>
                </Grid>
                <NavLink to={"/"} className="remove-link">
                    <Button style={{ marginTop: "35px"}} variant="contained" color="secondary">
                        Back to lectures
                    </Button>
                </NavLink>
            </Container>
        );
    }
}

