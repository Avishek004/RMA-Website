import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="robot-page img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/ba47uiX.jpg")` }}>
            <div className="fix">
                <div className="header">
                    <header className="float-left">
                        <div className="logo img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/pC6mgDV.png")` }}>
                            <div className="logo-p">Robo Mechatronics Association Bangladesh</div>
                        </div>
                    </header>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">EVENT</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="MEMBERS" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">ADVISORY COMMITTEE</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">ALUMNI MEMBERS</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">COMMITTEE MEMBERS</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">EXECUTIVE MEMBERS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">BLOG</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">GALLERY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">TUTORIALS</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="first-page-para" style={{ backgroundImage: `url("https://i.imgur.com/pW6nAEk.png")` }}>
                    <div className="container fix first-page-para-div">
                        <p className="f-header">We are RMA</p>
                        <p className="f-para">Robo Mechatronics Association is <br />
                                        a leading Robotics Association <br />
                                        in Bangladesh. <br />
                                        We work Honestly and sorely<br />
                                        for our Country & World.
                                        </p>
                        <button type="button" className="btn btn-primary btn1"><a href="/">Our Story</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;