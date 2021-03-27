import React from 'react';


//components
import UserImage from '../../images/user.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import '../about/about.styles.css';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* profile pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" src={UserImage} thumbnail fluid />
                            </Row>
                        </Col>

                        {/* about me description */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                {/* description */}
                                Hi there! I am <strong>&nbsp;Otor John Stephen</strong>
                                <br />A passionate web designer, programmer and a Content writer, born and brought up in Nigeria. I am a Frontend Web Developer with knowledge of HTML, CSS, SCSS, JavaScript and React.js.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />
                            </Row>
                            {/* buttons */}
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://drive.google.com/file/d/1Snbq3x4Itk_ZN4c8J96aNdp4SunXR08Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://github.com/akjha96" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
