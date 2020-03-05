import React from "react"
import Projects from '../Projects/Projects';

const IndexPage = () => (  
  <section id="portfolio" className="home-section" style={{ paddingTop: '3em' }}>
    <h1 className="centeredHeader" style={{ color: '#00adb5' }}>
      My portfolio
    </h1>
    <Projects />
  </section>
)

export default IndexPage
