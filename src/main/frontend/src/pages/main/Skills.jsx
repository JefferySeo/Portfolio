import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import styled from 'styled-components';

import skill from '../../data/skill';

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
                        {
                            skill.backEnd.map((dt) => {
                                return <Skill key={dt.id}>{dt.content}</Skill>
                            })
                        }
                    </Col>
                    <Col sm={4}>
                        <h1>Front-end</h1>
                        {
                            skill.frontEnd.map((dt) => {
                                return <Skill key={dt.id}>{dt.content}</Skill>
                            })
                        }
                    </Col>
                    <Col sm={4}>
                        <h1>Database</h1>
                        {
                            skill.database.map((dt) => {
                                return <Skill key={dt.id}>{dt.content}</Skill>
                            })
                        }
                    </Col>
                    <Col sm={4}>
                        <h1>Server</h1>
                        {
                            skill.server.map((dt) => {
                                return <Skill key={dt.id}>{dt.content}</Skill>
                            })
                        }
                    </Col>
                    <Col sm={4}>
                        <h1>Tools</h1>
                        {
                            skill.tools.map((dt) => {
                                return <Skill key={dt.id}>{dt.content}</Skill>
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;