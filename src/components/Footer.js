import React from 'react';
import {Col, Container, Row} from "reactstrap";
// eslint-disable-next-line no-unused-vars
import { Parallax, Background } from "react-parallax";
import footerbg from './footerbg.jpg';
const Footer = () => {
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };
    const image1 = footerbg;

    return (
        <Container fluid>

            <Row>

                <Col xs="12" >
                    <div style={styles}>
                        {/*<Hello name="Parallax" />*/}
                        <Parallax bgImage={image1} strength={500}>
                            <Row>
                            <Col xs="3" >
                            </Col>
                            <Col xs="6" >
                                <div style={{ height: 500, textAlign:"center", marginTop: '50px',fontSize: '22px', color: '#fff' }}>
                                    Russia HQ – 12 Sedova St., City of Millerovo, Millerovskiy District, Rostov Region, 346130, Russia
                                    Singapore – 10 Collyer Quay #10-01, Singapore 049315
                                    © Don Agro 2020
                                </div>
                            </Col>

                            <Col xs="3" >
                            </Col>
                                </Row>
                        </Parallax>

                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Footer;