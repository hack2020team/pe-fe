import React from 'react'
import {Card, CardContent, Icon, CardMedia, CardActionArea, Typography, CardActions, Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



export default class AttentionAlert extends React.Component{


    render(){
        return (
            <Card  variant="outlined" style={{maxWidth: 545}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1662&q=80"
                        title="Coffee time?"
                    />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        You seem tired! Coffee time?
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        <Button  variant="contained" style={{ width: "100%"}} onClick={() => this.props.onClose()}>No way! Continue.</Button>
                    </Typography>
                    <Typography  variant="button" display="block" gutterBottom>
                        <Button  variant="contained" style={{ width: "100%"}}>Take a break</Button>
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        <Button  variant="contained" style={{ width: "100%"}}>Breathing Excercies</Button>
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}