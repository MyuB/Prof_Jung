import React, { Component } from "react";
import Slide from "react-reveal";
import { Education } from "../Data/Education";
import { Lectures } from "../Data/Lectures";
import { ResearchAndAwards } from "../Data/ResearchAndProject";

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

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const lectures = Lectures.map((elem) => {
      return (
        <li key={elem.id}>
          <h2>{elem.name}</h2>
          <h6>{elem.semester}</h6>
          <h6>{elem.department}</h6>
          <h6>{elem.style}</h6>
          <hr />
        </li>
      );
    });

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
                <span>Lectures</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{"정연재 교수님께서 인하대학교에서 담당하시는 수업들"}</p>

              <div>
                <ul className="skills">{lectures}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
