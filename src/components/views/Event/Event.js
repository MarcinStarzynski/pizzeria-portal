import React from 'react';
import PropTypes from 'prop-types';
import styles from './Event.module.scss';
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

const demoEvent= [
  createData('Table', 3),
  createData('People', 4),
  createData('Time', '13:00'),
  createData('Contact', '123456789'),
  createData('Days', 'Mondays, Fridays'),
  createData('Hours', 2),
  createData('Date Range', '21-03-2021 - 24-05-2021'),
  createData('Starters', 'Bread, water'),
];

const Event = props => (
  <Paper className={styles.component}>
    <h2>Event {props.match.params.id}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Information</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoEvent.map((row) => (
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

Event.propTypes ={
  match: PropTypes.any,
};


export default Event;
