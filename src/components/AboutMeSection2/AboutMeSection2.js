import React from "react"
import "./AboutMeSection2.css"

const AboutMeSection2 = () => (
  <section id="resume" className="section2">
    <div className="resume-container">
      <div className="resume-section-header">
        <h1 className="resume-text" style={{ color: "#00adb5" }}>
          My Resume
        </h1>
      </div>
      <div className="resume-section-text-container">
        <div className="resume-inner">
          <h3>Work Experiences</h3>
          <div className="work-group">
            <ul className="work-list">
              <li>
                <a className="link" href="https://www.leoapp.com/">
                  Leo AR
                </a>{" "}
                2018-2019 - Front-end Developer
              </li>
            </ul>
            <ul className="work-list">
              <li>
                <a className="link" href="https://www.mojilala.com/">
                  MojiLaLa
                </a>{" "}
                2018-2019 - Front-end Developer
              </li>
            </ul>
          </div>
          <div className="work-group">
            <ul className="work-list">
              <li>
                <a className="link" href="#resume">
                  Aktif Fitness
                </a>{" "}
                2014-2015 - Personal Trainer
              </li>
            </ul>
            <ul className="work-list">
              <li>
                <a className="link" href="#resume">
                  Rose Cove
                </a>{" "}
                2015-2016 - Host
              </li>
            </ul>
          </div>
        </div>

        <div className="resume-inner" style={{ marginTop: 40 }}>
          <h3>Technical Skills</h3>
          <ul className="work-list">
            <li className="link">Web Technology</li>
            <li>HTML / CSS / Javascript</li>
          </ul>
          <ul className="work-list">
            <li className="link">Database</li>
            <li>MySQL / MongoDB </li>
          </ul>
          <ul className="work-list">
            <li className="link">Framework</li>
            <li>React.js / React Native</li>
            <li>Vue.js / A-Frame</li>
            <li>Gatsby.js</li>
          </ul>
        </div>
        {/* 
          <div className="resume-inner" style={{ marginTop: 40 }}>
            <h3>Personal Skills</h3>
            <ul className="work-list">
              <li>Creative Thinking</li>
              <li className="link"> Strategic Thinking</li>
              <li>Software and Social Media</li>
              <li className="link">Fast Learner</li>
              <li>Multi-tasking</li>
              <li className="link">Dexterity</li>
            </ul>
          </div> */}
      </div>
    </div>
  </section>
)

export default AboutMeSection2
