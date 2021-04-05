import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = ({address='123abc'}) => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to="tables/booking/new">New booking</Link>
    <Link to={`tables/booking/${address}`}>{`Booking ${address}`}</Link>
    <Link to="tables/event/new">New event</Link>
    <Link to={`tables/event/${address}`}>{`Event ${address}`}</Link>
  </div>
);

Tables.propTypes = {
  address: PropTypes.string,
};

export default Tables;
