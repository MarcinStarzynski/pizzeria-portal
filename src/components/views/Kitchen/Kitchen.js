import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function createOrder(id, table, order, status) {
  return { id, table, order, status};
}

const demoOrders = [
  createOrder('1ab', 3, 'Magheritta', 'ordered'),
  createOrder('32', 2, 'Siciliana', 'ordered'),
  createOrder('54', 4, 'Diavola', 'prepared'),
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <h2>Kitchen View</h2>
    <div className={styles.wrapper}>
      {demoOrders.map((order) => (
        <Card className={styles.card} key={order.id}>
          <CardContent>
            <p>Table: {order.table}</p>
            <p>Order: {order.order}</p>
            <p>Status: {order.status}</p>
          </CardContent>
          <CardActions>
            <p>Change status</p>
            <Button size="small">Prepared</Button>
          </CardActions>
        </Card>
      ))}
    </div>

  </Paper>
);

export default Kitchen;
