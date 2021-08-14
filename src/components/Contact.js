import React from 'react'
import { Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import ContactSvg from '../Assets/contact.svg';
import './Contact.css'
export const Contact = () => {
    return (
        <div>
            <Row className="page">
                <Col sm={8} className="contact-page">
                    
                    <Row className="title">
                        <h1>Contact us</h1>
                    </Row>
                    
                    <Row className="title-input">
                        <span>Name</span>
                    </Row>
                    <Row className="contact-input">
                        <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        </Col>
                        <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        </Col>
                    </Row>
                    <Row className="input-label">
                        <Col className="first-label">
                        First
                        </Col>
                        <Col>
                        Last
                        </Col>
                    </Row>
                    <br/>
                    <Row className="email-input">
                        <span>Email</span>
                    </Row>
                    <Row>
                    <InputGroup className="mb-3">
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>
                    <br/>
                    <Row className="message-input">
                        <span>Comment or Message</span>
                    </Row>
                    <Row>
                    <InputGroup className="mb-3" style={{height:"100px"}}>
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Row>
                    <Row className="btn-submit">
                    <Button variant="info" className="service-btn">Submit</Button>
                    </Row>
                    
                </Col>
                <Col sm={4}>
                    <img src={ContactSvg} height="720px" width="300px" alt="Contact"></img>
                </Col>
            </Row>
        </div>
    )
}
