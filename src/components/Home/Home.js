import React from 'react';
import FifthPage from '../FifthPage/FifthPage';
import FourthPage from '../FourthPage/FourthPage';
import Header from '../Header/Header';
import LastPage from '../LastPage/LastPage';
import SecondPage from '../SecondPage/SecondPage';
import SixthPage from '../SixthPage/SixthPage';
import ThirdPage from '../ThirdPage/ThirdPage';


const Home = () => {

    return (
        <div>
            <Header />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <SixthPage />
            <LastPage />
        </div>
    );
};

export default Home;