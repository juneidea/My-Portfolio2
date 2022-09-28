import React from 'react';
import Footer from './Footer';
import portrait from './assets/June2.png';

const About = () => {
    return(
        <div className="page">
            <section>
                <div className="about">
                <h1 className="coverBold">About Me</h1>
                <h5>I'm a software developer with a background in front end web design.</h5>
                <p>My first job was a front end app developer at <span className="highlight"><a href="https://www.rewardsnetwork.com/">Rewards Network</a></span>. Working in an Agile team using Jira, ReactJS, typeScript, React hooks to develop a client facing application for restaurants in the company network.</p>
                <p>Before that I attended <span className="highlight"><a href="https://www.fullstackacademy.com/">Fullstack Academy</a></span> in Chicago to learn full-stack development.</p>
                <p>When I'm not messing around with new front end library and feature, I like to read books, listen to podcasts, play saxophone, and watch Youtube.</p>
                </div>
                <img src={portrait} className="portrait" alt="portrait" />
            </section>
            <Footer />
        </div>
    )
}

export default About;