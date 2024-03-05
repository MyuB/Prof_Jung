import React, { Component } from "react";
import { MediaList } from "./Media";

class Testimonials extends Component {
  render() {
    // const testimonials = this.props.data.testimonials.map(function (
    //   testimonials
    // ) {
    //   return (
    //     <li key={testimonials.user}>
    //       <blockquote>
    //         <p>hello</p>
    //         <p>{testimonials.text}</p>
    //         <cite>{testimonials.user}</cite>
    //       </blockquote>
    //     </li>
    //   );
    // });

    const medias = MediaList.map((elem, index) => {
      return (
        <div key={index} style={{ marginBottom: "10px" }}>
          <h4 style={{ color: "white", fontWeight: "700" }}>{elem.name}</h4>
          <a href={elem.link} target="_blank" rel="noreferrer">
            {elem.link}
          </a>
        </div>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <h1
              style={{
                fontSize: "25px",
                fontFamily: "NanumSquareE",
                textAlign: "center",
                marginBottom: "50px",
              }}
            >
              Media
            </h1>
            <div className="ten columns flex-container">{medias}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
