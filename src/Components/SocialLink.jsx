import React from 'react';
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'

// social link must be change project by project
const SocialLink = () => {
    return (
        <>
        <a href="https://www.linkedin.com/in/abidur-rahman-abid-7859b0282/" target="_blank"><img src={linkedin} className='social' /></a>
        <a href="https://github.com/abidur-abid" target="_blank"><img src={github} className='social'  /></a>
        <a href="https://www.facebook.com/profile.php?id=100094218716216" target="_blank"><img src={facebook} className='social'/></a>
        </>
    );
};

export default SocialLink;