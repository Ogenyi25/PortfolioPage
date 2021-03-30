import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <div className="greeting">Hello There!</div>
                <div className="name">My name is <span>OTOR JOHN STEPHEN</span> I'm a</div>
                <Typed
                    className="typed-text"
                    strings={["Web Designer", "Frontend Web Developer", "Content Writer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
