import React from 'react';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Login2 from '../pages/Login2';
import Register from '../pages/Register';
import Tasks from '../pages/Tasks';
import FormTask from '../pages/FormTask';
import EditTask from '../pages/EditTask';
import Logout from '../pages/Logout';

function Routs() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/tasks/:id" element={ <Tasks /> } />
            <Route path="/tasks/" element={ <FormTask/> } />
            <Route path="/logout" element={ <Logout/> } />
            <Route path="/logout/login" element={ <Login2/> } />
            <Route path="/tasks/onetask/:id" element={ <EditTask/> } />
          </Routes>
        </BrowserRouter>
    );
}

export default Routs;