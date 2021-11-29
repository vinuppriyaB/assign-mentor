import  React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';



export function Home(){
    return(
        <div className="home">
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Paper sx={{ maxWidth: 700, my: 1, mx: 'auto', p: 2 }} className='menu'>
        <Grid container wrap="nowrap" spacing={16} >
          <Grid item>
          <Typography variant="h6" gutterBottom component="div">
          ADD STUDENT
          </Typography>
          
          </Grid>
          <Grid item xs zeroMinWidth>
            <p>Add student to the Database</p>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 700, my: 1, mx: 'auto', p: 2 }} className='menu'>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
          <Typography variant="h6" gutterBottom component="div">
          ADD MENTOR
          </Typography>
            
          </Grid>
          <Grid item xs>
          <p>Add mentor to the Database</p>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 700, my: 2, mx: 'auto', p: 2 }} className='menu'>
        <Grid container wrap="nowrap" spacing={10}>
          <Grid item>
          <Typography variant="h6" gutterBottom component="div">
          ASSIGN STUDENTS
          </Typography>
           
          </Grid>
          <Grid item xs>
          <p> Assign a student to Mentor </p>
          <p>Select one mentor and Add multiple Student </p>
          <p>A student who has a mentor should not be shown in List</p>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 700, my: 2, mx: 'auto', p: 2 }} className='menu'>
        <Grid container wrap="nowrap" spacing={11}>
          <Grid item>
          <Typography variant="h6" gutterBottom component="div">
          CHANGE MENTOR
          </Typography>
           
          </Grid>
          <Grid item xs>
          <p>Assign or Change Mentor for particular Student </p>
            <p>Select One Student and Assign one Mentor </p>
          
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 700, my: 1, mx: 'auto', p: 2 }} className='menu'>
        <Grid container wrap="nowrap" spacing={8}>
          <Grid item>
          <Typography variant="h6" gutterBottom component="div">
          MENTOR'S STUDENT
          </Typography>
         
          </Grid>
          <Grid item xs zeroMinWidth>
          <p>Show all students for a particular mentor</p>
          </Grid>
        </Grid>
      </Paper>
    </Box>

        </div>

    )
}