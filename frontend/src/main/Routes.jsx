import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "../components/template/home/Home";
import UserCrud from "../components/template/user/User";

const AppRoutes = props => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
);

export default AppRoutes;