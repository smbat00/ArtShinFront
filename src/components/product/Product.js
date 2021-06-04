import React from 'react';
import SingleProduct from "./SingleProduct";
import {Col, Container, Row} from "reactstrap";

const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <p>About US page body content</p>
            <Container>
                <Row>
                    <Col xs="12" sm='12' md='12' >
                        <Row>
                            <Col xs="12" sm='12' md='12' >
                                <SingleProduct/>
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Product;