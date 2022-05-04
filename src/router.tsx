import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cases from './pages/Cases';
import CreateCase from './pages/CreateCase';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cases/create' element={<CreateCase />}/>
                <Route path='/cases' element={<Cases />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;