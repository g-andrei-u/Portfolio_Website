import React, { useRef } from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { Animation } from '../../Common/Animation';


interface Props {
  mode: boolean,
  title: string,
  desc: string,
  image: string,
  stack: string[],
  responsive: boolean,
  projectLink: string,
  codeLink: string
}

const Project: React.FC<Props> = ( props: Props ) => {

  const projectPage = useRef<HTMLDivElement>(null);

  Animation(projectPage)

  return (
    <div className={props.mode ? 'home-page home-page-black' : 'home-page home-page-white'}>
      <section className="project" ref={projectPage}>

        <h1>{props.title}</h1>
        <div className="project-details">
          <div className="project-image"> 
            <Link to={props.projectLink} target='_blank' ><img className="Images" src={props.image} /></Link>
          </div>

          <div className="project-description">
            <p><strong>Description: </strong>{props.desc}</p>
            <p style={{margin: '0'}}><strong>Phone Responsive: </strong><strong>{props.responsive ? <strong style={{color: 'rgb(0, 120, 0)'}}>TRUE</strong> : <strong style={{color: 'red'}}>FALSE</strong>}</strong></p>
            <p><strong>Made With: </strong><strong className="stack-color">{`{${props.stack}}`}</strong></p>
            <div className={props.mode ? "buttons black" : "buttons white"}>
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