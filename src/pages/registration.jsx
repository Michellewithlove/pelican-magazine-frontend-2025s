import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './home_guest';

const Registration = () => {
  const navigate = useNavigate();
  return ( 
    <div>
        <h1>РЕГИСТРАЦИЯ</h1>
        <h1>Вбейте ФИО, емейл, телефон, пароль и еще раз пароль</h1>
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/main")}  // Переход на главную
      >
        Зарегистрироваться
        </button>
        <button 
        type="button" 
        className="btn btn-link"
        onClick={() => navigate("/signin")}  // Переход на страницу входа
      >
        Уже есть аккаунт
        </button>
    </div>   
  );
};

export default Registration;