import React, { useState } from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Heading: React.FC = () => {

    const [hamburger, setHamburger] = useState(false);


    return (
        <header>
            <div className='heading'>
                <div>
                    <h1>{`<Andrei Udeanu/>`}</h1>
                </div>
                <nav>
                    <div className='nav'>
                        <Link to={'/'}>HOME</Link>
                        <Link to={'/projects'}>PROJECTS</Link>
                    </div>

                    <div className='hamburger'>
                        <button onClick={() => hamburger ? setHamburger(false) : setHamburger(true)}><GiHamburgerMenu /></button>
                        <div className= {hamburger ? 'hamburger-bar' : 'nav'}>
                            <Link to={'/'}>HOME</Link>
                            <Link to={'/projects'}>PROJECTS</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
};


export default Heading;