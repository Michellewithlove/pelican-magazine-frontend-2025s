import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home_guest';
import Sign_in_page from './pages/sign_in';
import Registration from './pages/registration';
import Forgot_password from './pages/forgot_password';
import New_password from './pages/new_password';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Пеликан</h1>
      <button 
        type="button" 
        className="btn btn-link-primary"
        onClick={() => navigate("/main")}  // Переход на главную
      >
        Статьи
      </button>
      <button type="button" className="btn btn-link">Авторы</button>
      <button type="button" className="btn btn-link">Конспекты</button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/register")}  // Переход в регистрацию
      >
        Зарегистрироваться
      </button>
      <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/signin")}  // Переход на страницу входа
      >
        Войти
      </button>
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/signin" element={<Sign_in_page />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpass" element={<Forgot_password />} />
        <Route path="/newpass" element={<New_password />} />
      </Routes>
    </div>
  );
}

export default App;