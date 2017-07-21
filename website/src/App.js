import React, { Component } from "react";
import "./App.css";
import sittingme from "./images/sittingme.jpg";
import downarrow from "./images/down-arrow.png";
import scrollToElement from "scroll-to-element";
import devicon from "./images/pc-settings.svg";
import tools from "./images/tools.svg";
import github from "./images/github-logo.svg";
import cli from "./images/command-lines.svg";
import r from "./images/r-logo.svg";
import download from "./images/download.svg";

class App extends Component {
  scrollToIntro = () => {
    scrollToElement(".website-container", { duration: 750 });
  };

  scrollToAbout = () => {
    scrollToElement(".about-container", { duration: 750 });
  };

  scrollToSkills = () => {
    scrollToElement(".skills-container", { duration: 750 });
  };

  scrollToPassions = () => {
    scrollToElement(".passion-outer-container", { duration: 750 });
  };

  scrollToExperience = () => {
    scrollToElement(".exp-container", { duration: 750 });
  };

  render() {
    return (
      <div className="website-container">
        {/* Main Page */}

        {/* Nav Bar for Large Screen */}
        <nav id="dot-nav">
          <ul>
            <li className="dot-container">
              <a
                href="#intro-section"
                data-number="0"
                onClick={() => this.scrollToIntro()}
              >
                <span className="dot" />
                <span className="dot-label">Intro</span>
              </a>
            </li>
            <li className="dot-container">
              <a
                href="#about-section"
                data-number="0"
                onClick={() => this.scrollToAbout()}
              >
                <span className="dot" />
                <span className="dot-label">About</span>
              </a>
            </li>
            <li className="dot-container">
              <a
                href="#skills-section"
                data-number="1"
                onClick={() => this.scrollToSkills()}
              >
                <span className="dot" />
                <span className="dot-label">Skills</span>
              </a>
            </li>
            <li className="dot-container">
              <a
                href="#skills-section"
                data-number="1"
                onClick={() => this.scrollToPassions()}
              >
                <span className="dot" />
                <span className="dot-label">What I Do</span>
              </a>
            </li>
            <li className="dot-container">
              <a
                href="#experience-section"
                data-number="2"
                onClick={() => this.scrollToExperience()}
              >
                <span className="dot" />
                <span className="dot-label">Experience</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Nav Bar for Small Screen */}

        {/* <div id="toggle" className="container">
          <span className="line top" /> <span className="line middle" />
          <span className="line bottom" />
        </div>
        <div id="overlay" className="overlay">
          <div className="logo">
            <img className="logo-img" src="img/logo-white.png" alt="logo" />><span>Brittany Chiang</span>
          </div>
          <nav className="overlay-menu">
            <ul className="menu-container">
              <li className="menu-item">
                <a href="#intro-section">Intro</a>
              </li>
              <li className="menu-item">
                <a href="#about-section">About</a>
              </li>
              <li className="menu-item">
                <a href="#services-section">What I Do</a>
              </li>
              <li className="menu-item">
                <a href="#skills-section">Skills</a>
              </li>
              <li className="menu-item">
                <a href="#experience-section">Experience</a>
              </li>
              <li className="menu-item">
                <a href="#portfolio-section">Portfolio</a>
              </li>
              <li className="menu-item">
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
          </nav>
        </div> */}

        <div className="home-container">
          <div className="main-overlay">
            <h1 className="name">KAVYA RAVIKANTI</h1>
            <div className="desc">Software Developer</div>
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
          <div className="heading">Hey, I'm Kavya.</div>
          <div className="about-content">
            <div className="about-overlay">
              <h3 className="about-desc">
                I am a full-stack software engineer passionate about design and
                innovation while creating a robust product.
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
        <div className="skills-container">
          <div className="skills-heading">Skills</div>
          <div className="skills-content-wrapper">
            <div className="skills-content">
              <span className="skills-title">
                {<img className="dev-icon" src={devicon} />}Development
              </span>
              <ul className="skills-list">
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                    />
                  </svg>
                  <span>JavaScript</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    />
                  </svg>
                  <span>Node.js</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
                    />
                  </svg>
                  <span>HTML 5</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
                    />
                  </svg>
                  <span>CSS 3</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zM80.806 87.66c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zM92.125 27.085c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zM102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644c-12.812 6.195 31.691 9.019 54.733 2.957zM90.609 93.041c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559 25.271-19.947 12.304-32.923 12.304-32.923 5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zM91.455 121.817c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"
                    />
                  </svg>
                  <span>Java</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                    />
                  </svg>
                  <span>Python</span>
                </li>
                <li className="dev-skill">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    enable-background="new 0 0 128 128"
                  >
                    <g fill="#ffffff">
                      <circle cx="64" cy="64" r="11.4" />
                      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                    </g>
                  </svg>
                  <span>React.js</span>
                </li>
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g fill="#ffffff">
                      <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                      <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                      <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
                    </g>
                  </svg>
                  <span>Redux</span>
                </li>
                <li className="dev-skill">
                  <img className="github-icon" src={r} />
                  <span>R</span>
                </li>
              </ul>
            </div>
            <div className="skills-content">
              <span className="skills-title">
                {<img className="dev-icon" src={tools} />}Tools
              </span>
              <ul className="skills-list">
                <li className="dev-skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path
                      fill="#ffffff"
                      d="M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"
                    />
                  </svg>
                  <span>Git</span>
                </li>

                <li className="dev-skill">
                  <img className="github-icon" src={github} />
                  <span>Github</span>
                </li>

                <li className="dev-skill">
                  <img className="github-icon" src={cli} />
                  <span>Command Line</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="passion-outer-container">
          <div className="passion-inner-container">
            <div className="passion-heading">What I Do</div>
            {/* <div className="passion-content">Section 1</div>
            <div className="passion-content">Section 2</div>
            <div className="passion-content">Section 3</div> */}
            <section id="services-section" className="section gap">
              <div
                className="bg"
                data-anchor-target="#services-section"
                data-bottom-top="transform: translate3d(0px, -150px, 0px);"
                data-top-bottom="transform: translate3d(0px, 150px, 0px);"
              />
              <div className="overlay-wrapper">
                <div className="fade-in">
                  <h1 className="section-heading">What I Do</h1>{" "}
                  <span className="divider" />
                  <div className="services-wrapper">
                    <div className="service-row">
                      <div className="service-column">
                        <div className="sprite webdev" />
                        <h2 className="service-heading">Web Development</h2>
                        <p className="service-text">
                          Using HTML, CSS, and JavaScript with pre-processors
                          and build tools such as Sass and Grunt, I have a
                          passion for developing pixel-perfect websites and apps
                          while maintaining a semantic, modular, and DRY code
                          base.
                        </p>
                      </div>
                      <div className="service-column">
                        <div className="sprite ui" />
                        <h2 className="service-heading">
                          Responsive UI Design
                        </h2>
                        <p className="service-text">
                          <strong>
                            <em>
                              "A user interface is like a joke. If you have to
                              explain it, it's not that good."
                            </em>
                          </strong>{" "}
                          I strive to develop and implement responsive and
                          aesthetically pleasing interfaces for websites and
                          apps that adapt to any type of device, platform, or
                          browser.
                        </p>
                      </div>
                    </div>
                    <div className="service-row">
                      <div className="service-column">
                        <div className="sprite xd" />
                        <h2 className="service-heading">Experience Design</h2>
                        <p className="service-text">
                          There have been far too many times where I've been
                          trying to accomplish a simple task on a website, and
                          ended up wanting to throw my computer out the window
                          in frustration. Needless to say, user experience is an
                          aspect of software I believe is vital to a successful
                          product.
                        </p>
                      </div>
                      <div className="service-column">
                        <div className="sprite wit" />
                        <h2 className="service-heading">Diversity in Tech</h2>
                        <p className="service-text">
                          Beyond coding, I am a strong advocate for diversity in
                          the tech industry, especially for women. I currently
                          serve as President for Northeastern's women in tech
                          club,{" "}
                          <a href="http://nuwit.ccs.neu.edu/" target="_blank">
                            NUWIT
                          </a>, and was a 2016{" "}
                          <a href="http://ghc.anitaborg.org/" target="_blank">
                            Grace Hopper Conference
                          </a>{" "}
                          Scholar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="exp-container">
          <div className="exp-heading">Experience</div>
          <div id="experience-section" className="section gap">
            {/*<div className="bg" data-anchor-target="#experience-section" data-bottom-top="transform: translate3d(0px, -150px, 0px);"
                  data-top-bottom="transform: translate3d(0px, 150px, 0px);"></div>*/}
            <div className="overlay-wrapper">
              <div className="fade-in">
                {/* <div className="center">
                          <h1 className="section-heading">Experience</h1> <span className="divider center"></span>
                          <p className="experience-description">Thanks to Northeastern's co-op program, I've had the privilege of completing two awesome six-month
                              co-ops as a Creative Technologist at <a href="http://us.mullenlowe.com/" target="_blank">MullenLowe U.S.</a>                            and Software Engineer at <a href="https://starry.com/" target="_blank">Starry</a>. Starting in
                              July 2017, I'll be joining the iTunes team at <a href="https://apple.com/" target="_blank">Apple</a>                            as a UI Engineer for my third and final co-op!</p>
                      </div> */}
                <div className="experience-wrapper">
                  <div id="timeline">
                    {/* Major */}
                    <div className="timeline-block">
                      <div className="timeline-content">
                        <h2 className="position">University of Virginia</h2>
                        <h3 className="company">
                          <a
                            href="https://www.cs.virginia.edu/"
                            target="_blank"
                          >
                            College of Arts & Sciences
                          </a>
                        </h3>
                        <p className="job-desc">
                          Bachelor of Arts in Computer Science with a minor in
                          Global Studies.
                          <strong>Graduating in May 2020.</strong>
                        </p>
                      </div>
                      <div className="timeline-img">
                        <div className="sprite university" />
                      </div>
                      <span className="date"> Sep 2016 - Present</span>
                    </div>
                    {/* Teaching Assistant */}
                    <div className="timeline-block">
                      <div className="timeline-content">
                        <h2 className="position">Teaching Assistant</h2>
                        <h3 className="company">
                          <a
                            href="https://www.cs.virginia.edu/"
                            target="_blank"
                          >
                            University of Virginia, Department of Computer
                            Science
                          </a>
                        </h3>
                        <p className="job-desc">
                          As a TA for Intro to Programming (CS 1110) I lead
                          40-person lab sessions designed to practice coding
                          skills in Python and I teach concepts such as
                          object-oriented programming and data structures. I
                          also work individually with students during office
                          hours and assist in designing and writing assignments,
                          grading exams, and managing support requests from
                          students.
                        </p>
                      </div>
                      <div className="timeline-img">
                        <div className="sprite ta" />
                      </div>
                      <span className="date">Jan 2017 - Present</span>
                    </div>
                    {/* HackCville Intern */}
                    <div className="timeline-block">
                      <div className="timeline-content">
                        <h2 className="position">
                          Software Engineering Intern
                        </h2>
                        <h3 className="company">
                          <a
                            href="http://hackcville.com/summer/academy/index.html"
                            target="_blank"
                          >
                            HackCville
                          </a>
                        </h3>
                        <p className="job-desc">
                          Learned React.js/Redux full-stack web development in
                          an intensive bootcamp styled internship. Over the
                          course of 6 weeks, I created a Travel Itinerary
                          website and completed client work with PAKA.
                        </p>
                      </div>
                      <div className="timeline-img">
                        <div className="sprite industry" />
                      </div>
                      <span className="date">May - July 2017</span>
                    </div>

                    {/* Room Key Intern */}
                    <div className="timeline-block">
                      <div className="timeline-content">
                        <h2 className="position">
                          Software Engineering Intern
                        </h2>
                        <h3 className="company">
                          <a
                            href="https://www.roomkey.com/careers"
                            target="_blank"
                          >
                            Room Key
                          </a>
                        </h3>
                        <p className="job-desc">
                          Created a Room Key interactive widget for the MSN
                          travel page. Used Preact and Redux to create the front
                          end of the widget. Developed backend in Clojure.
                        </p>
                      </div>
                      <div className="timeline-img">
                        <div className="sprite industry" />
                      </div>
                      <span className="date">Jul 2017 - Present</span>
                    </div>
                  </div>
                  <i className="down-arrow" />
                </div>
              </div>
            </div>
          </div>
          <a
            className="block-btn"
            href="http://brittanychiang.com/resume.pdf"
            target="_blank"
          >
            <span className="text">View my full resume</span>
            <img className="icon" src={download} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
