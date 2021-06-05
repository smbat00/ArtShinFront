import React, {useState} from 'react';
import  './desnavi.modul.css'
import {NavLink} from 'react-router-dom';
import {Nav, NavItem} from "reactstrap";
import logo from './home/logo.jpg';
import {Container, Row, Col, NavbarBrand} from 'reactstrap';
import {FaFacebookF, FaInstagram, FaPhone, FaVoicemail} from "react-icons/fa"


const DesNavi = () => {
    const logo_styles = {
        width :'200px',

    }
    const navItemsStyle = {
        padding: '10px',
        textDecoration: 'none',
    }
    return (

        <Container fluid>
            <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <NavLink href="/" to="/">
                        <img src={logo} style={logo_styles} alt=""/>
                    </NavLink>
                    <div className="social-media order-lg-last">
                        <p className="mb-0 d-flex">
                            <a href="#" className="d-flex align-items-center justify-content-center">
                                <span
                                className="fa ">
                                <FaFacebookF/>
                                {/*<i className="sr-only">Facebook</i>*/}
                            </span></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><span
                                className="fa ">
                                <FaInstagram/>
                            </span></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><span
                                className="fa ">
                                <FaPhone/>
                            </span></a>
                            <a href="#" className="d-flex align-items-center justify-content-center"><span
                                className="fa ">
                                <FaVoicemail/>
                            </span></a>
                        </p>
                    </div>
                    <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        {/*<NavItem>*/}
                        {/*    <NavLink style={navItemsStyle} href="contact" to="/Contact">Contact</NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink style={navItemsStyle} href="about" to="/about">About</NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink style={navItemsStyle} href="service" to="/dervice">Service</NavLink>*/}
                        {/*</NavItem>*/}
                        <ul className="navbar-nav ml-auto mr-md-3">
                            <li className="nav-item active">
                                <NavLink style={navItemsStyle} href="contact" to="/Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={navItemsStyle} href="about" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink style={navItemsStyle} href="service" to="/service">Service</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </Container>
    )
}
export default DesNavi;