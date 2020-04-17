import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { PlayerContainer } from './features/player/PlayerContainer';
import './App.css';
import { Container, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Quiz from './features/quiz/Quiz'
import Video from './views/Video'



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
    <div className="App">
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
      <Video />
      <Quiz />


    </div>
  );
}

export default App;
