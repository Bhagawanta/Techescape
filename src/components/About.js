import React from 'react'
import "./About.css"
import AboutImg from '../Assets/aboutimg.svg'
import { Col, Container, Row } from 'react-bootstrap'
export const About = () => {
    return (
        <div>
            <div className="About">
                {/* <div className="info">
                <div className="About-logo">
                 <img src={AboutImg} height="500px" width="500px"/>
                </div>    
                <div className="About-info">
                 <h1 className="about-title">About us</h1>
                 <div className="right">
                 <p>
                 We provide comprehensive IT management and consulting services to organizations around the world. 
                 We remove the IT burden from your plate and stabilize your IT environment to keep downtime and interruptions to a minimum. Don’t let the pressure and burden of IT keep you from reaching your goals.
                  At TechEspace, we take a look at IT decisions and address technical issues before they affect your business
                 </p>
                 </div>
                </div>    
                </div> */}
                <Container>
                    <Row>
                        <Col>
                        <img src={AboutImg} height="500px" width="400px" alt="About"/>
                        </Col>
                        <Col>
                            <Row className="title">
                            <h1>About us</h1>
                            </Row>
                            <Row className="paragraph">
                            <p>
                            We provide comprehensive IT management and consulting services to organizations around the world. 
                 We remove the IT burden from your plate and stabilize your IT environment to keep downtime and interruptions to a minimum. Don’t let the pressure and burden of IT keep you from reaching your goals.
                  At TechEspace, we take a look at IT decisions and address technical issues before they affect your business.
                   
                            </p>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                </div>
        </div>
    )
}
