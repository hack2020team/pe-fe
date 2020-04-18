import React from 'react';
import Chatbot from './features/chatbot/Chatbot.js'
import './App.css';
import { AppBar, Toolbar,Chip, Typography, Button, Container, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import { MuiThemeProvider,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './router';

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
			<AppBar color="secondary" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						YouLearn
					</Typography>
					<Chip
						avatar={<Avatar alt="Natacha" src="https://material-ui.com/static/images/avatar/1.jpg" />}
						label="Tomas"
					/>
				</Toolbar>
			</AppBar>
			<Container >
				<Chatbot />
			</Container>
			<Alert style={{ padding: "20px", position: "fixed", left: 0, bottom: 0, width: "100%"}} severity="info">By using that website you agree for using your camera</Alert>
		</div>
		</ThemeProvider>
		<Router>
			<Routes/>
		</Router>
	</MuiThemeProvider>
  );
}

export default App;
