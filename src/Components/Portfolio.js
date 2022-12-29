import React from "react";
import Fade from "react-reveal";
import styled from "styled-components";
import { Books } from "../Data/Books";
import { Papers } from "../Data/Papers";
import "../App.css";

const Year = styled.div`
  font-family: "NanumSquareE";
  font-size: 20px;
  color: black;
  margin: 5px 0;
`;

const Portfolio = () => {
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
        {elem.year && <Year>{elem.year}</Year>}
        &middot;
        <span key={elem.id}>{elem.name}</span>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <h1 style={{ fontSize: "4rem" }}>주요학술논문</h1>
          <div style={{ textAlign: "left" }}>{papers}</div>
        </div>
        <div className="row" style={{ marginTop: "50pt" }}>
          <h1 style={{ fontSize: "4rem" }}>주요 학술 저서</h1>
          <div style={{ textAlign: "left" }}>{books}</div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
