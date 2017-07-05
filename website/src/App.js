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
        {/* Main Page */}
        <div className="home-container">
          <div className="main-overlay">
            <h1 className="name"> KAVYA RAVIKANTI </h1>
            <div className="desc"> Software Developer</div>
          </div>
          <div className="scroll-wrapper">
            <img
              id="arrow"
              src={downarrow}
              onClick={() => this.scrollToAbout()}
            />
            <span id="arrow-text" className="hover">
              Learn More
            </span>
          </div>
        </div>

        {/* About Page */}
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

        {/* Skills Page */}
        <div className="outer-skills-container">
          <div className="inner-skills-container">
            <div className="skills-heading"> Skills </div>
            <div className="skills-content">These are my skills</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
