import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCase from './pages/CreateCase';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cases/create' element={<CreateCase />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;