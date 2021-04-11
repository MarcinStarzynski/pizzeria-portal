import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


function createData(category, value){
  return { category, value };
}

const demoBooking= [
  createData('Table', 3),
  createData('People', 4),
  createData('Time', '13:00'),
  createData('Contact', '123456789'),
  createData('Hours', 2),
  createData('Date', '21-03-2021'),
  createData('Starters', 'Bread, water'),
];

const Booking = props => (
  <Paper className={styles.component}>
    <h2>Booking {props.match.params.id}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Information</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoBooking.map((row) => (
          <TableRow key={row.category}>
            <TableCell>
              {row.category}
            </TableCell>
            <TableCell>
              <TextField id="standard-basic" label={row.value} />
              <Button>Submit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

Booking.propTypes ={
  match: PropTypes.any,
};

export default Booking;
