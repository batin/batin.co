import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1 className="centered" > 404 NOT FOUND</h1>
      <a href="/">
        <h2
          className="centered"
          style={{ paddingTop: '1.5em', color: '#00adb5', borderWidth: 1 }}>
          Go Home
        </h2>
      </a>
    </section>

  </Layout>
)

export default NotFoundPage
