import React, { useEffect, useState } from 'react';
import FifthPage from '../FifthPage/FifthPage';
import FourthPage from '../FourthPage/FourthPage';
import Header from '../Header/Header';
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';


const Home = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4363f2f716e34f50911daffda3482c27`)
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [])
    return (
        <div>
            <Header />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            {
                articles.map(article => <FifthPage article={article}></FifthPage>)
            }
        </div>
    );
};

export default Home;