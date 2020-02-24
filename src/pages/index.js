import React from "react"
import { Link } from "gatsby"
import './home.css'
import './scrollButton.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from 'gatsby-plugin-smoothscroll';
import CenteredText from '../components/CenteredText';
import CenteredContent from '../components/CenteredContent';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="header" className="home-section">
      <CenteredText />
      <div className="scrollBtnContainer" onClick={() => scrollTo('#portfolio')} >
        <div className="button-inner-container">
          <span className="span-one"></span>
          <span  className="span-two"></span>
          <span className="span-three"></span>
        </div>
      </div> 
    </section>
    <section id="portfolio" className="home-section" style={{ paddingTop: '3em' }}>
      <CenteredContent />
    </section>
  </Layout>
)

export default IndexPage
