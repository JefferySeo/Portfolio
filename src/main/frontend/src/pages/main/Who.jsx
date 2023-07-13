import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


const About = () => {
    return (
        <div id="who">
            <div className="text-center">
                <p className="title">Who is TaekSang?</p>
            </div>
            
            <Container>

                <Row>
                    <Col sm={6}>
                        <div className="photo">
                            <img src="../../images/about/about-01.png" alt="about01" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="content">
                            <h3>두려움 없는 개발자</h3>
                            <h2>배움에 대한 열정</h2>
                            <hr className="contour2" />
                            <p>무엇인가를 해결하는것을 좋아합니다.</p>
                            <p>누군가에게 질문하는것에 두려움이 없고 제가 해야할 일에 대한 목적을 잊지 않습니다.</p>
                            <p>끊임없이 배우고 해결하는 과정을 거치는 개발공부가 즐겁습니다!</p>
                        </div>
                    </Col>
                </Row>
                <Row className="reverse">
                    <Col sm={6}>
                        <div className="content">
                            <h3>다양한 경험과 지식</h3>
                            <h2>풍부한 커뮤니케이션 능력</h2>
                            <hr className="contour2" />
                            <p>정보통신전자공학부 심화전공, 정보통신 및 하드웨어에 대한 기본 지식을 보유하고 있습니다.</p>
                            <p>경호업체 팀장출신으로써 강한 책임감과 리더십, 유연한 상황대처능력을 가졌습니다.</p>
                            <p>한국능률협회 등의 대학 컨설팅 프로그램 운영에 참여하며 협업에 대한 필요성과 효과적인 협업 방식에 대한 지식을 습득했습니다.</p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="photo">
                            <img src="../../images/about/about-02.png" alt="about01" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <div className="photo">
                            <img src="../../images/about/about-03.png" alt="about01" />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="content">
                            <h3>함께 하는것에 대한 즐거움</h3>
                            <h2>경쟁보다는 협력</h2>
                            <hr className="contour2" />
                            <p>혼자서 해결하기보다는 누군가와 함께 해결하는것을 좋아합니다.</p>
                            <p>제가 아는것에 대해 남들과 공유하는것에 부담보다는 즐거움을 느낍니다.</p>
                            <p>오지랖이 넓습니다🤦‍♂️</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;