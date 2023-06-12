import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Heading from '../Common/Heading';
import '../../Style/General.css'
import Projects from '../Projects/Projects';
import Project from '../Projects/Project/Project';
import { projects } from '../Projects/Assets/data';
import Footer from '../Common/Footer';
import Skills from '../Skills/Skills';
import About from '../About/About';


const Pages: React.FC = () => {
  return (
  <>
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        {projects.map((project) => (
          <Route path={project.path} element={
            <Project 
            title={project.title} 
            desc={project.desc} 
            image={project.image} 
            stack={project.stack}
            projectLink={project.projectLink} 
            codeLink={project.codeLink} 
            />
          } />
        ))}
        <Route path='/skills' element={<Skills/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}


export default Pages;