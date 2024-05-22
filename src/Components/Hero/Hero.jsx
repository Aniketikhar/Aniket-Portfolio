import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Aniket Ikhar</span>, Full Stack Developer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis dolorum recusandae at nihil animi fuga adipisci esse harum ducimus!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
