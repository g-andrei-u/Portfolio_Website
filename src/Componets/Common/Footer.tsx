import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


const Footer: React.FC = () => {
    return (
        <footer>
            <div className='footer'>
                <div>
                    <h3 style={{fontSize: '16px'}}>Email:<Link style={{fontSize: '16px'}} to='mailto: udeanugheorgheandrei@gmail.com'>udeanugheorgheandrei@gmail.com</Link></h3>
                </div>
                <div className='footer-links'>
                    <Link to='https://www.linkedin.com/in/andrei-udeanu/' target='_blank'>
                        <FaLinkedin />
                    </Link>
                    <Link to='https://www.linkedin.com/in/andrei-udeanu/' target='_blank'>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </footer>
    )
};


export default Footer;