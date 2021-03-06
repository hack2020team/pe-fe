import React from 'react'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default class AttentionAlert extends React.Component{


    render(){
        return (<Card  variant="outlined" style={{maxWidth: 690}}>
            <CardContent>
                <Typography color="textPrimary" variant="h4" component="h1" gutterBottom>
                    You don't seem to be paying attention.
          </Typography>
                <Typography variant="h5" component="h2">
                <Button onClick={() => this.props.onClose()}>No way! Continue.<ArrowForwardIosIcon /></Button>
          </Typography>
                <Typography  color="textSecondary">
                <Button>Take a break<ArrowForwardIosIcon /></Button>
          </Typography>
                <Typography variant="body2" component="p">
                <Button>Breathing Excercies<ArrowForwardIosIcon /></Button>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>);
    }
}