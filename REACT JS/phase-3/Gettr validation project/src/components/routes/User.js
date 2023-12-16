import React from 'react'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  root:
  {
    '& .MuiTableRow-root ': {
      color: "whitesmoke",
      display: "flex",
      justifyContent: "flex-start"
    },
    height: 1,
  },
  userContainer:
  { 
    position: "relative",
    left: 300,
    border: "2px solid violet",
    bottom: 719,
    width: 1000,
  },
  headerContainer:
  {
    position: "relative",
    left: 636,
    bottom: 800,
  },
})

export default function User() {

  const classes = useStyles();
  const users = useSelector(state => state.users);

  return (
  <div className={classes.root}>
    <h2 className={classes.headerContainer}>USER</h2>
    <div className={classes.userContainer}><h1>User List</h1>
      <TableContainer component={Paper}>
        <Table>
           <TableHead>
             <TableRow className="tableHead">
               <TableCell>Name</TableCell>
               <TableCell className={classes.emailContainer} >Email</TableCell>
            </TableRow>
          </TableHead>
         {
         users.map(user => <div key={user.id}>
          <TableBody>
          <TableRow>
            <TableCell>{user.values.name}</TableCell>
            <TableCell>{user.values.email}</TableCell>
            </TableRow>
          </TableBody>
          </div>)
         }      
       </Table>
     </TableContainer>
    </div>
  </div>
  )
}
