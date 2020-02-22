import React from "react"
import './CenteredContent.css'
import Project from './Project'

import mojilalaVideo from '../assets/Videos/mojilala.mp4'
import macbookVideo from '../assets/Videos/macbook.mp4'
import leoarVideo from '../assets/Videos/leoar.mp4'


const CenteredContent = () => (
  <div className="container">
    <h1 className="centeredHeader" style={{ color: '#00adb5' }}>
      My portfolio
    </h1>

    <div className="mobile-projects">
      <div className="mobile-projects-container">
        <div className="project-one">
          <Project header="Leo AR Web" video={leoarVideo} />
        </div>
        <div className="project-two">
          <Project header={`MojiLaLa FB Extension`} video={mojilalaVideo}/>
        </div>
        <div className="project-three">
          <Project header="Macbook Prices" video={macbookVideo} />
        </div>
      </div>
    </div>
  </div>
)

export default CenteredContent
