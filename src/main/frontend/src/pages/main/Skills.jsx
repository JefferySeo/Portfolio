import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {FaJava, FaReact, FaAws, FaDocker, FaGithub} from 'react-icons/fa';
import {SiSpring, SiUbuntu, SiApachetomcat, SiVisualstudiocode, SiEclipseide, SiNginx, SiMysql, SiOracle, SiSpringboot, SiJavascript, SiJquery, SiBootstrap, SiApachecordova} from 'react-icons/si';
import {AiOutlineHtml5, AiOutlineAndroid} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';

const Skill = styled.div`
    display:inline-block;
    font-size:1.1rem;
    border: 1px solid #ccc;
    padding: 0.3rem 0.8rem;
    margin-right:0.5rem;
    border-radius: 0.5rem;
    cursor:pointer;
    margin-top:0.3rem;
`

const Skills = () => {
    return (
        <div id="skills">
            <div className="text-center">
                <p className="title">Skills</p>
            </div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <h1>Back-end</h1>
                        <Skill>
                            <FaJava/> Java
                        </Skill>
                        <Skill>
                            <SiSpring/> Spring
                        </Skill>
                        <Skill>
                            <SiSpringboot/> Springboot
                        </Skill>
                    </Col>
                    <Col sm={4}>
                        <h1>Front-end</h1>
                        <Skill>
                            <FaReact/> React
                        </Skill>
                        <Skill>
                            <AiOutlineHtml5/> HTML5
                        </Skill>
                        <Skill>
                            <TbBrandCss3/> CSS3
                        </Skill>
                        <Skill>
                            <SiJavascript/> JavaScript
                        </Skill>
                        <Skill>
                            <SiJquery/> jQuery
                        </Skill>
                        <Skill>
                            <SiBootstrap/> Bootstrap
                        </Skill>
                        <Skill>
                            <AiOutlineAndroid/> Android Studio
                        </Skill>
                        <Skill>
                            <SiApachecordova/> Apache Cordova
                        </Skill>
                    </Col>
                    <Col sm={4}>
                        <h1>Database</h1>
                        <Skill>
                            <SiMysql/> MySQL
                        </Skill>
                        <Skill>
                            <SiOracle/> Oracle DB
                        </Skill>
                    </Col>
                    <Col sm={4}>
                        <h1>Server</h1>
                        <Skill>
                            <FaAws/> Amazon AWS
                        </Skill>
                        <Skill>
                            <SiOracle/> Oracle Cloud
                        </Skill>
                        <Skill>
                            <SiUbuntu/> Ubuntu
                        </Skill>
                        <Skill>
                            <FaDocker/> Docker
                        </Skill>
                        <Skill>
                            <SiNginx/> NginX
                        </Skill>
                    </Col>
                    <Col sm={4}>
                        <h1>Tools</h1>
                        <Skill>
                            <SiEclipseide/> Eclipse IDE
                        </Skill>
                        <Skill>
                            <SiSpring/> Spring Tool Suite
                        </Skill>
                        <Skill>
                            <SiVisualstudiocode/> Visual Studio Code
                        </Skill>
                        <Skill>
                            <SiApachetomcat/> Apache Tomcat
                        </Skill>
                        <Skill>
                            <FaGithub/> Github
                        </Skill>
                        <Skill>
                            <SiNginx/> NginX Proxy Manager
                        </Skill>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;