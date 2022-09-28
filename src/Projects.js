import React from 'react';
import {projectData} from './data';
import SingleProject from './SingleProject';
import Footer from './Footer';

const Projects = () => {
    return(
        <div className="page">
            <section>
                <div className="projects">
                    <h1 className="coverBold" >What I've Built</h1>
                    <p>Some examples of my work. To see more, please visit my <span className="highlight"><a href="https://github.com/juneidea?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></span>.</p>
                    <div className="projects-outline">
                        {projectData.map((project, index) => (
                        <SingleProject key={index} project={project} number={index} image={project.image}/>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Projects;