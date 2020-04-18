import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';


import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';


function AppBarView(){

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar color="secondary">
                <Typography variant="h6" className={classes.title}>
                  YouLearn
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )

}

export default AppBarView