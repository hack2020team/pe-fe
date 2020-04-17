import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody,TableCell,TableContainer, TableHead, TableRow, LinearProgress, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const addNewCourse = (e) => {
//   e.preventDefault();
  
// };
function createData(name, progress, img) {
  return { name, progress, img };
}

const courses = [
  createData('Machine learning', 90, 'f'),
  createData('Statistics', 30, 'f'),
  createData('Robotics', 20, 'ff'),
  createData('AI', 30,'fff'),
  createData('Math', 10, 'ff'),
  createData('Java', 20, 'ff'),
  createData('Basics Programming', 30,'fff'),
  createData('Graphics', 10, 'ff'),
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
            <TableCell align="right">Progress</TableCell>
            <TableCell align="right">Skills</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
              <div className={classes.root}>
                <LinearProgress style={{height: "15px"}} variant="determinate" value={row.progress} />
              </div>
              </TableCell>
              <TableCell align="right"><img src="https://www.worldloppet.com/wp-content/uploads/2018/10/no-img-placeholder.png" width="70px"/></TableCell>
            </TableRow>
          ))}
           <TableRow>
              <TableCell component="th" scope="row">
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  + Add course
                </Button>
                
              </TableCell>
            </TableRow>
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
