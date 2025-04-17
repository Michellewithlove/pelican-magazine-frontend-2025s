import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Sign_in_page from './pages/sign_in';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Пеликан</h1>
      <button 
        type="button" 
        className="btn btn-link-primary"
        onClick={() => navigate("/main")}  // Переход на страницу входа
      >
        Статьи
      </button>
      <button type="button" className="btn btn-link">Авторы</button>
      <button type="button" className="btn btn-link">Конспекты</button>
      <button type="button" className="btn btn-outline-primary">Зарегистрироваться</button>
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
      </Routes>
    </div>
  );
}

export default App;