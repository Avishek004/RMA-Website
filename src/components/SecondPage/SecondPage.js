import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
    return (
        <div>
            <div className="second img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/mXEqPwU.png")` }}>
                <div className="second_page fix container">
                    <div className="row">
                        <div className="col-md-7" id="parent">
                            <img src={"https://i.imgur.com/twXbbEz.png"} alt="" className="first_pic img-fluid" />
                            <img src={"https://i.imgur.com/THpzHnA.png"} alt="" className="second_pic img-fluid" />
                            <img src={"https://i.imgur.com/hYEpsFt.png"} alt="" className="third_pic img-fluid" />
                        </div>
                        <div className="col-md-5 parent">
                            <article>
                                <p className="what_we">WHAT WE DO</p>
                                <p className="best_place">Best place to show one's Creativity</p>
                                <p className="the_value">The value of an idea lies in the using of it. Ideas are worthless until we take them out
                                of our head and see what they can do. Sp we help anyone to bring out their idea out of their head and make them to realize the power of their own ideas.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ height: '100px' }}></div>
            <div className="second-second">
                <div className="second-second-part fix container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src={"https://i.imgur.com/l82hdn3.png"} alt="" className="icon1" />
                                <h2 className="icon1_h">RoboRace</h2>
                                <p className="icon1_p">We Present the biggest Robotic Competetion ‘RMA Roborace’ in Bangladesh. </p>
                            </div>
                            <div>
                                <img src={"https://i.imgur.com/e4nN12P.png"} alt="" className="icon1 mt-5" />
                                <h2 className="icon1_h">Training Programs</h2>
                                <p className="icon1_p">We give both basic and advanced training program to freshers.</p>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <img src={"https://i.imgur.com/apU1FLk.png"} alt="" className="btn__icon img-fluid" />
                            <br />
                            <img src={"https://i.imgur.com/SEPtKFN.png"} alt="" className="btn__icon2 img-fluid ml-1" />
                        </div>
                        <div className="col-md-5">
                            <div>
                                <img src={"https://i.imgur.com/sSTQXns.png"} alt="" className="icon3" />
                                <h2 className="icon1_h">Success</h2>
                                <p className="icon1_p">We have plenty of success on renowned competitions and project shows both in
                                national and international platform.</p>
                            </div>
                            <div>
                                <img src={"https://i.imgur.com/tJ6aqrm.png"} alt="" className="icon3 mt-4" />
                                <h2 className="icon1_h">Project Show</h2>
                                <p className="icon1_p">We Present Out Projects in various renowned Competitions, Universities,
                                Government Programs, Digital Fair,etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100px' }}></div>
            <div className="second_footer">
                <div className="fix container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="fi-rst">
                                <h2 className="eleven float-left">11</h2>
                                <p className="competition comp-one float-left">Competitions <br /> Arranged</p>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="se-cond">
                                <h2 className="eleven one float-left">200+</h2>
                                <p className="competition comp-two float-left">Regular <br /> Members</p>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="th-ird">
                                <h2 className="eleven float-left">30+</h2>
                                <p className="competition comp-three float-left">Prizes <br /> Achieved</p>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fou-rth">
                                <h2 className="eleven float-left">11</h2>
                                <p className="competition comp-four float-left">Completed <br /> projects</p>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;