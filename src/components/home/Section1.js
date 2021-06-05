import React, {useState} from 'react';
// import { FaBeer } from 'react-icons/fa';
import {FaEdit, FaTools, FaToolbox} from "react-icons/fa"

import {Container, Row, Col, NavbarBrand} from 'reactstrap';
import  './homeStyle.modul.css'
const Section1 = () => {


    return (
        <Container>
            <section className="kc-elm kc-css-621456 kc_row">
                <div className="kc-row-container  kc-container">
                    <Row className="kc-wrap-columns">
                        <Col md='4' className="kc-elm kc-css-875364 kc_col-sm-4 kc_column kc_col-sm-4">
                            <div className="kc-col-container">
                                <div id=" " className="kc-elm kc-css-577646 kc_row kc_row_inner">
                                    <div
                                        className="kc-elm kc-css-551889 kc_col-sm-12 kc_column_inner kc_col-sm-12 kc-pc-loaded">
                                        <div className="kc_wrapper kc-col-inner-container">
                                            <div className="kc-elm kc-css-280059 kc-feature-boxes kc-fb-layout-3">


                                                <Row>
                                                    <Col md='4'>
                                                        <div className="content-icon">
                                                            <FaToolbox />

                                                        </div>
                                                    </Col>
                                                    <Col md='8'>
                                                        <div className="box-right">
                                                            <div className="content-title">Նախագծում</div>
                                                            <div className="content-desc">Գրագետ</div>
                                                        </div>
                                                    </Col >
                                                </Row>
                                            </div>
                                            <div className="kc-elm kc-css-72980 kc_text_block kc_text_block_b_1">
                                                <ul className="list-unstyled lists space-30">
                                                    <li><i className="fa fa-check-circle text-primary"></i>Չափագրում
                                                    </li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Վերլուծություն</li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Ռիսկերի կանխատեսում</li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Թվերի տրամադրում
                                                    </li>
                                                </ul>
                                                {/*<p><a className="text-primary" href="#">View more&nbsp;&nbsp;<i*/}
                                                {/*    className="fa fa-long-arrow-right"></i></a></p>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='4' className="kc-elm kc-css-19393 kc_col-sm-4 kc_column kc_col-sm-4">
                            <div className="kc-col-container">
                                <div className="kc-elm kc-css-841137 kc_row kc_row_inner">
                                    <div
                                        className="kc-elm kc-css-563395 kc_col-sm-12 kc_column_inner kc_col-sm-12 kc-pc-loaded">
                                        <div className="kc_wrapper kc-col-inner-container">
                                            <div className="kc-elm kc-css-710024 kc-feature-boxes kc-fb-layout-2">

                                                <Row>
                                                    <Col md='4'>
                                                        <div className="content-icon">
                                                            <FaTools />

                                                        </div>
                                                    </Col>
                                                    <Col md='8'>
                                                        <div className="box-right">
                                                            <div className="content-title">Աշխատանք</div>
                                                            <div className="content-desc">Որակյալ</div>
                                                        </div>
                                                    </Col >
                                                </Row>
                                            </div>
                                            <div className="kc-elm kc-css-233285 kc_text_block kc_text_block_b_2">
                                                <ul className="list-unstyled lists space-30">
                                                    <li><i
                                                        className="fa fa-check-circle text-primary"></i>Տեղադրում
                                                    </li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Հեռացում

                                                    </li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Մաքրում</li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Վերջնական տեսք</li>
                                                </ul>
                                                {/*<p><a className="text-primary" href="#">View more&nbsp;&nbsp;<i*/}
                                                {/*    className="fa fa-long-arrow-right"></i></a></p>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md='4' className="kc-elm kc-css-46166 kc_col-sm-4 kc_column kc_col-sm-4">
                            <div className="kc-col-container">
                                <div className="kc-elm kc-css-405696 kc_row kc_row_inner">
                                    <div
                                        className="kc-elm kc-css-228233 kc_col-sm-12 kc_column_inner kc_col-sm-12 kc-pc-loaded">
                                        <div className="kc_wrapper kc-col-inner-container">
                                            <div className="kc-elm kc-css-269527 kc-feature-boxes kc-fb-layout-1">

                                                <Row>
                                                    <Col md='4'>
                                                        <div className="content-icon">
                                                            <FaEdit />

                                                        </div>
                                                    </Col>
                                                    <Col md='8'>
                                                        <div className="box-right">
                                                            <div className="content-title">Արդյունք</div>
                                                            <div className="content-desc">Մանրամասն</div>
                                                        </div>
                                                    </Col >
                                                </Row>
                                            </div>
                                            <div className="kc-elm kc-css-316401 kc_text_block kc_text_block_b_3">
                                                <ul className="list-unstyled lists space-30">
                                                    <li><i className="fa fa-check-circle text-primary"></i>Աշխատանքի բնութագիր
                                                    </li>
                                                    <li><i
                                                        className="fa fa-check-circle text-primary"></i>Խնդիրների լուծումներ
                                                    </li>
                                                    <li><i
                                                        className="fa fa-check-circle text-primary"></i>Ազդեցությունների չեզոքացում
                                                    </li>
                                                    <li><i className="fa fa-check-circle text-primary"></i>Այլ աշխատանքներ</li>
                                                </ul>
                                                {/*<p><a className="text-primary" href="#">View more&nbsp;&nbsp;<i*/}
                                                {/*    className="fa fa-long-arrow-right"></i></a></p>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    );
}

export default Section1;