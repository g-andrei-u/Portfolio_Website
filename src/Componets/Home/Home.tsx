import React, { useEffect, useRef, /*useState*/ } from 'react';
import { Link } from 'react-router-dom';
import Me from '../Images/me.jpg';
import './Home.css';
import { Animation } from '../Common/Animation';


interface Props {
  mode: boolean
}

const Home: React.FC<Props> = (props: Props) => {

  //const [hover, setHover] = useState(false);
  const HomePage = useRef<HTMLDivElement>(null);
  let timeElement = useRef<HTMLSpanElement>(null);

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
    if (timeElement.current) {
    timeElement.current.innerHTML = ` ${day} ${month} ${year} ${("0" + h).substr(-2)} ${("0" + m).substr(-2)} ${("0" + s).substr(-2)}`
    }
  }

  useEffect(() => {
    const interval = setInterval(time, 100);
    return () => {clearInterval(interval)}
  }, [])

  Animation(HomePage)


  return (
    <div className={props.mode ? 'home-page home-page-black' : 'home-page home-page-white'}>
      <div className='home' ref={HomePage}>
        <section className="about-me">
          <div className='text'>
            <h4 className='date'>Date: </h4><span className='date' ref={timeElement} id="timeNow"></span>
            <br/><br/>
            <h4 style={{display: 'inline'}}><h2 style={{display: 'inline'}}>Hi 👋🏻, </h2> my name is <h1 className='name'>Andrei</h1> and I am </h4>
            <h4 style={{display: 'inline'}}>a passionate </h4><h1 className='date'>Front-End Engineer </h1><h4 style={{display: 'inline'}}>converting blank pages into exciting applications</h4>
          </div>

          <div className={props.mode ? "buttons black" : "buttons white"}>
            <Link to={'/projects'}>View Projects</Link>
            <Link to={'/skills'}>View Skills</Link>  
          </div>
        </section>


        <section className="portrait">
          <img /*onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}*/ src={Me} alt='Me' />
          {/*<p className={hover ? 'show' : 'none'}>Contact Me!</p>*/}
        </section>
      </div>
    </div>
  );
}


export default Home;