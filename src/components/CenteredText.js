import React from "react"
import './CenteredText.css'
import { Link } from "gatsby"

const CenteredText = () => (
  <div className="centeredText">
    <div className="centeredTextContainer">
      <h1 className="centered" style={{ color: '#00adb5' }}>
        Hello, I'm
    </h1>
      <h1 className="centered" >
        Batın Eryılmaz
    </h1>
      <div>

      </div>
      <div className="btn">
        <Link to="/about-me" style={{color: 'inherit', textDecoration:'none'}}>
          <h3 className="centered"> About Me </h3>
        </Link>
      </div>

    </div>

  </div>

)

export default CenteredText
