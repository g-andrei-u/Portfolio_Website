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
import laravel from '../Images/Laravel.png';
import node from '../Images/node.png';
import { Animation } from '../Common/Animation';

interface Props {
    mode: boolean
  }


const Skills: React.FC<Props> = (props: Props) => {
    const skillsPage = useRef<HTMLDivElement>(null)

    Animation(skillsPage)


  return (
    <div className={props.mode ? 'home-page home-page-black' : 'home-page home-page-white'}>
        <section className="skills" ref={skillsPage}>   
            <div>
                <h2>Proficient Skills:</h2>
                <div className="main-skills">
                    <div className="skill">
                        <img id="img-html_css" src={html_css} /><h4 className='skill-name'>HTML/CSS</h4>
                    </div>
                    <div className="skill">
                        <img src={sass} /><h4 className='skill-name'>Sass</h4>
                    </div>
                    <div className="skill">
                        <img src={js} /><h4 className='skill-name'>JavaScript</h4>
                    </div>
                    <div className="skill">
                        <img src={ts} /><h4 className='skill-name'>TypeScript</h4>
                    </div>
                    <div className="skill">
                        <img src={php} /><h4 className='skill-name'>PHP</h4>
                    </div>
                    <div className="skill">
                        <img src={node} /><h4 className='skill-name'>Node.js</h4>
                    </div>
                    <div className="skill">
                        <img src={react} /><h4 className='skill-name'>React.js</h4>
                    </div>
                    <div className="skill">
                        <img src={vue} /><h4 className='skill-name'>Vue.js</h4>
                    </div>
                </div>
            </div>

            <div>
                <h2>Familiar Skills:</h2>
                <div className="other-skills">
                    <div className="skill">
                        <img src={laravel} /><h4 className='skill-name'>Laravel</h4>
                    </div>
                    <div className="skill">
                        <img src={redux} /><h4 className='skill-name'>Redux</h4>
                    </div>
                    <div className="skill">
                        <img src={bash} /><h4 className='skill-name'>Bash</h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Skills;