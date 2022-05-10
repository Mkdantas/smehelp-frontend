import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cases from './pages/Cases';
import CreateCase from './pages/CreateCase';
import OpenCases from './pages/OpenCases';
import PendingCases from './pages/PendingCases';

function Router() {
  return (
    <BrowserRouter>
      <div id="main">
        <div className="navbar">
          <h3 className="greetings">Welcome Matheus</h3>
          <div className="navitems">
            <Link to="/cases">
              <h3 className="navitem">Unassigned Cases</h3>
            </Link>
            <Link to="/cases/open">
              <h3 className="navitem">Open Cases</h3>
            </Link>
            <Link to="/cases/pending">
              <h3 className="navitem">Pending Cases</h3>
            </Link>
            <Link to="/cases/closed">
              <h3 className="navitem">Closed Cases</h3>
            </Link>
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
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
