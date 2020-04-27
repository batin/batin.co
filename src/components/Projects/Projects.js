import React from "react"
import "./Projects.css"
import Project from "../Project/Project"

import mojilalaVideo from "../../assets/Videos/mojilala.mp4"
import macbookVideo from "../../assets/Videos/macbook.mp4"
import leoarVideo from "../../assets/Videos/leoar.mp4"
import deskstoryVideo from "../../assets/Videos/deskstory.mp4"

const CenteredContent = () => (
  <div className="projects d-flex flex-column">
    <div className="row d-flex">
      <div className="projectContainer">
        <Project header="Leo AR Web" video={leoarVideo} />
      </div>
      <div className="projectContainer">
        <Project header="MojiLaLa FB Extension" video={mojilalaVideo} />
      </div>
    </div>
    <div className="row d-flex">
      <div className="projectContainer">
        <Project header="Macbook Prices" video={macbookVideo} />
      </div>
      <div className="projectContainer">
        <Project header="Desk Story" video={deskstoryVideo} />
      </div>
    </div>
  </div>
)

export default CenteredContent
