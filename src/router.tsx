import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UnassignedCases from './pages/UnassignedCases';
import ClosedCases from './pages/ClosedCases';
import CreateCase from './pages/CreateCase';
import Login from './pages/Login';
import OpenCases from './pages/OpenCases';
import PendingCases from './pages/PendingCases';

function Router() {

  let activeStyle = {
    background: '#435d9e',
    paddingLeft:'3rem',
    transition: '0.5s'
  };
  return (
   
    <BrowserRouter>
    {window.location.pathname !== '/' ? (
      <div id="main">
      
        <div className="navbar">
          <h3 className="greetings">Welcome Matheus</h3>
          <div className="navitems">
          <NavLink className={({isActive}) => isActive? 'active': undefined} to="/cases/create">
              <h4 className="navitem">New case</h4>
            </NavLink>
            <NavLink to="/cases/unassigned">
              <h4 className="navitem">Unassigned Cases</h4>
            </NavLink>
            <NavLink to="/cases/open">
              <h4 className="navitem">Open Cases</h4>
            </NavLink>
            <NavLink to="/cases/pending">
              <h4 className="navitem">Pending Cases</h4>
            </NavLink>
            <NavLink to="/cases/closed">
              <h4 className="navitem">Closed Cases</h4>
            </NavLink>
          </div>
          <div className="logout">
              <h3 className="navitem"> Logout</h3>
          </div>
        </div>
        
        <div className="content">
         
        <Routes>
            <Route path="/cases/create" element={<CreateCase />} />
            <Route path="/cases/open" element={<OpenCases />} />
            <Route path="/cases/pending" element={<PendingCases />} />
            <Route path="/cases/closed" element={<ClosedCases />} />
            <Route path="/cases/unassigned" element={<UnassignedCases />} />
          </Routes>
        
        </div>
      </div>) 
      : <></>}
      <Routes>
      <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
