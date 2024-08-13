import React from 'react'
import "../App.scss"
import './Project.css';
import Loader from 'react-loaders';
import spotifyImage from "../assets/Spotify.jpeg"
import weather from "../assets/weather.jpg"


function Projects() {
  let projectDetails=[{
    imgSrc:spotifyImage,
    name:"Spotify Clone",
    description:"This is the clone of spotify in which you can play, pause the music and more..",
    link:"https://postifymusic.freewebhostmost.com/"
  },
  {
    imgSrc:weather,
    name:"Weather App",
    description:"Developed a responsive weather app using HTML, CSS, and JavaScript Utilized the weather API to fetch real-time weather data for various cities",
    link:"https://harsh-bisla.github.io/Weather-App/"
  },
  {
    imgSrc:"https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png",
    name:"Text Utils",
    description:"Developed a text utilty website that helps to manipulate your text in a way that you want..",
    link:"https://harsh-bisla.github.io/TextUtils/"
  }]
  return (
  <>
 <Loader type='square-spin'/>
    <div className='projects-container'>
            <span>&lt;h1&gt;</span> <h1>Projects.</h1> <span>&lt;h1/&gt;</span>
           <div className='swiper-container'>
            {projectDetails.map((card)=>
               <div className='project-card'>
               <div className='img-div'><img height={200} width={250} src={card.imgSrc} alt='project-image'/></div>
               <div className='project-text'>
                 <h2>{card.name}</h2>
                 <p>{card.description}</p>
                 <a href={card.link} target='_blank'><button className='project-btn'>View Project</button></a>
               </div>
            </div>
            )}
      </div>
    </div>
    </>
  )
}

export default Projects