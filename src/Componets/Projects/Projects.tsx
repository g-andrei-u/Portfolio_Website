import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { TiChevronRightOutline } from 'react-icons/ti';
import { projects } from './Assets/data';
import { Animation } from '../Common/Animation';
import vue from '../Images/Vue.png';
import react from '../Images/React.png';
import js from '../Images/javascript.png';
import php from '../Images/php.png';


const Projects: React.FC = () => {

    const projectsPage = useRef<HTMLDivElement>(null);

    const imageSource = (skills: string[]) => {
      if (skills.includes(' Vue.js ')) {
        return vue;
      } else if (skills.includes(' React ')) {
        return react;
      } else if (skills.includes(' PHP ')) {
        return php;
      }
      return js;
    };

    Animation(projectsPage);

  return (
    <div className='home-page'>
      <section className="projects" ref={projectsPage}>
        <h2 style={{paddingBottom: '20px'}}>Projects:</h2>
        <div className='projects-links'>
          {projects.map((project) => {
            const imageSrc = imageSource(project.stack);

            return (
              <div key={project.title} className='project-link'>
                <AnimationElement />
                <Link to={project.path}>
                  <h3>{project.title}</h3>
                </Link>
                <div className='project-stack'>
                  <img src={imageSrc} alt="icon" />
                </div>
              </div>
            )
          })}

          <div className='' style={{backgroundColor: 'white'}} >
            <h2 style={{display: 'inline', fontSize: '20px', color: 'rgb(0, 120, 0)'}}>COMING SOON: </h2>
            <h3 style={{display: 'inline', color: 'rgb(0, 0, 155)'}}>PHP Project</h3>
          </div>
        </div>
      </section>
    </div>
  );
}


const AnimationElement: React.FC = () => {
    const arrowRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const interval = setInterval(() => {
            if (arrowRef.current) {
                arrowRef.current.classList.add('arrow-animation');
      
              setTimeout(() => {
                arrowRef.current?.classList.remove('arrow-animation');
              }, 500);
            }
          }, 2500);
      
          return () => {
            clearInterval(interval);
          };
    }, []);
  
    return <div className='project-arrow' style={{color: 'rgb(0, 120, 0)'}} ref={arrowRef}><TiChevronRightOutline /></div>;
};

export default Projects;