import React from 'react';
//import '../../Style/Old-Style.css';

const Home: React.FC = () => {
  return (
    <div className="App">
      <section id="about_me">
        <h2 style={{color: 'black'}}>About Me</h2>
        <h5 style={{color: 'rgba(0, 0, 0, 0.6)', display: 'inline'}}>As of</h5><span id="timeNow"></span>
        <br/><br/>
        <p style={{display: 'inline'}}>I'm a hard-working </p><h4 style={{color:' #1A25A4', display: 'inline'}}>Front-End Engineer</h4><p style={{display: 'inline'}}> with a tint of poetry, bursting with excitement about the future. I'm passionate about this dynamic and innovative industry, and I'm committed to continuous learning and growth.</p>
        <p>I'm easy to work with and prioritize clear communication. I'm always open to new ideas and challenges and I'm eager to contribute my skills and creativity to the industry!</p>
      </section>

      <section id="portrait">
        <img src="" />
      </section>
    </div>
  );
}


export default Home;