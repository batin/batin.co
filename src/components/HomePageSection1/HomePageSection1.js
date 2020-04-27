import React from "react"
import "./HomePageSection1.css"
import { Link } from "gatsby"
import ScrollDown from "../ScrollDownButton/ScrollDownButton"
const HomePageSection1 = () => (
  <section className="d-flex flex-column align-items-center justify-content-center">
    <div>
      <h1 className="centered" style={{ color: "#00adb5" }}>
        Hello, I'm
      </h1>
      <h1 className="centered">Batın Eryılmaz</h1>
      <div className="btn">
        <Link
          className="button"
          to="/about-me"
          style={{ color: "white", textDecoration: "none" }}
        >
          About Me
        </Link>
      </div>
    </div>
    <ScrollDown to="#portfolio" />
  </section>
)

export default HomePageSection1
