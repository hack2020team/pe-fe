import React from 'react';
import Dashboard from './features/dashboard/Dashboard.js'
import Chatbot from './features/chatbot/Chatbot.js'
import './App.css';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import Quiz from './features/quiz/Quiz';
import VideoPage from './pages/VideoPage';
import 'typeface-roboto';

import { MuiThemeProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './router';

function App() {

  return (

    <Router>
      <Routes/>
    </Router>

  );
}

export default App;
