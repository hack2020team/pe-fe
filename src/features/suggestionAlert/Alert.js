import React from 'react'
import {Card, CardMedia, CardContent,CardActionArea, Typography, CardActions, Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default class SuggestionAlert extends React.Component{

    
    render(){
        return (
        <Card  variant="outlined" style={{maxWidth: 345}}>
             <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://images.unsplash.com/photo-1536486239970-277f67f55a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        title="Coffee time?"
                    />
            <CardContent>
                <Typography variant="button" display="block" gutterBottom>
                    You seem interested in this topic!
          </Typography>
                <Typography variant="button" display="block" gutterBottom>
                <Button variant="contained" style={{ width: "100%"}} onClick={() => this.props.onClose()}>Just Continue</Button>
          </Typography>
                <Typography variant="button" display="block" gutterBottom>
                <Button variant="contained" style={{ width: "100%"}}>Take a deep dive</Button>
          </Typography>
        </CardContent>
        </CardActionArea>
            <CardActions>
                <Button  variant="contained" style={{ width: "100%"}} size="small">Learn More</Button>
            </CardActions>
        </Card>
        );
    }
}