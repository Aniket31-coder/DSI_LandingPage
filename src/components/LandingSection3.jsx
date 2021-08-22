import React from 'react';
import {Container, Row, Card, CardGroup, Button } from 'react-bootstrap';
import Our_Product from '../assets/our_product.png';
import Our_Service from '../assets/our_service.png';
import Our_Technology from '../assets/our_technology.png';

function LandingSection3() {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <h3 className="text-center mt-5">Products And Services</h3>
                </Row>
                <Row>
                    <CardGroup className="ps-lg-5 text-center text-lg-start">
                        <Card className="mt-5 our_card" style={{border: "none"}}>
                            <Card.Img variant="top" src={Our_Product} className="w-25 mb-2"/>
                            <Card.Body>
                            <Card.Title className="fs-4 text-danger mb-3">Our Product</Card.Title>
                            <Card.Text className="w-100">
                            Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                            </Card.Text>
                            </Card.Body>
                            <Button variant="danger" className="ms-lg-3 readmore">Read More</Button>
                        </Card>

                        <Card className="mt-5 our_card" style={{border: "none"}}>
                            <Card.Img variant="top" src={Our_Service} className="w-25 mb-3"/>
                            <Card.Body>
                            <Card.Title className="fs-4 text-danger mb-3">Our Service</Card.Title>
                            <Card.Text className="w-100">
                            DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                            </Card.Text>
                            </Card.Body>
                            <Button variant="danger" className="ms-lg-3 readmore">Read More</Button>
                        </Card>

                        <Card className="mt-5 our_card" style={{border: "none"}}>
                            <Card.Img variant="top" src={Our_Technology} className="w-25"/>
                            <Card.Body>
                            <Card.Title className="fs-4 text-danger mb-3">Our Technology</Card.Title>
                            <Card.Text className="w-100">
                            First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.
                            </Card.Text>
                            </Card.Body>
                            <Button variant="danger" className="ms-lg-3 readmore">Read More</Button>
                        </Card>
                    </CardGroup>
                </Row>
          </Container>  
        </div>
    )
}

export default LandingSection3;
