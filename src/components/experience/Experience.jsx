import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt';
import EXPERIENCE_IMAGE from '../../images/experience/accenture-3.svg';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


import '../experience/experience.styles.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3 title">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container className="experience-container">
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={EXPERIENCE_IMAGE} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">UI-UX DESIGNER</Card.Title>
                                </div>

                                <div>
                                    <Card.Text className="text-center style">
                                        {/* <strong className="body-title-style ">UiUx Designer</strong> */}
                                        <br />
                                        <strong>Technology:</strong> Figma
                                            <br />
                                        <strong>Duration:</strong> April 2021 - Present
                                            <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Gather &amp; evaluate</strong> user requirements in collaboration with product managers and engineers.</li>
                                            <li><strong>Design graphic user interface</strong> elements, like menus, tabs and widgets.
                                                Build page navigation buttons and search fields
                                            </li>
                                            <li><strong>Develop UI mockups and prototypes</strong> that clearly illustrate how sites function and look like.</li>
                                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                                        </ul>


                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>

                <Container className="experience-container">
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={EXPERIENCE_IMAGE} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">FRONTEND WEB-DEVELOPER</Card.Title>
                                </div>

                                <div>
                                    <Card.Text className="text-center style">
                                        {/* <strong className="body-title-style ">UiUx Designer</strong> */}
                                        <br />
                                        <strong>Technology:</strong> React JS
                                            <br />
                                        <strong>Duration:</strong> April 2021 - Present
                                            <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Develop &amp; evaluate</strong> new user-facing multiple features with customizability option across web application.</li>
                                            <li>Ensure the technical feasibility of UI/UX designs</li>
                                            <li>Develop features to enhance the user experience.</li>
                                            <li>Strike a balance between functional and aesthetic design.</li>
                                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                                        </ul>


                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;
