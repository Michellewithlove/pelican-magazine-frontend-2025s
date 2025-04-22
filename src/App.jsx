import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home_guest';
import Homereg from './pages/home_user';
import Sign_in_page from './pages/sign_in';
import Registration from './pages/registration';
import Forgot_password from './pages/forgot_password';
import New_password from './pages/new_password';
import Profile from './pages/profile';
import Editprof from './pages/prof_sett';
import Writeart from './pages/write_art';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} /> {/* Перенаправление */}
        <Route path="/main" element={<Home />} />
        <Route path="/mainreg" element={<Homereg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Sign_in_page />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpass" element={<Forgot_password />} />
        <Route path="/newpass" element={<New_password />} />
        <Route path="/editprof" element={<Editprof />} />
        <Route path="/writeart" element={<Writeart />} />
      </Routes>
    </div>
  );
}

export default App;