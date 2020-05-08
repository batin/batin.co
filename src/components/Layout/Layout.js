import React from "react"
import DarkMode from "../DarkModeToggle/DarkModeToggle"
import Socials from "../Socials/Socials"
import "./Layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <DarkMode />
        <Socials />
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
