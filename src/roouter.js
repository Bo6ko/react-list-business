import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Business from './pages/Business';
import BusinessItem from './pages/BusinessItem';
import Error from './pages/Error';
// Header
import Header from './components/Header';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/business/:id" element={<BusinessItem />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
};

export default ReactRouterSetup;
