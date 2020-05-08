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

  const datas = {}
  data.allFile.edges.forEach(edge => {
    datas[edge.node.base] = edge.node.publicURL
  })

  return (
    <div className="projects d-flex flex-column">
      <div className="row d-flex">
        <div className="projectContainer">
          <Project header="Leo AR Web" video={datas["leoar.mp4"]} />
        </div>
        <div className="projectContainer">
          <Project
            header="MojiLaLa FB Extension"
            video={datas["mojilala.mp4"]}
          />
        </div>
      </div>
      <div className="row d-flex">
        <div className="projectContainer">
          <Project header="Macbook Prices" video={datas["macbook.mp4"]} />
        </div>
        <div className="projectContainer">
          <Project header="Desk Story" video={datas["deskstory.mp4"]} />
        </div>
      </div>
    </div>
  )
}

export default CenteredContent
