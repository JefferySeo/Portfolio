import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../component/Card';

const MainPortfolio = () => {
    return (
        <div id="main_portfolio" className='mt-5'>
            <div className="text-center">
                <p className="title">Best Work</p>
            </div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <Card/>
                    </Col>
                    <Col sm={4}>
                        <Card/>
                    </Col>
                    <Col sm={4}>
                        <Card/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainPortfolio;