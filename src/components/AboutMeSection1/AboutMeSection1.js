import React from "react"
import { Link } from "gatsby"
import ScrollDown from "../ScrollDownButton/ScrollDownButton"
import "./AboutMeSection1.css"

const AboutMeSection1 = () => (
  <section
    id="about"
    className="section d-flex flex-column justify-content-center align-items-center"
  >
    <h1 className="centered" style={{ color: "#00adb5" }}>
      About Me
    </h1>
    <p className="aboutMe">
      Batin lives in Denizli/Turkey. <br /> He is interested in sitcoms, video
      games, sci-fi movies and tv series. <br /> Being developer is passion for
      him. <br /> He loves working remotely.
    </p>
    <div className="button">
      <a
        href="../../assets/Batin EryilmazCV.pdf"
        target="_blank"
        download
        style={{ color: "inherit", textDecoration: "none" }}
      >
        Download CV
      </a>
    </div>
    <div className="button">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        Home
      </Link>
    </div>
    <ScrollDown to="#resume" />
  </section>
)

export default AboutMeSection1
