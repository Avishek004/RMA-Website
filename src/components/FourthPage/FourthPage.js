import React from 'react';
import './FourthPage.css';

const FourthPage = () => {
    return (
        <div className="fourth_page" style={{ backgroundImage: `url("https://i.imgur.com/U1pNOEo.jpeg")` }}>
            <div className="fix container">
                <div className="our_services_div">
                    <h2 className="our_services">OUR SERVICES</h2>
                </div>
                <div className="row our_services_footer_four_img">
                    <div className="col-md-6 cc">
                        <img src={"https://i.imgur.com/mVZLHij.png"} alt="" className="img_cc img-fluid" />
                        <div className="cc_wraper">
                            <h4 className="create">Creative</h4>
                            <h2 className="consult">Consultancy</h2>
                        </div>
                    </div>
                    <div className="col-md-3 pm_div">
                        <div className="pm_wraper">
                            <img src={"https://i.imgur.com/53njmsj.png"} alt="" className="img_pm img_pm1 img-fluid" />
                            <div className="pm">
                                <h5 className="pm_h pm_h1">Project <br /> Making</h5>
                            </div>
                        </div>
                        <div className="pm_wraper dd">
                            <img src={"https://i.imgur.com/KZJNuRU.png"} alt="" className="img_pm img_dd img-fluid" />
                            <div className="pm">
                                <h5 className="pm_h pm_dd h5">DIGITAL</h5>
                                <h4 className="pm_h pm_dd h4">DESIGNING</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 rd-wrapper">
                        <img src={"https://i.imgur.com/9TZCtMC.png"} alt="" className="img_rd img-fluid" />
                        <div className="rd">
                            <h5 className="rd_h5">Research &</h5>
                            <h4 className="rd_h4">Development</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;