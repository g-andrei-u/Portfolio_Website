import React, { useRef } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { Animation } from '../../Common/Animation';


interface Props {
  title: string,
  desc: string,
  image: string,
  stack: string[],
  projectLink: string,
  codeLink: string
}

const Project: React.FC<Props> = ( props: Props ) => {

  const projectPage = useRef<HTMLDivElement>(null);

  Animation(projectPage)

  return (
    <div className='home-page'>
      <section className="project" ref={projectPage}>

        <h1>{props.title}</h1>
        <div className="project-details">
          <div className="project-image"> 
            <Link to={props.projectLink} target='_blank' ><img className="Images" src={props.image} /></Link>
          </div>

          <div className="project-description">
            <p><strong>Description: </strong>{props.desc}</p>
            <p><strong>Made With: </strong><strong style={{color: 'rgb(0, 120, 0)',}}>{`{${props.stack}}`}</strong></p>
            <div className="buttons">
              <Link to={props.projectLink} target='_blank' >Visit Site</Link>
              <Link to={props.codeLink} target='_blank' >View Code</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;