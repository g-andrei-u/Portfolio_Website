import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { TiChevronRightOutline } from 'react-icons/ti';


const Projects: React.FC = () => {
  return (
    <div className='home-page'>
        <section className="projects">
            <h2 style={{paddingBottom: '20px'}}>Projects:</h2>
            <div className='projects-links'>
                <div className='project-link'>
                    <div className='project-arrow'><TiChevronRightOutline /></div>
                    <Link to="">
                        <h3>eCommerce Website</h3>
                    </Link>
                </div>

                <div className='project-link'>
                    <div className='project-arrow'><TiChevronRightOutline /></div>
                    <Link to="">
                        <h3>Custom Instagram Web App</h3>
                    </Link>
                </div>

                <div className='project-link'>
                    <div className='project-arrow'><TiChevronRightOutline /></div>
                    <Link to="">
                        <h3>Site Clone</h3>
                    </Link>
                </div>

                <div className='project-link'>
                    <div className='project-arrow'><TiChevronRightOutline /></div>
                    <Link to="" >
                        <h3>Spotify Playlist with React</h3>
                    </Link>
                </div>

                <div className='project-link'>
                    <div className='project-arrow'><TiChevronRightOutline /></div>
                    <Link to="" >
                        <h3>Site Main page</h3>
                    </Link>
                </div>

                <div className='' style={{backgroundColor: 'white'}} >
                    <h2 style={{display: 'inline', fontSize: '20px', color: 'black'}}>COMING SOON:</h2>
                    <h3 style={{display: 'inline', color: 'rgb(0, 120, 0)'}}>Vue.js App</h3>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Projects;