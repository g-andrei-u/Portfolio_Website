import React from 'react';
import './Heading.css';
import { Link } from 'react-router-dom';


const Heading: React.FC = () => {
    return (
        <header>
            <div className='heading'>
                <div>
                    <h1>{`<Andrei Udeanu/>`}</h1>
                </div>
                <nav>
                    <Link to={'/'}>HOME</Link>
                    <Link to={'/projects'}>PROJECTS</Link>
                </nav>
            </div>
        </header>
    )
};


export default Heading;