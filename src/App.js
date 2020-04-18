import React from 'react';
import Dashboard from './features/dashboard/Dashboard.js'
import Chatbot from './features/chatbot/Chatbot.js'
import './App.css';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Quiz from './features/quiz/Quiz';
import VideoPage from './pages/videoPage';
import 'typeface-roboto';
import { MuiThemeProvider,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';


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

const theme = createMuiTheme({
	palette: {
	  secondary: {
		  main: '#1f56b3'
		},
		primary: {
			main: '#838383'
		},
	  }
	},
  )
function App() {

  const classes = useStyles();
  return (
	<MuiThemeProvider theme={theme}>
		<ThemeProvider
			theme={theme}
     	 >
		<div>
			<Container>
				{/* <Dashboard /> */}
				<VideoPage />
				<Chatbot />

				
			</Container>
			<Alert onClose={() => {}} style={{ padding: "20px", position: "fixed", left: 0, bottom: 0, width: "100%"}} severity="info">By using that website you agree for using your camera</Alert>
		</div>
		</ThemeProvider>
	</MuiThemeProvider>
  );
}

export default App;
