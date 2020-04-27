import React from "react"
import "./ScrollDownButton.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const ScrollDownButton = ({ to }) => (
  <div className="scrollBtnContainer" onClick={() => scrollTo(to)}>
    <div className="button-inner-container">
      <span className="span-one"></span>
      <span className="span-two"></span>
      <span className="span-three"></span>
    </div>
  </div>
)

export default ScrollDownButton
