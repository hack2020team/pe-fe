import React from 'react';
import { Button, Paper, Modal } from '@material-ui/core';
import VideoView from '../views/videoView';
import Quiz from '../features/quiz/Quiz';
import styles from './video.page.css';
import WebcamWrapper from '../features/webcam/WebcamWrapper'
export default class VideoPage extends React.Component {

    state = {
        completed: false,
        videoId: 1,
        quizOpen: false,
        optionOpen: false
    }

    constructor(props) {
        super(props);
        this._player = React.createRef();
        this._quiz = React.createRef();
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
            optionOpen: false
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
                    optionOpen: false
                });
            } else {
                this.setState({
                    completed: false,
                    videoId: this.state.videoId,
                    quizOpen: true,
                    optionOpen: false
                });
            }
        }, 1000);
    }


    handleOpenQuiz = () => {
        this.setState({
            completed: false,
            videoId: this.state.videoId,
            quizOpen: true,
            optionOpen: false
        });
    };

    handleOpenOptions = () => {
        this.setState({
            completed: false,
            videoId: this.state.videoId,
            quizOpen: false,
            optionOpen: true
        });
    };



    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ completed: false, videoId: this.state.videoId + 1 })}>Next</Button>

                <VideoView videoId={this.state.videoId} source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/" ref={this._player} videoStateChange={() => this.handleVideoStateChange()} />
                <WebcamWrapper />

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    disableBackdropClick="true"
                    disableEscapeKeyDown="true"
                    open={this.state.quizOpen}
                    onClose={this.handleClose}
                >
                    <div style={{margin: "10%"}}>
                        <Paper style={{paddingTop: "5%", paddingBottom:"5%"}}>
                            <Quiz source={"https://youlearn.s3.eu-central-1.amazonaws.com/math/02/q" + this.state.videoId + ".json"} ref={this._quiz} onClose={() => this.handleClose()} onSubmit={() => this.handleNextVideoQuiz()} />
                        </Paper>
                    </div>
                </Modal>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.optionOpen}
                    onClose={this.handleClose}
                >
                    <div className="styles.simple-modal">
                        <Paper>
                            <Quiz source={"https://youlearn.s3.eu-central-1.amazonaws.com/math/02/q" + this.state.videoId + ".json"} />
                        </Paper>
                    </div>
                </Modal>

            </div>
        );
    }

}

