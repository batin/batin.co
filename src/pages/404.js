import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section">
      <div className="centeredText">
        <div className="centeredTextContainer" style={{ width: '100%'}}>
          <h1 className="centered">
            404 NOT FOUND
          </h1>
          <a href="/" style={{ textDecoration: 'none' }}>
            <h2
              className="centered"
              style={{ marginTop: '1.5em', color: '#00adb5', borderWidth: 1 }}>
              Go Home
        </h2>
          </a>
        </div>
      </div>
    </section>

  </Layout>
)

export default NotFoundPage
