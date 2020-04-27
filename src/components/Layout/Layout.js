import React from "react"
import DarkMode from "../DarkModeToggle/DarkModeToggle"
import Socials from "../Socials/Socials"
import "./Layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <navbar className="navbar">
        <DarkMode />
        <Socials />
      </navbar>
      <main>{children}</main>
    </>
  )
}

export default Layout
