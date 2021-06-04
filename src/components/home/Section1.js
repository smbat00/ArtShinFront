import React, {useState} from 'react';
import serviceimg from './img/service-1.jpg'
import {Container, Row, Col, NavbarBrand} from 'reactstrap';

import Circle from './Circle';
import logo from "./logo.png";
import  './homeStyle.modul.css'
const Section1 = () => {
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const section1_title = {
        color:'#00653b',
    }
    const mycstyle = {
        textAlign: 'center',
    }

    // const handleAddPlayer = () => {
    //     console.log('click')
    // };
    //

    const shoot = () => {
        setArr(arr.concat(value));
    }

    return (
        <Container>
                <div className="sec-title text-center">
                    <h2>Service That We Offers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor </p>
                </div>
            <Row>
                <Col md='4'>
                        <div className="single-service left-col">
                            <Row className="services-box">

                            <Col md='9'>
                                <div className="text-box">
                                    <h3>Water Leaks</h3>
                                    <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                        magna</p>
                                </div>
                            </Col>
                            <Col md='3'>
                                <div className="icon-box">
                                    <div className="inner-box">

                                        <i className="avicon-pipes"></i>
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            <Row className="services-box">

                                <Col md='9'>
                                    <div className="text-box">
                                        <h3>Water Leaks</h3>
                                        <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                            magna</p>
                                    </div>
                                </Col>
                                <Col md='3'>
                                    <div className="icon-box">
                                        <div className="inner-box">
                                            <i className="avicon-pipes"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="services-box">

                                <Col md='9'>
                                    <div className="text-box">
                                        <h3>Water Leaks</h3>
                                        <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                            magna</p>
                                    </div>
                                </Col>
                                <Col md='3'>
                                    <div className="icon-box">
                                        <div className="inner-box">
                                            <i className="avicon-pipes"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                <Col md='4'>
                        {/*<img src="img/service-1.jpg" alt="Awesome Image">*/}
                        <img src={serviceimg}  alt=""/>

                    </Col>
                <Col md='4'>
                    <div className="single-service right-col">
                        <Row className="services-box">
                            <Col md='3'>
                                <div className="icon-box">
                                    <div className="inner-box">
                                        <i className="avicon-pipes"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col md='9'>
                                <div className="text-box">
                                    <h3>Water Leaks</h3>
                                    <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                        magna</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="services-box">
                            <Col md='3'>
                                <div className="icon-box">
                                    <div className="inner-box">
                                        <i className="avicon-pipes"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col md='9'>
                                <div className="text-box">
                                    <h3>Water Leaks</h3>
                                    <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                        magna</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="services-box">
                            <Col md='3'>
                                <div className="icon-box">
                                    <div className="inner-box">
                                        <i className="avicon-pipes"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col md='9'>
                                <div className="text-box">
                                    <h3>Water Leaks</h3>
                                    <p>Lorem ipsum dolor sit amet constur adip elit sed do eiusmtempor incid dolore
                                        magna</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
        </Container>
    );
}


export default Section1;