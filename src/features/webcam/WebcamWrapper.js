import React from "react";
import Webcam from "react-webcam";
import { Paper, Grid, Card, CardActionArea, CardContent, Typography, CardActions, Button, CardMedia } from '@material-ui/core';
import { sizing } from '@material-ui/system';

export default class WebcamWrapper extends React.Component {


  ws = new WebSocket('ws://localhost:8080')

  constructor(props) {
    super(props);
    this._webcam = React.createRef(null);
    this.videoConstraints = {
      width: 320,
      height: 240,
      facingMode: "user"
    };
    setInterval(this.capture, 2000)
  }

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({ dataFromServer: message })
      console.log(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

    }
  }

  capture = () => {
    if (this._webcam.current != null) {
      let imageSrc = this._webcam.current.getScreenshot();
      this.ws.send(imageSrc);
    }
  }

  render() {
    return (

      <Grid container spacing={2}>
        <Grid item md={10}>
        </Grid>
        <Grid item md={2}>
          <Card style={{ maxWidth: 345 }}>
            <CardActionArea>
              <center></center>
              <Webcam
                audio={false}
                ref={this._webcam}
                screenshotFormat="image/jpeg"
                width="100%"
                videoConstraints={this.videoConstraints} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  A.I. Preview
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
        </Button>
            </CardActions>
          </Card>



        </Grid>
      </Grid>


    );
  }
};
