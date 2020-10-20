import React from "react"
import "./AboutMeSection2.css"

const AboutMeSection2 = () => (
  <section id="resume" className="section">
    <h1 className="p2-header" style={{ color: "#00adb5" }}>
      My Resume
    </h1>
    <div className="d-flex flex-column align-items-center resume-section-text-container mt-5">
      <div>
        <div className="d-flex flex-column align-items-start resumeInner mt-5">
          <h3>Work Experiences</h3>
          <ul className="workList">
            <li>
              <a
                className="link"
                href="https://www.trendyol.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trendyol.com
              </a>{" "}
              2020-Since - Software Engineer
            </li>
          </ul>
          <ul className="workList">
            <li>
              <a
                className="link"
                href="https://www.Kommunity.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kommunity
              </a>{" "}
              2020-2020 - Mobile Developer
            </li>
          </ul>
          <ul className="workList">
            <li>
              <a
                className="link"
                href="https://www.leoapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leo AR
              </a>{" "}
              2018-2019 - Front-end Developer
            </li>
          </ul>
          <ul className="workList">
            <li>
              <a
                className="link"
                href="https://www.mojilala.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MojiLaLa
              </a>{" "}
              2018-2019 - Front-end Developer
            </li>
          </ul>
          <ul className="workList">
            <li>
              <a className="link" href="#resume">
                Aktif Fitness
              </a>{" "}
              2014-2015 - Personal Trainer
            </li>
          </ul>
          <ul className="workList">
            <li>
              <a className="link" href="#resume">
                Rose Cove
              </a>{" "}
              2015-2016 - Host
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-start resumeInner ts mt-5">
          <h3>Technical Skills</h3>
          <ul className="workList">
            <li className="link">Web Technology</li>
            <li>HTML / CSS / Javascript</li>
          </ul>
          <ul className="workList">
            <li className="link">Database</li>
            <li>MySQL / MongoDB </li>
          </ul>
          <ul className="workList">
            <li className="link">Framework</li>
            <li>React.js / React Native</li>
            <li>Vue.js / A-Frame</li>
            <li>Gatsby.js</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default AboutMeSection2
