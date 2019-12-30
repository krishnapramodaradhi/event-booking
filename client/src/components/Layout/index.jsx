import React from 'react';

import { useWindowDimensions } from '../../hooks';

import './index.css';
import Navbar from '../Navbar';
import FooterNav from '../FooterNav';

const Layout = ({ children }) => {
  const [ windowDimensions ] = useWindowDimensions();
  return (
    <header>
      <Navbar title="EventBooking" />
      <main className="container">{children}</main>
      {windowDimensions.innerWidth <= 600 ? <FooterNav className="footer" /> : null}
    </header>
  );
};

export default Layout;
