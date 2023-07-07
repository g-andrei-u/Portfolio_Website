import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


interface Props {
    mode: boolean
}

const Footer: React.FC<Props> = (props: Props) => {
    return (
        <footer>
            <div className={props.mode ? 'footer footer-black' : 'footer footer-white'}>
                <div>
                    <h3>Email:<Link to='mailto: udeanugheorgheandrei@gmail.com'>udeanugheorgheandrei@gmail.com</Link></h3>
                </div>
                <div className='footer-links'>
                    <Link to='https://www.linkedin.com/in/andrei-udeanu/' target='_blank'>
                        <FaLinkedin />
                    </Link>
                    <Link to='https://github.com/g-andrei-u' target='_blank'>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </footer>
    )
};


export default Footer;