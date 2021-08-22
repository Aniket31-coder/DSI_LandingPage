import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import DSI_logo from '../assets/logo.png';
import Companies from '../assets/companies.png';

function Contact() {
    return (
        <div>
            <Container>
                <Row className="mt-5 ms-lg-5">
                    <Col>
                        <div className="mt-lg-5">
                        <img src={DSI_logo} alt="logo"/>
                        <p className="fw-bold pt-2" style={{marginBottom: "0.5rem"}}>PT Dwidasa Samsara Indonesia</p>
                        <div> 
                            Ruko Jalur Sutera 29A No. 53
                            <br />
                            Alam Sutera Serpong, Tangerang 15323
                        </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="mt-lg-5 ms-lg-5">
                        <div className="fs-5 fw-bold pt-3">Contact</div>
                        <div className="pt-3">
                            Phone : +62.21.5314.1135
                            <br />
                            Fax : +62.21.5314.1135
                            <br />
                            Email : community@dwidasa.com
                        </div>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={6}>
                        <div className="my-5">
                        <img src={Companies} alt="" className="company pt-lg-3 ps-lg-3"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
