import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { TiChevronRightOutline } from 'react-icons/ti';
import { projects } from './Assets/data';


const Projects: React.FC = () => {
  return (
    <div className='home-page'>
        <section className="projects">
            <h2 style={{paddingBottom: '20px'}}>Projects:</h2>
            <div className='projects-links'>
                {projects.map((project) => (
                    <div className='project-link'>
                        <div className='project-arrow' style={{color: 'rgb(0, 120, 0)'}}><TiChevronRightOutline /></div>
                        <Link to={project.path}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>
                ))}

                <div className='' style={{backgroundColor: 'white'}} >
                    <h2 style={{display: 'inline', fontSize: '20px', color: 'rgb(0, 120, 0)'}}>COMING SOON: </h2>
                    <h3 style={{display: 'inline', color: 'rgb(0, 0, 155)'}}>Vue.js App</h3>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Projects;