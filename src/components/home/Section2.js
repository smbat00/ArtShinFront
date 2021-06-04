import React from 'react';
// import hpb from './img/hbg.jpg'
import { Container, Row, Col } from 'reactstrap';
import section_2_back from './img/parallax.jpgbackground.jpg';
import manimg from './img/man-1.png'
import serviceimg from "./img/service-1.jpg";
const Section2 = () => {
    const section2 = {
        color:'#00653b',
            backgroundImage: 'URL('+section_2_back+')',
            backgroundRepeat: 'norepeat',
            backgroundSize:'cover',
            backgroundPosition: 'center',
            height: '450px',
            paddingBottom:'250px',

    }
    const section2Container = {
        paddingTop: '111px',
        paddingBottom: '111px',
    }
    return (
        <Container fluid style={section2Container}>

            <Row>

                <section className="cta-section">
                                <Col md='12'>
                                    <h2>Do You Need <span>Help</span> From <span>Aventex?</span></h2>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                    <a href="#" className="thm-btn">contact now</a>
                                    <img src={manimg}  alt=""/>
                                </Col>
                </section>

            </Row>
        </Container>
    );
}


export default Section2;