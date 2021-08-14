import React from 'react'
import { Col,Row ,Button} from 'react-bootstrap'
import './Service.css';
import SEO from '../Assets/seo.svg';
import S2 from '../Assets/s2.svg';
import S3 from '../Assets/s3.svg';
import S4 from '../Assets/s4.svg';
import S5 from '../Assets/s5.svg';
export const Service = () => {
    return (
        <div className="service">
            <Row>
                
                <h1 className="title">Our Services</h1>
                
            </Row>
            <Row className="seo-image">
                <Col>
                    <img src={SEO} height="150px" width="150px" alt="Service1" />
                </Col>
                <Col>
                    <img src={S2} height="150px" width="150px" alt="Service2"/>
                </Col>
                <Col>
                <img src={S3} height="150px" width="150px" alt="Service3"/>
                </Col>
                <Col>
                <img src={S4} height="150px" width="150px" alt="Service4"/>
                </Col>
                <Col>
                <img src={S5} height="150px" width="150px" alt="Service5"/>
                </Col>
            </Row>
            <Row className="btn">
            <Button variant="info" className="service-btn">Info</Button>
            </Row>
        </div>
    )
}
