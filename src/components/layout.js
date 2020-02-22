/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import DarkMode from './DarkModeToggle';
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
        padding: 10,
        position: 'fixed'
      }}>
        <DarkMode />
    </div>
      
      <main>{children}</main>
      {/* <footer>
          Batin ERYILMAZ © {new Date().getFullYear()}
        </footer> */}
    </>
  )
}

export default Layout
