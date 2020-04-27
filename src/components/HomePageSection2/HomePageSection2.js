import React from "react"
import Projects from "../Projects/Projects"
import "./HomePageSection2.css"

const IndexPage = () => (
  <section id="portfolio" className="home-section">
    <h2 className="p2-header" style={{ color: "#00adb5" }}>
      My portfolio
    </h2>
    <Projects />
  </section>
)

export default IndexPage
