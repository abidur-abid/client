
import SectionTitle from '../../Components/SectionTitle';
import AboutImage from '../../Components/AboutImage';
import Education from '../../Components/Education';
import AboutSummary from '../../Components/AboutSummary';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
       <>
       <Helmet>
        <title>Abid | About</title>
       </Helmet>
        <SectionTitle title={'My Qualification'}></SectionTitle>
        <AboutImage></AboutImage>
        <Education></Education>
        <AboutSummary></AboutSummary>
       </>
    );
};

export default About;