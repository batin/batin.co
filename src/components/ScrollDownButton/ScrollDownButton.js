import React from "react"
import './ScrollDownButton.css'
import scrollTo from 'gatsby-plugin-smoothscroll';

const ScrollDownButton = props => (
  <div
    className={`scrollBtnContainer ${props.page}`}
    onClick={() => scrollTo(props.scrollTo)}
  >
    <div className="button-inner-container">
      <span className="span-one"></span>
      <span className="span-two"></span>
      <span className="span-three"></span>
    </div>
  </div>
)

export default ScrollDownButton
