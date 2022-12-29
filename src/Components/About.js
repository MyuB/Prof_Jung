import React, { Component } from "react";
import Fade from "react-reveal";
import styled from "styled-components";

const Temph2 = styled.div`
  font-family: "NanumSquareE";
  color: white;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio =
      "한양대학교 대학원 철학과에서 독일현대철학 전공으로 박사학위를 받았다. 한양대학교, 경희대학교, 단국대학교 강사, 세종대학교 교양학부 초빙교수를 거쳐, 현재 인하대학교 프런티어 학부대학 교수 및 자유전공학부 학부장으로 재직중이다. 포스트휴먼 시대의 인간 가치, 미래 고등교육 변화와 교양교육 혁신, 전문교육과 교양교육의 연계성 등에 관심을 가지고 연구와 교육을 병행하고 있으며, 교양교육, 윤리학, 해석학과 관련된 다양한 논문과 저서를 출간하였다.";
    const street = "22212 인천광역시 미추홀구 인하로 100";
    const office = "인하대학교 60주년기념관 1215호";
    const phone = "032-860-8280";
    const email = "yjjeong@inha.ac.kr";

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className=" columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="columns main-col">
              <Temph2>About Me</Temph2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <Temph2>Contact Details</Temph2>
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
