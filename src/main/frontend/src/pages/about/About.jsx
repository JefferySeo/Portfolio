import React from 'react';
import './about.css';
import { Row, Container, Col } from 'react-bootstrap';
import {FaAngleRight} from 'react-icons/fa';

const About = () => {
    return (
        <div className='about_me'>
            <div className="text-center">
                <p className="title">About Me</p>
            </div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <img className='profile' src="../../images/profile.png" alt="profileImg" />
                        <div className="intro">
                            <p><FaAngleRight/>Name : 서택상</p>
                            <p><FaAngleRight/>Eng_name : Jeffery Seo</p>
                            <p><FaAngleRight/>Birth : 1994.07.25</p>
                        </div>
                        <div className="contour3" />
                        <h1>개발지식과 더불어<br/> 다양한 경험들을 활용하는<br/>창의적인 개발자가<br/>되겠습니다!</h1>
                    </Col>
                    <Col sm={6}>
                        <div className="contour3" />
                        <div className="intro">
                            &nbsp;가톨릭대학교 성심교정에서 정보통신전자공학부를 전공하며 정보통신기술 및 하드웨어의 전반적인 기초지식을 습득했고, 이젠아카데미컴퓨터학원의 Java 기반 풀스택 웹 개발자 과정을 수료하였습니다.<br/>
                            &nbsp;학원 수강 당시, 팀 프로젝트로 디자인팀, 프론트엔드, 백엔드 파트로 구성된 Team EzenCinema의 프로젝트 매니저 역할을 수행하며 각 파트의 전반적인 역할 분배와 일정 등을 조율하였고, 전체 프로젝트 설계 및 데이터베이스, 영화 예매시스템을 설계하였습니다.<br/>
                            &nbsp;개발 당시 사용자 중심의 설계에만 치중되어 있는 결과물에 의문을 가지게 되었고, 이러한 의문을 해결하기 위해 공급기업의 입장을 고려한 관리자 페이지 개발에 대한 아이디어를 제시하는 등 개발자로써, 프로젝트 기획자로써 넓은 시야를 갖추고자 노력하였습니다.
                        </div>
                        <div className="intro">
                            <h3>공백기엔 무엇을 했나요?</h3>
                            1. 빅터시스템 경호사업부에서 경호팀장으로써 경호 및 행사 입찰제안, 프레젠테이션 등 프로젝트 진행에 대한 전반적인 지식을 쌓았습니다.<br/>
                            2. 한국능률협회, (주)어빌리티랩, (주)엠에이알케이 등의 대학 컨설팅 업체에서 컨설팅 프로그램 운영 업무를 하며 협업에 대한 경험을 했습니다.
                        </div>
                    </Col>
                </Row>
                <Row className='career mt-5'>
                    <div className="text-center">
                        <p className="title">Career / Experience</p>
                    </div>
                    <Col sm={12}>
                        <h2 className='mb-2'>Education</h2>
                        <p className="career_content">[스마트웹&콘텐츠개발]풀스택 자바웹개발자 양성과정 <span className="date">2023.01~2023.07</span></p>
                        <p className="career_content">가톨릭대학교 성심교정 정보통신전자공학부 <span className='date'>2013.03 ~ 2020.02</span></p>
                        <p className="career_content">풍무고등학교 <span className='date'>2010.03~2013.02</span></p>
                        <h2 className='mt-4 mb-2'>Career</h2>
                        <p className="career_content">(주)빅터시스템 경호사업부 팀장 <span className="date">2017.06~2023.01</span></p>
                        <p className="career_content">고등직업교육거점지구(HiVE)사업 Local Innovation Project <span className="date">2022.12~2023.01</span></p>
                        <p className="career_content">부울경 전문대학 혁신지원사업 발전 협의회(ICK 부울경) 공동 프로그램 <span className="date">2019.06~2021.12</span></p>
                        <p className="career_content">세계적 수준의 전문대학 (WCC : World Class Colleage) GET 올레 프로젝트 <span className="date">2018.12~2019.12</span></p>
                        <h2 className='mt-4 mb-2'>Experience</h2>
                        <p className="career_content">2018학년도 중앙 새내기배움터 기획단 안전보안국장 <span className="date">2017.12~2018.02</span></p>
                        <p className="career_content">사단복지법인 계영복지재단 아름드리 청소년 야구단 멘토링 <span className="date">2017.02~2017.12</span></p>
                        <p className="career_content">가톨릭대학교 중앙야구동아리 텀블러즈 회장 <span className="date">2016.08~2017.12</span></p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default About;