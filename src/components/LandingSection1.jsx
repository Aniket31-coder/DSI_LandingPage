import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import Person_responsive from '../assets/person_responsive.png';

function LandingSection1() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} className="d-block d-lg-none">
                    <img src={Person_responsive} alt="" className="mt-5 w-100"/>
                    </Col>
                    <Col className="mt-lg-5">
                    <div className="main text-center text-lg-start">
                        <h3 className="mt-5 fw-bold">Making the most of the ever-growing <span className="text-danger">Information Technology</span></h3>
                        <p className="pt-3 pb-2 fs-5">Managed by a team of professional experts with extensive experience and impressive track records</p>
                        <Button variant="danger" className="readmore">Read More</Button>
                    </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                    <img src={Person_responsive} alt="" className="mt-5 w-auto"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingSection1;
