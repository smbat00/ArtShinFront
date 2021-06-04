import React from "react";
import { useState } from "react";
// import "./styles.css";


import CircleCss from './circle.module.css'
import {Col, Container, Row} from "reactstrap";
import hpb from "./img/hbg.jpg";
const Circle = () => {
    const HoverMenu = {
        paddingTop: '35px',
        paddingBottom: '35px'
    }

    return (
        <Container>
            <Row style={HoverMenu}>
                <Col xs="12" sm='12' md='12' >
                    <Row>
                        <Col xs="3" sm='12' md='3' >
                            <div  className={CircleCss.circleCow}>

                            </div>
                        </Col>
                        <Col xs="3" sm='12' md='3' >
                            <div  className={CircleCss.circlePig}>

                            </div>
                        </Col>
                        <Col xs="3" sm='12' md='3' >
                            <div  className={CircleCss.circleHen}>

                            </div>
                        </Col>
                        <Col xs="3" sm='12' md='3' >
                            <div  className={CircleCss.circleFish}>

                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Circle;


// <div className="circle_outline__3Gw-s"
//      style="border-color: rgb(255, 170, 0); transform: translate3d(0px, 0px, 0px) scale(1, 1); transform-origin: 50% 50% 0px;"></div>
// position: absolute;
// top: -20px;
// left: -20px;
// right: -20px;
// bottom: -20px;
// border: 10px solid white;
// border-radius: 50%;