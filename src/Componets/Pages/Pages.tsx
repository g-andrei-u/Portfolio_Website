import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Heading from '../Common/Heading';
import '../../Style/General.css'
import Projects from '../Projects/Projects';


const Pages: React.FC = () => {
  return (
  <>
    <BrowserRouter>
    <Heading />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}


export default Pages;