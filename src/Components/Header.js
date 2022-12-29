import React, { Component } from "react";
import Fade from "react-reveal";
import styled from "styled-components";
import Lab from "../assets/LabImg.jpg";

const Back = styled.img`
  width: 100%;
  height: 800px;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 0;
`;

class Header extends Component {
  render() {
    const name = "정연재 교수";
    const description =
      "안녕하세요, 정연재 교수입니다. 저의 홈페이지에 오신 것을 환영합니다";

    return (
      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Back src={Lab} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" style={{ zIndex: "1" }}>
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
