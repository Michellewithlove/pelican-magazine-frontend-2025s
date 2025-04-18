import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './home_guest';
import Registration from './registration';

const New_password = () => {
const navigate = useNavigate();
  return ( 
    <div>
        <h1>НОВЫЙ ПАРОЛЬ</h1>
        <h1>Введите новый пароль</h1>
        <button 
        type="button" 
        className="btn btn-link"
        onClick={() => navigate("/signin")}  // Переход на страницу входа
      >
        Готово
        </button>
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/register")}  // Переход в регистрацию
        >
        Создать аккаунт
        </button>
    </div>   
  );
};

export default New_password;