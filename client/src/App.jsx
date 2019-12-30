import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Auth from './pages/Auth';
import Events from './pages/Events';
import Bookings from './pages/Bookings';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
