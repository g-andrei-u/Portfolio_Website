import React, { useRef } from 'react';
import './Skills.css';
import js from '../Images/javascript.png';
import ts from '../Images/Typescript.png';
import react from '../Images/React.png';
import html_css from '../Images/html_css.png';
import redux from '../Images/redux.png';
import bash from '../Images/bash.png';
import vue from '../Images/Vue.png';
import php from '../Images/php.png';
import sass from '../Images/sass.png';
import { Animation } from '../Common/Animation';


const Skills: React.FC = () => {

    const skillsPage = useRef<HTMLDivElement>(null)

    Animation(skillsPage)


  return (
    <div className='home-page'>
        <section className="skills" ref={skillsPage}>   
            <div>
                <h2>Proficient Skills:</h2>
                <div className="main-skills">
                    <div className="skill">
                        <img id="img-html_css" src={html_css} /><h4 style={{color: 'rgb(0, 120, 0)'}}>HTML/CSS</h4>
                    </div>
                    <div className="skill">
                        <img src={sass} /><h4 style={{color: 'rgb(0, 120, 0)'}}>Sass</h4>
                    </div>
                    <div className="skill">
                        <img src={js} /><h4 style={{color: 'rgb(0, 120, 0)'}}>JavaScript</h4>
                    </div>
                    <div className="skill">
                        <img src={ts} /><h4 style={{color: 'rgb(0, 120, 0)'}}>TypeScript</h4>
                    </div>
                    <div className="skill">
                        <img src={php} /><h4 style={{color: 'rgb(0, 120, 0)'}}>PHP</h4>
                    </div>
                    <div className="skill">
                        <img src={react} /><h4 style={{color: 'rgb(0, 120, 0)'}}>React</h4>
                    </div>
                    <div className="skill">
                        <img src={vue} /><h4 style={{color: 'rgb(0, 120, 0)'}}>Vue.js</h4>
                    </div>
                </div>
            </div>

            <div>
                <h2>Familiar Skills:</h2>
                <div className="other-skills">
                    <div className="skill">
                        <img src={redux} /><h4 style={{color: 'rgb(0, 120, 0)'}}>Redux</h4>
                    </div>
                    <div className="skill">
                        <img src={bash} /><h4 style={{color: 'rgb(0, 120, 0)'}}>Bash</h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Skills;