import React from 'react';
import './Layout.scss';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function Layout({ children }) {
  return (
    <div className="layout"> 
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
