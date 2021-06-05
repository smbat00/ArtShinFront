import React from 'react';
// import hpb from './img/hbg.jpg'
import { Container, Row, Col } from 'reactstrap';
import section_2_back from './img/parallax.jpgbackground.jpg';
import manimg from './img/man-1.png'
import serviceimg from "./img/service-1.jpg";
const Section3 = () => {
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
                        <h2>Տանը <span>խնդիր</span> է <span>առաջացել</span></h2>
                        <p>Դիմեք մեզ և մեր վարպետները կլուծեն խնդիրը․․․</p>
                        <a href="#" className="thm-btn">ԶԱՆԳԱՀԱՐԵԼ</a>
                        <img src={manimg}  alt=""/>
                    </Col>
                </section>

            </Row>
        </Container>
    );
}


export default Section3;