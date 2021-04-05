import React from 'react';
//import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import PageNav from '../src/components/layout/PageNav/PageNav';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Order from './components/views/Order/Order';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Event} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/order/:id'} component={Order} />
        </Switch>
        <PageNav />
        <div className="App">
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
