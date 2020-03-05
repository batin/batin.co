import React from "react"
import "./HomePageSection1.css"
import { Link } from "gatsby"
import ScrollDown from '../ScrollDownButton/ScrollDownButton'
const HomePageSection1 = () => (
  <section id="header" className="home-section">
    <div className="centeredText">
      <div className="centeredTextContainer">
        <h1 className="centered" style={{ color: "#00adb5" }}>
          Hello, I'm
        </h1>
        <h1 className="centered">Batın Eryılmaz</h1>
        <div></div>
        <div className="btn">
          <Link
            to="/about-me"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="centered"> About Me </h3>
          </Link>
        </div>
      </div>
    </div>
    <ScrollDown page="Home" scrollTo="#portfolio" />
  </section>
)

export default HomePageSection1
