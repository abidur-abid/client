import React from 'react';
import logo from '../Images/logo.png'
import SocialLink from './SocialLink';


const Footer = () => {
    return (
        <footer>
            <div className="custom-container">
                <div className="footer-custom-row">
                     <img src={logo} className=' mx-auto custom-logo'/>
                </div>
                <div className='custom-row'>
                    <p className='font-bold mx-auto'>Copyrights 2023. All Rights Reserved. Designed By Abid</p>
                </div>
                <div className='flex justify-center gap-4 my-2 items-center'>
                    <SocialLink></SocialLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;