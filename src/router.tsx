import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cases from './pages/Cases';
import ClosedCases from './pages/ClosedCases';
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
              <h4 className="navitem">Unassigned Cases</h4>
            </Link>
            <Link to="/cases/open">
              <h4 className="navitem">Open Cases</h4>
            </Link>
            <Link to="/cases/pending">
              <h4 className="navitem">Pending Cases</h4>
            </Link>
            <Link to="/cases/closed">
              <h4 className="navitem">Closed Cases</h4>
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
            <Route path="/cases/closed" element={<ClosedCases />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
