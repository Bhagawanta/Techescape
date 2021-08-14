import React from 'react'
import './Home.css';
import HomeImg from '../Assets/home.svg'
import { Col, Row } from 'react-bootstrap';
export const Home = () => {
    return (
        <div>
            {/* <div className="Home-back">
            <div className="Home">
                <div className="Home-title">TechEspace Technologies</div>
                <div className="Home-subtitle">We Make IT Happen</div>
                <div className="Home-image">
                <img src={HomeImg} height="400px" width="70%"/>
                </div>
            </div>    
            </div> */}
            <Col className="Home-back">
                <Row className="Home">
                    <h1 className="Home-title">TechEspace Technologies</h1><br/>
                    <h6 className="Home-subtitle">We Make IT Happen</h6>
                </Row>
                <Row className="Home-image">
                <img src={HomeImg} height="350px" width="70%" alt="Home Logo"/>
                </Row>
            </Col>
        </div>
    )
}
