import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";


//projects logo
import PORTFOLIO from '../../images/projects/project3.png';
import E_COMMERCE from '../../images/projects/project6.png';
import FOOD_APP from '../../images/projects/project1.png';
import MEAL_RECIPE from '../../images/projects/project5.png';
import RESTAURANT_SITE from '../../images/projects/project2.png';
import LOUDIT_APP from '../../images/projects/project9.png';
import DELIVERY_APP from '../../images/projects/project7.png';
import CARSINFO_APP from '../../images/projects/project8.png';


//skills logo import
import HTML5_LOGO from '../../images/skills/html-5.svg';
import BOOTSTRAP_LOGO from '../../images/skills/bootstrap-4.svg';
import CSS3_LOGO from '../../images/skills/css3.svg';
import FIGMA_LOGO from '../../images/skills/figma-1.svg';
import GIT_LOGO from '../../images/skills/git-icon.svg';
import GITHUB_PAGES_LOGO from '../../images/skills/github.svg';
import HEROKU_LOGO from '../../images/skills/heroku.svg';
import JAVASCRIPT_LOGO from '../../images/skills/javascript.svg';
import MATERIALUI_LOGO from '../../images/skills/material-ui-1.svg';
import REACT_BOOTSTRAP_LOGO from '../../images/skills/react-bootstrap.svg';
import REACT_ROUTER_LOGO from '../../images/skills/react-router.svg';
import REACT_LOGO from '../../images/skills/react.svg';
import SASS_LOGO from '../../images/skills/sass-1.svg';
import STYLED_COMPONENTS_LOGO from '../../images/skills/styled-components.svg';


//bootstrap imports
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";



//style link
import '../projects/project.styles.css';

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* E-Commerce Site */}
                    <ImageEvent
                        date="01/03/2021"
                        className="text-center"
                        text="E Commerce Site"
                        src={E_COMMERCE}
                        alt="E Commerce Site"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an e-commerce site built with HTML CSS JavaScript and Bootstrap
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Check all available products</li>
                                                    <li>Add product(s) to cart</li>
                                                    <li>See product available in cart</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3_LOGO}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={JAVASCRIPT_LOGO}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={BOOTSTRAP_LOGO}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Loud it Mobile App Design */}
                    <ImageEvent
                        date="15/02/2021"
                        className="text-center"
                        text="E Commerce Mobile App (LOUDIT)"
                        src={LOUDIT_APP}
                        alt="E Commerce Mobile App (LOUDIT)"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an e-commerce Mobile app ui design.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>User (Buyer and Seller) Login and Registeration</li>
                                                    <li>User profile Update</li>
                                                    <li>Product Payment</li>
                                                    <li>Product Review</li>
                                                    <li>Product Search</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={FIGMA_LOGO}
                                                                alt="FIGMA"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            FIGMA
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={MATERIALUI_LOGO}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MaterialUI Icons
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>



                    {/* Meal Recipe App */}
                    <ImageEvent
                        date="23/03/2021"
                        className="text-center"
                        text="Meal Recipe App"
                        src={MEAL_RECIPE}
                        alt="Meal Recipe App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a meal recipe web app built with HTML CSS-Modules and React
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Search for meal to get recipe</li>
                                                    <li>Gives 10 recipes for every meal search</li>
                                                    <li>Shows images for each meal recipe</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3_LOGO}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT_LOGO}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Super Cars Mobile App Design */}
                    <ImageEvent
                        date="10/02/2021"
                        className="text-center"
                        text="Super Cars mobile app ui design"
                        src={CARSINFO_APP}
                        alt="Super Cars mobile app ui design"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a super car info Mobile app ui design.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>User Login and Registeration</li>
                                                    <li>Sort Cars base on category</li>
                                                    <li>Get info on Selected car type</li>
                                                    <li>Share info across social medium  platforms</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={FIGMA_LOGO}
                                                                alt="FIGMA"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            FIGMA
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Restaurant Site */}
                    <ImageEvent
                        date="20/03/2021"
                        className="text-center"
                        text="Restaurant Website"
                        src={RESTAURANT_SITE}
                        alt="Restaurant Website"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a restaurant website built with HTML CSS and JavaScript
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>See available meal</li>
                                                    <li>Search for food according to meal type</li>
                                                    <li>Book reservation</li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3_LOGO}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={JAVASCRIPT_LOGO}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Yummy Food Delivery App Design */}
                    <ImageEvent
                        date="07/01/2021"
                        className="text-center"
                        text="Food Delivery App (YummyFood)"
                        src={DELIVERY_APP}
                        alt="Food Delivery App (YummyFood)"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is Food delivery app UI Design.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>User Login and Registeration</li>
                                                    <li>Meal search</li>
                                                    <li>Meal delivery</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={FIGMA_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            FIGMA
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={MATERIALUI_LOGO}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            MaterialUI Icons
                                                        </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* portfolio page */}
                    <ImageEvent
                        date="07/04/2021"
                        className="text-center"
                        text="My Portfolio Page"
                        src={PORTFOLIO}
                        alt="My Portfolio Page"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is my portfolio page, showcasing my skills, workdone, experiences and about information.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>About me</li>
                                                    <li>My experiences</li>
                                                    <li>My skills</li>
                                                    <li>My Work done</li>
                                                    <li>My contact information</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={BOOTSTRAP_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={REACT_BOOTSTRAP_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            React Bootstrap
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Food Web App */}
                    <ImageEvent
                        date="10/01/2021"
                        className="text-center"
                        text="YummyFood Web App"
                        src={FOOD_APP}
                        alt="YummyFood Web App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a food web app showcasing different food menu and price tag.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Food menu</li>
                                                    <li>Services</li>
                                                    <li>About Information</li>
                                                    <li>Contact information</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={HTML5_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            HTML
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={CSS3_LOGO}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={BOOTSTRAP_LOGO}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={JAVASCRIPT_LOGO}
                                                                alt="JavaScript"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                            JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>

        </div>
    )
}

export default Projects
