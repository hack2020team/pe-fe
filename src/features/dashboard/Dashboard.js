import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table,  Grid, Typography, TableBody,TableCell,TableContainer, TableHead, TableRow, LinearProgress, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import './../../App.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, progress, img, url) {
  return { name, progress, img, url };
}

const courses = [
  createData('Deep Neural Networks for Language Understanding', 90, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+00.16.43.png', 'deep-neural-networks-for-language-understanding'),
  createData('Explainable AI and Causality', 30, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.01.png', 'explainable-aI-and-Causality'),
  createData('Style Transfer Networks', 20, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.17.png', 'style-transfer-networks'),
  createData('Low-Resource-Learning / Transfer Learning / Active Learning', 30,'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.17.png', 'low-resource-learning-transfer-learning-active-learning'),
  createData('AlphaGo / AlphaZero / AlphaStar', 10, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.01.png', 'alphaGo-alphaZero-alphaStar'),
];


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div style={{ paddingTop: "35px", marginBottom: '100px' }}> 
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Courses</TableCell>
                <TableCell align="left">Progress</TableCell>
                <TableCell align="right">Skills</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((row) => (
                
                  <TableRow key={row.name} style={{ width: '100%'}}>
                    <TableCell component="th" scope="row">

                    <NavLink to={"/" + row.url} className="remove-link">
                      <Typography variant="subtitle1" className="remove-link" gutterBottom>
                        {row.name}
                      </Typography> 
                      </NavLink>
                    </TableCell> 
                    <TableCell align="right">
                    <div className={classes.root}>
                      <LinearProgress style={{height: "15px"}} color="secondary" variant="determinate" value={row.progress} />
                    </div>
                    </TableCell>

                    <TableCell align="right"><img src={row.img} width="90px"/></TableCell>
                  </TableRow>
               
              ))}
              
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{textAlign: 'center'}}>
            <img  width="70%" src="https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+15.14.40.png" />
            <img  width="400px" style={{paddingTop: '50px'}} src="https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+15.27.49.png" />
          </div>
        </Grid>
      
        </Grid>
    
   </div>
  );
}
