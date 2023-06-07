import React, { useEffect, useRef } from 'react';
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
          <div>
          <h4 style={{color: 'rgb(0, 0, 155)', display: 'inline'}}>As of</h4><span style={{color: 'rgb(0, 0, 155)', display: 'inline'}} ref={timeEl} id="timeNow"></span>
          <br/><br/>
          <h1 style={{color: 'rgb(0, 0, 155)', display: 'inline'}}>Front-End Engineer</h1><p style={{display: 'inline'}}> with a tint of poetry, bursting with excitement about the future.</p>
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