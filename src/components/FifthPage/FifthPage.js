import React, { useEffect, useState } from 'react';
import Articles from './Articles/Articles';
import './FifthPage.css';
import LatestNews from './LatestNews/LatestNews';

const FifthPage = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4363f2f716e34f50911daffda3482c27`;
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles.slice(0, 4)));
    }, [])


    return (
        <div>
            <div className="fifth_page" style={{ backgroundImage: `url("https://i.imgur.com/1SdHr5T.png")` }}>
                <div className="fix container">
                    <div className="row">
                        <div className="col-md-3 left_content">
                            <LatestNews />
                        </div>
                        <div className="col-md-9">
                            {
                                articles.map(article => <Articles article={article}></Articles>)
                            }
                        </div>
                    </div>
                    <div className="row button_div">
                        <button className="button_read_blog btn btn-primary">
                            READ our BLOG
                    </button>
                    </div>
                </div>
            </div>
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default FifthPage;