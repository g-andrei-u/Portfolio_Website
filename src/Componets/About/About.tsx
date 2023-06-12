import React from 'react';
import Me from '../Images/me.jpg';
import './About.css';


const About: React.FC = () => {
  return (
    <div className='home-page'>
      <div className='about'>
        <section className="about-portrait">
          <img src={Me} alt='Me' />
        </section>

        <section className="about-text">
          <div className='text'>
            <h3 style={{color: '#1A25A4', display: 'inline'}}>Front-End Engineer</h3><h3 style={{display: 'inline'}}> with a tint of poetry, bursting with excitement about the future. I'm passionate about this dynamic and innovative industry, and I'm committed to continuous learning and growth. and I am </h3>
            <h3 style={{display: 'inline'}}>I'm easy to work with and prioritize clear communication. I'm always open to new ideas and challenges and I'm eager to contribute my skills and creativity to the industry!</h3>
          </div>
        </section>
      </div>
    </div>
  );
}


export default About;