import React from "react"
import { Link } from "gatsby"
import ScrollDown from "../ScrollDownButton/ScrollDownButton"
import { useStaticQuery, graphql } from "gatsby"
import "./AboutMeSection1.css"

const AboutMeSection1 = () => {
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

  let cv = null
  data.allFile.edges.forEach(edge => {
    if (edge.node.base === "Batin EryilmazCV.pdf") cv = edge.node.publicURL
  })

  return (
    <section
      id="about"
      className="section d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="centered" style={{ color: "#00adb5" }}>
        About Me
      </h1>
      <p className="aboutMe">
        Batin lives in Denizli/Turkey. <br /> He is interested in sitcoms, video
        games, sci-fi movies and tv series. <br /> Being developer is passion
        for him. <br /> He loves working remotely.
      </p>
      <div className="button">
        <a
          href={cv}
          target="_blank"
          download
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Download CV
        </a>
      </div>
      <div className="button">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <ScrollDown to="#resume" />
    </section>
  )
}
export default AboutMeSection1
