import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./Socials.css"
const Socials = () => {
  return (
    <ul
      className="social-list"
      style={{ listStyle: "none", display: "inline-flex" }}
    >
      <li className="social-list-item">
        <a href="http://twitter.com/btnerylmz" style={{ color: "inherit" }}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "20px" }} />
        </a>
      </li>
      <li className="social-list-item">
        <a href="mailto:batineryilmaz@icloud.com" style={{ color: "inherit" }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "20px" }} />
        </a>
      </li>
      <li className="social-list-item">
        <a href="http://github.com/batin" style={{ color: "inherit" }}>
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "20px" }} />
        </a>
      </li>
      <li className="social-list-item">
        <a href="https://t.me/batineryilmaz" style={{ color: "inherit" }}>
          <FontAwesomeIcon icon={faTelegram} style={{ fontSize: "20px" }} />
        </a>
      </li>
    </ul>
  )
}

export default Socials
