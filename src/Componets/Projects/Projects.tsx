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
import ts from '../Images/Typescript.png';
import redux from '../Images/redux.png';
import sass from '../Images/sass.png';


interface Props {
  mode: boolean
}

const Projects: React.FC<Props> = (props: Props) => {

    const projectsPage = useRef<HTMLDivElement>(null);

    const imageSource = (skills: string[]) => {
      if (skills.includes(' Vue.js ')) {
        return vue;
      } else if (skills.includes(' React.js ')) {
        return react;
      } else if (skills.includes(' PHP ')) {
        return php;
      }
      return js;
    };

    const secondImageSource = (skills: string[]) => {
      if (skills.includes(' TypeScript ')) {
        return ts;
      } else if (skills.includes(' Redux ')) {
        return redux;
      } else if (skills.includes(' Sass ')) {
        return sass;
      }
      return '';
    };

    Animation(projectsPage);

  return (
    <div className={props.mode ? 'home-page home-page-black' : 'home-page home-page-white'}>
      <section className="projects" ref={projectsPage}>
        <h2 style={{paddingBottom: '20px'}}>Projects:</h2>
        <div className='projects-links'>
          {projects.map((project) => {
            const imageSrc = imageSource(project.stack);
            const secondImageSrc = secondImageSource(project.stack);

            return (
              <div key={project.title} className='project-link'>
                <AnimationElement />
                <Link to={project.path}>
                  <h3>{project.title}</h3>
                </Link>
                <div className='project-stack'>
                  <img className={secondImageSrc === '' ? 'none' : ''} src={imageSrc} alt="icon" />
                  <img style={{padding: "0 0 5px 0"}} src={secondImageSrc} alt="icon" />
                </div>
              </div>
            )
          })}

          <div>
            <h2 className='coming-soon'>COMING SOON: </h2>
            <h3 className='coming-project'>Laravel Project</h3>
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
  
    return <div className='project-arrow' ref={arrowRef}><TiChevronRightOutline /></div>;
};

export default Projects;