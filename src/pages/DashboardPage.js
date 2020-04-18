import React from 'react'
import Dashboard from '../features/dashboard/Dashboard'
import AppBarView from '../views/AppBarView'
import { MuiThemeProvider,ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

function DashboardPage(){

    return(
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <AppBarView/>
                <Dashboard/>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default DashboardPage