import React from "react"
import './home.css'
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import HomePageSection1 from '../components/HomePageSection1/HomePageSection1';
import HomePageSection2 from '../components/HomePageSection2/HomePageSection2';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
    <HomePageSection1 />
    <HomePageSection2 />
  </Layout>
)

export default IndexPage
