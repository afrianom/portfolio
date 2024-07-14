import React from "react";
import './hero.css'
import profile_pic from '../../assets/profile-pic.jpg'
import LinkedInIcon from "./LinkedInIcon.jsx";
import GitHubIcon from './GitHubIcon.jsx';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-first">
                <img className="profile-pic" src={profile_pic} alt="profile picture" />
                <h1>Hello, I'm Andres, <span>fullstack developer.</span></h1>
            </div>
            <div className="hero-second">
                <p>I'm a fullstack developer with one year of experience, enthusiastic about creating impactful projects. I am committed to continuous learning and innovation in every project I undertake.</p>
                <div className="hero-buttons">
                    <a href="https://www.linkedin.com/in/andres-ria%C3%B1o-193003251/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='socialmedia-btn'/></a>
                    <a href="https://github.com/afrianom" target="_blank" rel="noopener noreferrer"><GitHubIcon className='socialmedia-btn'/></a>
                    {/* <object type="image/svg+xml" data={linkedinlogo} width="50" className="linked-in-btn"></object> */}
                    {/* <object src={githublogo} alt="github logo" className="github-btn" width='50'></object> */}
                    <a href="https://drive.google.com/uc?export=download&id=1FohTag86AQ6XvMrQv1sAmmOGu93LbRw8" className="my-resume">My resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;