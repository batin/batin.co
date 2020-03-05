import React from "react"
import { Link } from "gatsby"
import ScrollDown from '../ScrollDownButton/ScrollDownButton'
import "./AboutMeSection1.css"
const AboutMeSection1 = () => (
  <section id="about" className="section">
    <div className="about-me-container">
      <div className="section-header">
        <h1 className="header" style={{ color: "#00adb5" }}>
          About Me
        </h1>
      </div>
      <div className="section-text">
        <p className="about-me-text">
          Batin lives in Denizli/Turkey. <br /> He is interested in sitcoms,
          video games, sci-fi movies and tv series. <br /> Being developer is
          passion for him. <br /> He loves working remotely.
        </p>
        <div className="btn">
          <a
            href="https://www.pdfhost.net/index.php?Action=Download&File=ce3f2e0e624a44a6c53171c762e76fb4"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="centered"> Download CV </h3>
          </a>
        </div>
        <div className="btn">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <h3 className="centered"> Home </h3>
          </Link>
        </div>
      </div>
      <ScrollDown page="aboutMe" scrollTo="#resume" />
    </div>
  </section>
)

export default AboutMeSection1
