import React from 'react'
import "./About.css"
import "../App.scss"
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

function About() {
  return (
 <>
 <div className="about-wrapper">
   <div className='about-container'>
    <div className='about-me'>
     <span>&lt;h1&gt;</span> <h1>About Me</h1> <span>&lt;h1/&gt;</span>
      </div>
      <p>I am Harsh Bisla. a passionate frontend web developer with a solid foundation in HTML, CSS, and JavaScript, along with hands on experience in framework like React Js. I have experience in building responsive websites that provide an optimal user experience across all devices.</p>
      <br/>
      <p>In my work, I prioritize attention to detail, performance optimization, and cross-browser compatibility. </p>
   </div>

<div className="stage-cube-cont">
<div className="cubespinner">
  <div className="face1">
    <FontAwesomeIcon icon={faBootstrap} color="#7311f5" />
  </div>
  <div className="face2">
    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
  </div>
  <div className="face3">
    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
  </div>
  <div className="face4">
    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
  </div>
  <div className="face5">
    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
  </div>
  <div className="face6">
    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
  </div>
</div>
</div>
</div>
  <Loader type='square-spin'/>
</>
  )
}

export default About