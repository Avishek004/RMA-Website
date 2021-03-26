import React from 'react';
import './FourthPage.css';

const FourthPage = () => {
    return (
        <div className="fourth-page" style={{ backgroundImage: `url("https://i.imgur.com/U1pNOEo.jpeg")` }}>
            <div className="fix container">
                <div className="our-services-div">
                    <h2 className="our-services">OUR SERVICES</h2>
                </div>
                <div className="row our-services-footer-four-img">
                    <div className="col-md-6 cc">
                        <img src={"https://i.imgur.com/mVZLHij.png"} alt="" className="img-cc img-fluid" />
                        <div className="cc-wraper">
                            <h4 className="create">Creative</h4>
                            <h2 className="consult">Consultancy</h2>
                        </div>
                    </div>
                    <div className="col-md-3 pm-div">
                        <div className="pm-wraper">
                            <img src={"https://i.imgur.com/53njmsj.png"} alt="" className="img-pm img-pm1 img-fluid" />
                            <div className="pm">
                                <h5 className="pm-h pm-h1">Project <br /> Making</h5>
                            </div>
                        </div>
                        <div className="pm-wraper dd">
                            <img src={"https://i.imgur.com/KZJNuRU.png"} alt="" className="img-pm img-dd img-fluid" />
                            <div className="pm">
                                <h5 className="pm-h pm-dd h5">DIGITAL</h5>
                                <h4 className="pm-h pm-dd h4">DESIGNING</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 rd-wrapper">
                        <img src={"https://i.imgur.com/9TZCtMC.png"} alt="" className="img-rd img-fluid" />
                        <div className="rd">
                            <h5 className="rd-h5">Research &</h5>
                            <h4 className="rd-h4">Development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;