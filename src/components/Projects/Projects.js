import React from "react"
import "./Projects.css"
import Project from "../Project/Project"
import { useStaticQuery, graphql } from "gatsby"

const CenteredContent = () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            publicURL
            base
          }
        }
      }
    }
  `)
  const videos = {}
  videos[data.allFile.edges[0].node.base] = data.allFile.edges[0].node.publicURL
  videos[data.allFile.edges[1].node.base] = data.allFile.edges[1].node.publicURL
  videos[data.allFile.edges[2].node.base] = data.allFile.edges[2].node.publicURL
  videos[data.allFile.edges[3].node.base] = data.allFile.edges[3].node.publicURL
  console.log(videos)
  return (
    <div className="projects d-flex flex-column">
      <div className="row d-flex">
        <div className="projectContainer">
          <Project header="Leo AR Web" video={videos["leoar.mp4"]} />
        </div>
        <div className="projectContainer">
          <Project
            header="MojiLaLa FB Extension"
            video={videos["mojilala.mp4"]}
          />
        </div>
      </div>
      <div className="row d-flex">
        <div className="projectContainer">
          <Project header="Macbook Prices" video={videos["macbook.mp4"]} />
        </div>
        <div className="projectContainer">
          <Project header="Desk Story" video={videos["deskstory.mp4"]} />
        </div>
      </div>
    </div>
  )
}

export default CenteredContent
