import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../component/Card';
import work from '../../data/work';

const MainPortfolio = () => {
    return (
        <div id="main_portfolio" className='mt-5'>
            <div className="text-center">
                <p className="title">Best Work</p>
            </div>
            <Container>
                <Row>
                    {
                        work.portfolio.map((dt) => {
                            return <Col className='mb-3' sm={4} key={dt.id}><Card subject={dt.subject_eng} title={dt.main_title} img={dt.sub_img} id={dt.id}/></Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MainPortfolio;