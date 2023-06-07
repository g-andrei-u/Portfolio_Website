import React from 'react';
import './Heading.css';


const Heading: React.FC = () => {
    return (
        <header>
            <div className='heading'>
                <div>
                    <h1>{`<Andrei Udeanu/>`}</h1>
                </div>
                <nav>
                    <a>HOME</a>
                </nav>
            </div>
        </header>
    )
}


export default Heading;