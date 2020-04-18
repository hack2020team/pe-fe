import React from 'react';
import { Button, Paper, Modal, Grid } from '@material-ui/core';
import VideoView from '../views/videoView';
import Quiz from '../features/quiz/Quiz';
import styles from './video.page.css';
import WebcamWrapper from '../features/webcam/WebcamWrapper';
import AttentionAlert from '../features/attentionAlert/Alert'




export default class VideoPage extends React.Component {

    ws = new WebSocket('ws://localhost:8080')

    state = {
        completed: false,
        videoId: 1,
        quizOpen: false,
        tiredOpen: false
    }

    constructor(props) {
        super(props);
        this._player = React.createRef();
        this._quiz = React.createRef();
    }

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // // listen to data sent from the websocket server
            try {
                const message = JSON.parse(evt.data)
                this.setState({ dataFromServer: message })
                console.log(message)
            }
            catch (err) {

            }

        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }
    }



    componentDidUpdate() {
        this._player.current.load();
    }

    handleVideoStateChange() {
        if (this._player.current.state.player != null)
            if (this._player.current.state.player.ended === true)
                this.handleOpenQuiz();

    }

    handleClose = () => {
        let completed = false;
        if (this.props.totalVideos > this.state.videoId) {
            completed = true;
        }


        this.setState({
            completed: completed,
            videoId: this.state.videoId,
            quizOpen: false,
            tiredOpen: false
        });

    }

    handleNextVideoQuiz = () => {

        console.log("Deciding next video")
        setTimeout(() => {
            if (this._quiz.current.state.completed) {
                let nextVideo = (this._quiz.current.state.score / this._quiz.current.state.max_score > 0.5) ? this.state.videoId + 1 : this.state.videoId;
                this.setState({
                    completed: false,
                    videoId: nextVideo,
                    quizOpen: true,
                    tiredOpen: false
                });
            } else {
                this.setState({
                    completed: false,
                    videoId: this.state.videoId,
                    quizOpen: true,
                    tiredOpen: false
                });
            }
        }, 1000);
    }


    handleOpenQuiz = () => {
        this.setState({
            completed: false,
            videoId: this.state.videoId,
            quizOpen: true,
            tiredOpen: false
        });
    };

    handleOpenOptions = () => {
        this.setState({
            completed: false,
            videoId: this.state.videoId,
            quizOpen: false,
            tiredOpen: true
        });
    };



    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ completed: false, videoId: this.state.videoId + 1 })}>Next</Button>
                <Button onClick={() => this.handleOpenOptions()}>Open</Button>
                <VideoView videoId={this.state.videoId} source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/" ref={this._player} videoStateChange={() => this.handleVideoStateChange()} />
                <WebcamWrapper fps="5" websocket={this.ws} />

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    disableBackdropClick="true"
                    disableEscapeKeyDown="true"
                    open={this.state.quizOpen}
                    onClose={this.handleClose}
                >
                    <div style={{ margin: "10%" }}>
                        <Paper style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                            <Quiz source={"https://youlearn.s3.eu-central-1.amazonaws.com/math/02/q" + this.state.videoId + ".json"} ref={this._quiz} onClose={() => this.handleClose()} onSubmit={() => this.handleNextVideoQuiz()} />
                        </Paper>
                    </div>
                </Modal>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.tiredOpen}
                    onClose={this.handleClose}
                >
                    <div style={{ marginTop: "10%" }}>
                        <Grid container justify="center" spacing={2}>
                            <Grid item md={2}>
                                <AttentionAlert onClose={() => this.handleClose()} />
                            </Grid>
                        </Grid>
                    </div>
                </Modal>

            </div>
        );
    }

}

