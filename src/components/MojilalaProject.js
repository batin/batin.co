import React from "react"

import Video from './Video'
import './project.css'
const MojilalaProject = () => (
  <div className="project" >
    <div className="centeredHeader" style={{ fontSize: '2em' }}> Mojilala FaceBook Extension</div>
    {/* <Video posterImage={posterImage} /> */}
    <img className="projectImage" src={posterImage} alt="" />
  </div>
)

export default MojilalaProject
