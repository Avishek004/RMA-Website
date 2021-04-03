import React from 'react';

const Articles = (props) => {
    console.log(props);
    const { title, description, urlToImage } = props.article;
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <img src={urlToImage} alt="" className="img-fluid mb-3" style={{ width: '300px', height: '150px' }} />
            </div>
            <div>
                <p className="achie">{title}</p>
                <p className="arduino1">{description}</p>
            </div>
        </div>
    );
};

export default Articles;