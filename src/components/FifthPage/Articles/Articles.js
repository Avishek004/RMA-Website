import React from 'react';

const Articles = (props) => {
    const { title, description, content, urlToImage } = props.article;
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <img src={urlToImage} alt="" className="img-fluid mb-3" style={{ width: '250px', height: '150px' }} />
            </div>
            <div>
                <p className="achie">{title}</p>
                <p className="arduino1">{description}</p>
                <p className="arduino">{content}</p>
            </div>
        </div>
    );
};

export default Articles;