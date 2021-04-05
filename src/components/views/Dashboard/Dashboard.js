import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard View</h2>
    <Link to="/panel/tables">Tables</Link>
    <Link to="/panel/waiter">Waiter</Link>
    <Link to="/panel/kitchen">Kitchen</Link>
  </div>
);

export default Dashboard;
