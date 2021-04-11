import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
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

const demoOrder= [
  createData('Table', 3),
  createData('Menu', 'Pizza, Spaghetti'),
  createData('Products options', 'Thick dough, vegan '),
  createData('Order', 'Pizza, pasta, brocoli'),
  createData('Cost', '$55'),
];

const Order = props => (
  <Paper className={styles.component}>
    <h2>Order {props.match.params.id}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Information</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrder.map((row) => (
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

Order.propTypes ={
  match: PropTypes.any,
};


export default Order;
