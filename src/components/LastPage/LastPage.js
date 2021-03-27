import React from 'react';
import { Nav } from 'react-bootstrap';
import './LastPage.css';

const LastPage = () => {
    return (
        <div className="last_page img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/SienwNt.png")` }}>
            <div className="fix container">
                <footer className="footer_wrapper">
                    <div className="row copyright_n_menu">
                        <div className="copy_right col-md-6 text-center">
                            <p className="copy_right_p">All Rights Reserved By <br /> ⒸRobo Mechatronics
                            Association,Bangladesh</p>
                        </div>
                        <div className="footer_menu col-md-6">
                            <Nav className="justify-content-end flex-row flex-sm-row">
                                <Nav.Item>
                                    <Nav.Link href={"https://www.facebook.com/rmabd/"} target="_blank"><img src={"https://i.imgur.com/wHFPSFQ.png"} alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href={"https://www.rambd.official@gmail.com"} target="_blank"><img src={"https://i.imgur.com/IFkzbxl.png"} alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href={"https://www.youtube.com/channel/UC5IL0rd9lVr48SQ2YBFINIw"} target="_blank"><img src={"https://i.imgur.com/6PkaU4E.png"} alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href={"https://www.linkedin.com/company/robo-mechatronics-association-rma/"} target="_blank"> <img src={"https://i.imgur.com/N8ATCcB.png"} alt="" /> </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LastPage;