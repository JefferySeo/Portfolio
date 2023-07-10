import React from 'react';
import './portfolio.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import work from '../../data/work';
import { useParams } from 'react-router-dom';

const PortfolioBox = styled.div`
    padding-top:100px;
`
const Port = styled.div`
    width: 100%;
    height:60vh;
    overflow-y: scroll;
    margin-bottom: 3rem;
    &>img{
        width:100%;
    }
`

const Left = styled.div`
    font-size:1.5rem;
    font-weight:500;
`;

const Contents = styled.div`
    font-size:1.2rem;
    margin-top:1rem;
`
const Right = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #444;
`


const Portfolio = () => {
    let { id } = useParams();

    console.log(id);
    
    const port = work.portfolio
    .filter((item) => item.id === id)
    .map((item) => (
        <PortfolioBox key={item.id}>
            <div className="text-center">
                <p className="title">{item.main_title}</p>
            </div>
            <Container>
                <Port>
                <img src={item.main_img} alt={item.main_title} />
                </Port>

                <Row>
                <Col sm={6}>
                    <hr className="contour2" />
                    <Left>
                    {item.left_story}
                    
                    <Contents>
                        <hr className="contour2" />
                        프로젝트 유형: {item.category}
                        <br />
                        프로젝트 주제: {item.subject}
                        <br />
                        기술 스택: {item.skills}
                    </Contents>
                    </Left>
                </Col>
                <Col sm={6}>
                    <hr className="contour2" />
                    <Right>
                    <h4>Story</h4>
                    {item.right_story}
                    <Contents>
                        <hr className="contour2" />
                        <h4>My Role</h4>
                        수행 분야: {item.field}
                        <br />
                        수행 내용: {item.contents}
                        {
                            item.domain !== "" ? 
                            <Button className="me-2" target="_blank" href={item.domain} variant="outline-dark">
                                도메인 이동
                            </Button> 
                            : ""
                        }
                        
                        <Button target="_blank" href={item.git} variant="outline-dark">
                            깃허브 이동
                        </Button>
                    </Contents>
                    </Right>
                </Col>
                </Row>
            </Container>
        </PortfolioBox>
    ));
    return (
        
        <>
            {port}
        </>

    );
};

export default Portfolio;