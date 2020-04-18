import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Typography, TableBody,TableCell,TableContainer, TableHead, TableRow, LinearProgress, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, progress, img) {
  return { name, progress, img };
}

const courses = [
  createData('Deep Neural Networks for Language Understanding', 90, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+00.16.43.png'),
  createData('Explainable AI and Causality', 30, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.01.png'),
  createData('Style Transfer Networks', 20, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.17.png'),
  createData('Low-Resource-Learning / Transfer Learning / Active Learning', 30,'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.17.png'),
  createData('AlphaGo / AlphaZero / AlphaStar', 10, 'https://youlearn.s3.eu-central-1.amazonaws.com/math/skills-chart/Screenshot+2020-04-18+at+08.56.01.png'),
];

export default function SimpleTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <Typography variant="subtitle1" style={{fontWeight: 'bold'}} gutterBottom>
                {row.name}
              </Typography> 
              </TableCell>
              <TableCell align="right">
              <div className={classes.root}>
                <LinearProgress style={{height: "15px"}} color="secondary" variant="determinate" value={row.progress} />
              </div>
              </TableCell>
              <TableCell align="right"><img src={row.img} width="90px"/></TableCell>
            </TableRow>
          ))}
           {/* <TableRow>
              <TableCell component="th" scope="row">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  + Add course
                </Button>
                
              </TableCell>
            </TableRow> */}
        </TableBody>
       
      </Table>
    </TableContainer>
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
     <DialogTitle id="form-dialog-title">Add course</DialogTitle>
       <DialogContent>
         <DialogContentText>
          Add name of the new course
         </DialogContentText>
         <TextField
           autoFocus
           margin="dense"
           id="name"
           label="Course"
           fullWidth
         />
       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose} color="primary">
           Cancel
         </Button>
         <Button onClick={handleClose} color="primary">
           Add
         </Button>
       </DialogActions>
   </Dialog>
   </div>
  );
}
