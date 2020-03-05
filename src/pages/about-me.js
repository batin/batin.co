import React, {useState} from "react"
import './about-me.css'
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import AboutMeSection1 from "../components/AboutMeSection1/AboutMeSection1"
import AboutMeSection2 from "../components/AboutMeSection2/AboutMeSection2"



const aboutMe = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <AboutMeSection1 />
      <AboutMeSection2 />
    </Layout>
  )
}

export default aboutMe
