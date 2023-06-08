import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Me from '../Images/me.jpg';
import './Home.css';


const Home: React.FC = () => {


  let timeEl = useRef<HTMLSpanElement>(null);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];


  function time() {

    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let day = d.getDate();
    let month = monthNames[d.getMonth()];
    let year = d.getFullYear();
    if (timeEl.current) {
    timeEl.current.innerHTML = ` ${day} ${month} ${year} ${("0" + h).substr(-2)} ${("0" + m).substr(-2)} ${("0" + s).substr(-2)}`
    }
  }

  useEffect(() => {
    const interval = setInterval(time, 100);
    return () => {clearInterval(interval)}
  }, [])


  return (
    <div className='home-page'>
      <div className='home'>
        <section className="about-me">
          <div className='text'>
            <h4 style={{color: 'rgb(0, 0, 155)', display: 'inline'}}>Date: </h4><span style={{color: 'rgb(0, 0, 155)', display: 'inline'}} ref={timeEl} id="timeNow"></span>
            <br/><br/>
            <h4 style={{display: 'inline'}}><h2 style={{display: 'inline'}}>Hi 👋🏻, </h2> my name is <h1 style={{display: 'inline', color: 'rgb(0, 120, 0)'}}>Andrei</h1> and I am </h4>
            <h4 style={{display: 'inline'}}>passionate </h4><h1 style={{color: 'rgb(0, 0, 155)', display: 'inline'}}>Front-End Engineer</h1><h4 style={{display: 'inline'}}>converting blank pages into exciting applications</h4>
          </div>

          <div className='buttons'>
            <Link to={'/projects'}>View Projects</Link>
            <Link to={'/skills'}>View Skills</Link>  
          </div>
        </section>


        <section className="portrait">
          <img src={Me} alt='Me' />
        </section>
      </div>
    </div>
  );
}


export default Home;