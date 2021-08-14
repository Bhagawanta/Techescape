import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Logo from '../Assets/Group 1284.png';
import FB from '../Assets/fb.svg';
import Insta from '../Assets/insta.svg';
import Linkd from '../Assets/link.svg';
import './Footer.css';
export const Footer = () => {
    return (
        <div>
            <Row className="Footer-page">
                <Col sm={4}>
                    <Row className="ft-logo">
                        <img src={Logo} height="80px" width="30px" alt='Home Logo'></img>
                    </Row>
                    <Row className="ft-icons">
                        <Col>
                        <img src={FB} height="80px" width="80px" alt="Fb Logo"/>
                        </Col>
                        <Col>
                        <img src={Insta} height="80px" width="80px" alt="Insta Logo"/>
                        </Col>
                        <Col>
                        <img src={Linkd} height="80px" width="80px" alt="Linkd Logo"/>
                        </Col>
                    </Row>
                </Col>
                {/* <div className="mid-col"></div> */}
                <Col sm={4} >
                    <Row className="info">
                    <h2>Privacy Policy</h2>
                    </Row>
                    <Row className="info para">
                    <p>
                    We provide comprehensive IT management and consulting services to organizations around the world. We remove the IT burden from your plate and stabilize your IT environment to keep.
                    </p>
                    </Row>
                </Col>
                <Col sm={4} className="nav-info">
                 <Col>
                    <h3>HOME</h3>
                 </Col>
                 <Col>
                    <h3>SERVICES</h3>
                 </Col>
                </Col>
            </Row>
        </div>
    )
}
