import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = ({address = '123abc'}) => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to="/tables/order/new">New order</Link>
    <Link to={`tables/order/${address}`}>{`Booking ${address}`}</Link>
  </div>
);

Waiter.propTypes = {
  address: PropTypes.string,
};

export default Waiter;
