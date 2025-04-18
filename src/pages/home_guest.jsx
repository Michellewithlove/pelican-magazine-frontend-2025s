import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article_preview from '../components/article_prev';

const Home = () => {
  return ( 
    <div>
        <h1>ГЛАВНАЯ ДЛЯ ГОСТЕЙ</h1>
        
        <Article_preview />
    </div>   
  );
};

export default Home;