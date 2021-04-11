import React from 'react';
import styles from './Tables.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

function createData(hour, table1, table2, table3, table4, table5, table6) {
  return {hour, table1, table2, table3, table4, table5, table6};
}

const bkd = 45;
const ev = 123;


const demoRows = [
  createData('12:00', ev, '', '', '', ev, bkd),
  createData('12:30', '', '', '', '', bkd, bkd),
  createData('13:00', '', '', bkd, '', '', ''),
  createData('13:30', '', '', '', '', bkd, bkd),
  createData('14:00', ev, '', '', '', bkd, ''),
  createData('14:30', bkd, '', ev, '', bkd, ''),
  createData('15:00', '', '', '', '', bkd, bkd),
  createData('15:30', ev, '', '', '', '', ev),
  createData('16:00', ev, '', ev, '', bkd, bkd),
  createData('16:30', ev, '', '', '', '', bkd),
  createData('17:00', bkd, '', '', '', bkd, bkd),
  createData('17:30', '', '', '', bkd, ev, bkd),
  createData('18:00', '', bkd, '', '', bkd, ev),
  createData('18:30', bkd, '', '', '', bkd, ''),
  createData('19:00', ev, '', '', '', bkd, bkd),
  createData('19:30', ev, '', '', '', ev, ''),
];

const renderActions = table => {
  switch(table) {
    case bkd:
      return (
        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${bkd}`}>
          Booking {bkd}
        </Button>
      );
    case ev:
      return (
        <Button component={ Link } to={`${process.env.PUBLIC_URL}/tables/event/${ev}`}>Event {ev}</Button>
      );
    default:
      return (
        <>
          <Button component={ Link } to={`${process.env.PUBLIC_URL}/tables/booking/new`}>new order</Button>
          <Button component={ Link } to={`${process.env.PUBLIC_URL}/tables/event/new`}>new event</Button>
        </>
      );
  }
};

const Tables = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hour</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
          <TableCell>Table 5</TableCell>
          <TableCell>Table 6</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoRows.map((row) => (
          <TableRow key={row.hour}>
            <TableCell>{row.hour}</TableCell>
            <TableCell>{renderActions(row.table1)}</TableCell>
            <TableCell>{renderActions(row.table2)}</TableCell>
            <TableCell>{renderActions(row.table3)}</TableCell>
            <TableCell>{renderActions(row.table4)}</TableCell>
            <TableCell>{renderActions(row.table5)}</TableCell>
            <TableCell>{renderActions(row.table6)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);


export default Tables;

//{address='123abc'}

//<h2>Tables View</h2>
//<Link to="tables/booking/new">New booking</Link>
//<Link to={`tables/booking/${address}`}>{`Booking ${address}`}</Link>
//<Link to="tables/event/new">New event</Link>
//<Link to={`tables/event/${address}`}>{`Event ${address}`}</Link>

