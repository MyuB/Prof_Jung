import React, { Component } from "react";
import Fade from "react-reveal";
import styled from "styled-components";
import Lab from "../assets/LabImg.jpg";
import "../App.css";

const Name = styled.p`
  color: white;
  font-size: 75px;
  line-height: 75px;
  font-family: "NanumSquareE";
  letter-spacing: 10px;
`;

const Eng = styled.p`
  color: white;
  font-size: 25px;
  line-height: 25px;
  font-family: "NanumSquareE";
`;

// const Description = styled.p`
//   color: white;
//   font-size: 38px;
//   font-family: "NanumSquareB";
//   margin-top: 6rem;
// `;

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
    const name = "정연재 ";
    const eng = "Yeonjae Jeong, Ph.D.";
    // const description = "Telos horan";

    return (
      <header id="home">
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
                Details
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Research
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" style={{ zIndex: "1" }}>
          <div className="banner-text">
            <Fade bottom>
              <Name>{name}</Name>
              <Eng>{eng}</Eng>
            </Fade>
            <Fade bottom duration={1200}>
              {/* <Description>{description}</Description> */}
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
