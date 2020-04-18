import React from 'react';

import Dashboard from './features/dashboard/Dashboard.js'
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Quiz from './features/quiz/Quiz';
import VideoPage from './pages/videoPage';
import 'typeface-roboto';


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


function App() {

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            YouLearn
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <VideoPage />
      <Quiz source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/q3.json"/>

      <Container>
        <Dashboard />
      </Container>


    </div>
  );
}

export default App;
