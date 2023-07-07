import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Heading from '../Common/Heading/Heading';
import '../../Style/General.css'
import Projects from '../Projects/Projects';
import Project from '../Projects/Project/Project';
import { projects } from '../Projects/Assets/data';
import Footer from '../Common/Footer/Footer';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Mode from '../Common/Mode';


const Pages: React.FC = () => {
  const [mode, setMode] = useState(false);

  const modeOnClick = () => {
    setMode(mode ? false : true);
  }


  return (
  <>
    <BrowserRouter>
      <Heading 
      mode={mode} 
      setMode={modeOnClick} />
      <Mode 
      mode={mode}
      setMode={modeOnClick} />
      <Routes>
        <Route path='/' element={<Home mode={mode}/>} />
        <Route path='/projects' element={<Projects mode={mode}/>} />
        {projects.map((project) => (
          <Route path={project.path} element={
            <Project 
            mode={mode}
            title={project.title} 
            desc={project.desc} 
            image={project.image} 
            stack={project.stack}
            responsive={project.responsive}
            projectLink={project.projectLink} 
            codeLink={project.codeLink} 
            />
          } />
        ))}
        <Route path='/skills' element={<Skills mode={mode}/>} />
        <Route path='/about' element={<About mode={mode}/>} />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  </>
  )
}


export default Pages;