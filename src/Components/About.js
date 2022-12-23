import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio =
      "인하대학교 프런티어학부대학 조교수, 교양책임교수, 자유전공학부장";
    const street = "22212 인천광역시 미추홀구 인하로 100";
    const office = "인하대학교 60주년기념관 1215호";
    const phone = "032-860-8280";
    const email = "yjjeong@inha.ac.kr";

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <div className="address" style={{ width: "500px" }}>
                    <span style={{ width: "400px" }}>
                      {street}
                      <br />
                      {office}
                    </span>
                    <br />
                    <span style={{ width: "400px" }}>{phone}</span>
                    <br />
                    <span style={{ width: "400px" }}>{email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
