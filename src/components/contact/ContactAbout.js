import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Circle from "../home/Circle";
import ContactForm from "./ContactForm";
// import Mymap from "./Mymap";
const AboutContact = () => {

const forms = {
    padding: '50px 10px'
}
const infoforms = {
    backgroundColor: 'rgb(10 20 20 / 86%)',
    padding: '30px',
    height: '520px'
}
const textmystyles = {
    color: 'rgb(222 222 222)',

    }
const contextmystyles = {
    color: 'rgb(222 222 222)',
    marginTop: '34px',

}
    return (

    <Container>
        <Row>
            <Col xs="12" sm='12' md='12' >
                <Row>
                    <Col xs="6" sm='12' md='6' style={forms}>
                        <div style={infoforms}>
                            <h2 style={textmystyles}>We love local marketing</h2>
                            <p style={contextmystyles}>We're a group of dedicated, passionate local marketing experts building powerful software to help your agency and business succeed. We're a group of dedicated, passionate local marketing experts building powerful software to help your agency and business succeed. We're a group of dedicated, passionate local marketing experts building powerful software to help your agency and business succeed. We're a group of dedicated, passionate local marketing experts building powerful software to help your agency and business succeed.</p>

                        </div>
                          </Col>
                    <Col xs="6" sm='12' md='6' style={forms}>
                       <ContactForm/>
                    </Col>
                </Row>
             </Col>
        </Row>
    </Container>
        );
}


export default AboutContact;