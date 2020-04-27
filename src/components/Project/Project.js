import React from "react"
import ReactPlayer from "react-player"
import "./Project.css"

const MacbookPricesProject = props => (
  <div className="d-flex flex-column project align-items-center">
    <h3 className="projectTitle"> {props.header}</h3>
    <ReactPlayer
      className="video"
      url={props.video}
      muted
      playing
      controls
      loop
      width="50%"
      height="100%"
    />
  </div>
)

export default MacbookPricesProject
