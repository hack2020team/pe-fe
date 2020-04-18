import React from 'react'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default class SuggestionAlert extends React.Component{


    render(){
        return (<Card  variant="outlined" style={{maxWidth: 345}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    You seem interested in this topic!
          </Typography>
                <Typography variant="h5" component="h2">
                <Button onClick={() => this.props.onClose()}>Just Continue<ArrowForwardIosIcon /></Button>
          </Typography>
                <Typography  color="textSecondary">
                <Button>Take a deep dive<ArrowForwardIosIcon /></Button>
          </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>);
    }
}