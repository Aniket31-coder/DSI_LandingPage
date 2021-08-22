import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Person_working from '../assets/person_working.png';

function LandingSection2() {
    return (
        <div className="mt-5 pb-5"  style={{backgroundColor: "#F6F6F6"}}>
            <Container>
                <Row>
                    <Col xs={12} lg={7} xl={6}>
                        <img src={Person_working} alt="" className="personworking mt-5 w-auto ps-xl-5"/>
                    </Col>
                    <Col>
                        <h3 className="mt-5 text-center text-lg-start" style={{fontSize: "2.3rem"}}>Welcome to <span className="text-danger">Dwidasa Samsara Indonesia (DSI)</span></h3>
                        <div className="pe-lg-5">
                        <p className="pt-3 fs-5">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="text-danger">DSI</span>’s distinct front-end based application concept.
                        </p>
                        <p className="fs-5">Managed by a team of professional experts with extensive experience and impressive track records, <span className="text-danger">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingSection2;
