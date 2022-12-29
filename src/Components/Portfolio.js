import React, { Component } from "react";
import Fade from "react-reveal";
import { Books } from "../Data/Books";
import { Papers } from "../Data/Papers";

class Portfolio extends Component {
  render() {
    const books = Books.map((elem) => {
      return (
        <div key={elem.id}>
          <span key={elem.id}>{elem.name}</span>
          <br />
        </div>
      );
    });

    const papers = Papers.map((elem) => {
      return (
        <div key={elem.id}>
          <span key={elem.id}>{elem.name}</span>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <h1 style={{ fontSize: "4rem" }}>주요학술논문</h1>
            <div style={{ textAlign: "center" }}>{papers}</div>
          </div>
          <div className="row" style={{ marginTop: "50pt" }}>
            <h1 style={{ fontSize: "4rem" }}>주요 학술 저서</h1>
            <div style={{ textAlign: "center" }}>{books}</div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
