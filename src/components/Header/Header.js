import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="robot_page img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/ba47uiX.jpg")` }}>
            <div className="fix">
                <div className="header">
                    <header className="float-left">
                        <div className="logo img-fluid" style={{ backgroundImage: `url("https://i.imgur.com/pC6mgDV.png")` }}>
                            <div className="logo_p">Robo Mechatronics Association Bangladesh</div>
                        </div>
                    </header>
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/" style={{color: 'white'}}>EVENT</Nav.Link>
                                </Nav.Item>
                                <NavDropdown title={<span style={{color: 'white'}}>MEMBERS</span>} id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.1">ADVISORY COMMITTEE</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.2">ALUMNI MEMBERS</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.3">COMMITTEE MEMBERS</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.4">EXECUTIVE MEMBERS</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" style={{color: 'white'}}>BLOG</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" style={{color: 'white'}}>GALLERY</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3" style={{color: 'white'}}>TUTORIALS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="first_page_para" style={{ backgroundImage: `url("https://i.imgur.com/pW6nAEk.png")` }}>
                    <div className="container fix first_page_para_div">
                        <p className="f_header">We are RMA</p>
                        <p className="f_para">Robo Mechatronics Association is <br />
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