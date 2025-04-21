import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Sign_in_page = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Войдите в профиль</h1>
            <form>
        <div className="form-group">
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Email или номер телефона" 
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
        </form>
            <button //Кнопка перехода в забыли пароль
                type="button" 
                className="btn btn-link"
                onClick={() => navigate("/forgotpass")} 
            >
                Забыли пароль
            </button>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={() => navigate("/mainreg")}  // Переход на главную (чел зарегистрирован теперь)
            >
                Войти в профиль
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

export default Sign_in_page;