import React from "react";
import './about.css'
import profile_pic from '../../assets/profile-pic.jpg'


const About = () => {
    return (
        <div className="about">
            <div className="about-first">
                <img src={profile_pic} alt="profile picture" />
                <h1>Hello, i'm Andres, <span>fullstack developer.</span></h1>
            </div>
            <div className="about-second">
                <p>I am a full-stack developer with one year of experience, enthusiastic about creating impactful projects. I am committed to continuous learning and innovation in every project I undertake.</p>
                <div className="my-resume">My resume</div>
            </div>
        </div>
    )
}

export default About