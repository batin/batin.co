import React from "react"
import './about-me.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="About me" />
    <section id="about" className="section">
      <div className="about-me-container">
        <div className="section-header">
          <h1 className="header" style={{ color: '#00adb5' }}>
            About Me
          </h1>
        </div>
        <div className="section-text">
          <p className="about-me-text">
            Batin lives in Denizli/Turkey. <br /> He is interested in sitcoms, video games, sci-fi movies and tv series. <br /> Being developer is passion for him.  <br /> He loves working remotely.
          </p>
          <div className="btn">
            <a href="https://www.pdfhost.net/index.php?Action=Download&File=ce3f2e0e624a44a6c53171c762e76fb4" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
              <h3 className="centered"> Download CV </h3>
            </a>
          </div>
          <div className="btn">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <h3 className="centered"> Home </h3>
            </Link>
          </div>
        </div>
        <div className="scrollBtnContainer" onClick={() => scrollTo('#resume')} style={{ marginTop: 0}}>
          <div className="button-inner-container">
            <span className="span-one"></span>
            <span className="span-two"></span>
            <span className="span-three"></span>
          </div>
        </div>
      </div>
    </section>
    <section id="resume" className="section">
      <div className="resume-container">
        <div className="resume-section-header">
          <h1 className="resume-text" style={{ color: '#00adb5' }}>
            My Resume
          </h1>
        </div>
        <div className="resume-section-text-container" >

          <div className="resume-inner">
            <h3>Work Experiences</h3>
            <div className="work-group">
              <ul className="work-list">
                <li><a className="link" href="https://www.leoapp.com/">Leo AR</a> 2018-2019 - Front-end Developer</li>
              </ul>
              <ul className="work-list">
                <li><a className="link" href="https://www.mojilala.com/">MojiLaLa</a> 2018-2019 - Front-end Developer</li>
              </ul>
            </div>
            <div className="work-group">
              <ul className="work-list">
                <li><a className="link" href="#resume">Aktif Fitness</a> 2014-2015 - Personal Trainer</li>
              </ul>
              <ul className="work-list">
                <li><a className="link" href="#resume">Rose Cove</a> 2015-2016 - Host</li>
              </ul>
            </div>

          </div>

          <div className="resume-inner" style={{ marginTop: 40 }}>
            <h3>Technical Skills</h3>
            <ul className="work-list">
              <li className="link">Web Technology</li>
              <li>HTML / CSS / Javascript</li>
            </ul>
            <ul className="work-list">
              <li className="link">Database</li>
              <li>MySQL / MongoDB </li>
            </ul>
            <ul className="work-list">
              <li className="link">Framework</li>
              <li>React.js / React Native</li>
              <li>Vue.js / A-Frame</li>
              <li>Gatsby.js</li>
            </ul>
          </div>
{/* 
          <div className="resume-inner" style={{ marginTop: 40 }}>
            <h3>Personal Skills</h3>
            <ul className="work-list">
              <li>Creative Thinking</li>
              <li className="link"> Strategic Thinking</li>
              <li>Software and Social Media</li>
              <li className="link">Fast Learner</li>
              <li>Multi-tasking</li>
              <li className="link">Dexterity</li>
            </ul>
          </div> */}
        </div>
      </div>

    </section>
  </Layout>
)

export default NotFoundPage
