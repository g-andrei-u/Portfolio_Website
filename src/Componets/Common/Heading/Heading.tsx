import React, { useState } from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
    mode: boolean,
    setMode: () => void
}


const Heading: React.FC<Props> = (props: Props) => {

    const [hamburger, setHamburger] = useState(false);


    return (
        <header>
            <div className={props.mode? "heading heading-color-black" : "heading heading-color-white"}>
                <div>
                    <h1><Link to={'/'}>{`<Andrei Udeanu/>`}</Link></h1>
                </div>
                <nav>
                    <div className='nav'>
                        <Link to={'/'}>HOME</Link>
                        <Link to={'/projects'}>PROJECTS</Link>
                        <Link to={'/about'}>ABOUT ME</Link>
                    </div>

                    <div className='hamburger'>
                        <button onClick={() => hamburger ? setHamburger(false) : setHamburger(true)}><GiHamburgerMenu /></button>
                        <div className= {hamburger ? 'hamburger-bar' : 'nav'}>
                            <Link to={'/'}>HOME</Link>
                            <Link to={'/projects'}>PROJECTS</Link>
                            <Link to={'/about'}>ABOUT ME</Link>
                            <div className={props.mode ? "buttons black" : "buttons white"}>
                                <a onClick={() => props.setMode()} style={{fontSize: '14px'}} >Change Mode</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
};


export default Heading;