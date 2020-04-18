import React from 'react';
import Dashboard from './features/dashboard/Dashboard.js'
import Chatbot from './features/chatbot/Chatbot.js'
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Quiz from './features/quiz/Quiz';
import Script from './features/script/Script';
import Video from './views/Video';
import 'typeface-roboto';
import { MuiThemeProvider,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { white } from '@material-ui/core/colors';


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
		}
	  }
	},
  )
function App() {

  const classes = useStyles();
  return (
	<MuiThemeProvider theme={theme}>
		<ThemeProvider
        theme={(theme) =>
          createMuiTheme({
            ...theme,
            palette: {
              ...theme.palette,
              primary: {
				main: '#838383'
			  },
            },
          })
        }
      >
		<div>
			<AppBar position="static">
				<Toolbar color="secondary">
					<Typography variant="h6" className={classes.title}>
						YouLearn
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			{/* <Video videoId="003" source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/"/> */}
			<Container>
				<Dashboard />
				<Quiz source="https://youlearn.s3.eu-central-1.amazonaws.com/math/02/q003.json"/>
				<Video />
				<Chatbot />
			</Container>
		</div>
		</ThemeProvider>
	</MuiThemeProvider>
  );
}

export default App;
