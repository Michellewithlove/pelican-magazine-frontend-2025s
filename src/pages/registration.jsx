import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
  const navigate = useNavigate();
  return ( 
    <div>
        <h1>Вбейте ФИО, емейл, телефон, пароль и еще раз пароль</h1>
        <form>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="ФИО" 
            />
        </div>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Email" 
            />
        </div>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="+7 (...)-..-.." 
            />
        </div>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Пароль" 
            />
        </div>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Повторите пароль" 
            />
        </div>
        </form>
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