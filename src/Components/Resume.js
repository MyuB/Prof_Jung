import React, { Component } from "react";
import Slide from "react-reveal";
import { Education } from "../Data/Education";
import { ResearchAndAwards } from "../Data/ResearchAndProject";
import { Contribution } from "../Data/Contribution";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const edu = Education.map((elem) => {
      return (
        <div key={elem.id}>
          <h3>
            {elem.shcool} {elem.major}
          </h3>
          <p className="info">
            {elem.degree} <span>&bull; {elem.year}</span>
          </p>
          {elem.paper && (
            <p style={{ marginTop: "20px" }}>
              {"박사학위 논문:"} {elem.paper}
            </p>
          )}
        </div>
      );
    });

    const raa = ResearchAndAwards.map((elem) => {
      return (
        <div key={elem.id} style={{ width: "100%" }}>
          <h4>{elem.name}</h4>
          <p>{elem.year}</p>
        </div>
      );
    });

    const contribution = Contribution.map((elem) => {
      return (
        <li key={elem.link}>
          <h3>{elem.name}</h3>
          <p>{elem.publication}</p>
          <a href={elem.link} target="_blank" rel="noreferrer">
            {elem.link}
          </a>
          <hr />
        </li>
      );
    });

    const release = (
      <React.Fragment>
        <h3>{"대교협, 우수 교양기초교과목 4개 선정 시상"}</h3>
        <p>{"한국대학신문 2017년 10월 29일자"}</p>
        <hr />
      </React.Fragment>
    );

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{edu}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span style={{ display: "inline-block", marginTop: "10px" }}>
                  Representative
                </span>
                <span style={{ display: "inline-block", marginTop: "10px" }}>
                  Research Projects
                </span>
                <span style={{ display: "inline-block", marginTop: "10px" }}>
                  and Awards
                </span>
              </h1>
            </div>

            <div className="nine columns main-col">{raa}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Press</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p style={{ fontSize: "2rem" }}>
                {"정연재 교수님께서 언론에 기고하신 글"}
              </p>
              <div>
                <ul className="skills">{contribution}</ul>
              </div>
              <p style={{ fontSize: "2rem" }}>{"정연재 교수님의 언론 보도"}</p>
              <div>
                <ul className="skills">{release}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
