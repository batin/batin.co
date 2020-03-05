import React from "react"
import ReactPlayer from 'react-player'

import './project.css'
const MacbookPricesProject = (props) => (
  <div className="project">
    <div className="centeredHeader" style={{ fontSize: '2em' }}> {props.header}</div>
    <ReactPlayer url={props.video} muted playing controls loop width="100%" height="100%" />
  </div>
)

export default MacbookPricesProject
