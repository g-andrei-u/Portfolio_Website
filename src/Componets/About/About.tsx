import React, { useRef } from 'react';
import Me from '../Images/me.jpg';
import './About.css';
import { Animation } from '../Common/Animation';



const About: React.FC = () => {
  const aboutPage = useRef<HTMLDivElement>(null);

  Animation(aboutPage);


  return (
    <div className='home-page'>
      <div className='about' ref={aboutPage}>
        <section className="about-portrait">
          <img src={Me} alt='Me' />
        </section>

        <section className="about-text">
          <div className='text'>
            <h3 style={{color: '#1A25A4', display: 'inline'}}>Front-End Engineer</h3><p style={{display: 'inline'}}> with a tint of poetry, bursting with excitement about the future. I'm passionate about this dynamic and innovative industry, and I'm committed to continuous learning and growth.</p>
            <p>I'm easy to work with and prioritize clear communication. I'm always open to new ideas and challenges and I'm eager to contribute my skills and creativity to the industry!</p>
          </div>
        </section>
      </div>
    </div>
  );
}


export default About;