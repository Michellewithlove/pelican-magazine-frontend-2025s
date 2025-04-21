import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from './registration';
import New_password from './new_password';

const Forgot_password = () => {
  const navigate = useNavigate();
  return ( 
    <div>
        <h1>Ввести email, чтобы сбросить пароль</h1>
        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => navigate("/newpass")}  // Переход в новый пароль
        >
        Сбросить пароль
        </button>
        <button //Кнопка перехода в регистрацию
        type="button" 
        className="btn btn-link"
        onClick={() => navigate("/register")} 
        >
        Зарегистрироваться
        </button>
    </div>   
  );
};

export default Forgot_password;