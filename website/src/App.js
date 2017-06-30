import React, { Component } from "react";
import "./App.css";
import sittingme from "./images/sittingme.jpg";
import downarrow from "./images/down-arrow.png";
import scrollToElement from "scroll-to-element";

class App extends Component {
  scrollToAbout = () => {
    scrollToElement(".about-container", {
      duration: 1000
    });
  };

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="main-overlay">
            <h1 className="name"> KAVYA RAVIKANTI </h1>
            <div className="desc"> Software Developer</div>
          </div>

          <img
            className="arrow"
            src={downarrow}
            onClick={() => this.scrollToAbout()}
          />
          <div className="arrow-text hover">Learn More</div>
        </div>

        <div className="about-container">
          <div className="heading"> Hey, I'm Kavya.</div>
          <div className="about-content">
            <div className="about-overlay">
              <h3 className="about-desc">
                I am a full-stack software engineer passionate about design and
                innovation while creating a robust product.{" "}
              </h3>
              <p className="about-text">
                I'm a second year student at the University of Virginia in
                Charlottesville majoring in Computer Science and minoring in
                Global Studies. Currently, I am spending the summer in
                Charlottesville learning full-stack software development through
                Launch.
              </p>
              <p className="about-text">
                I'm a second year student at the University of Virginia in
                Charlottesville majoring in Computer Science and minoring in
                Global Studies. Currently, I am spending the summer in
                Charlottesville learning full-stack software development through
                Launch.
              </p>
            </div>
            <img className="about-image" src={sittingme} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
