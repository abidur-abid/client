import React from 'react';
import Banner from '../../Components/Banner';
import SectionTitle from '../../Components/SectionTitle';
import AboutSummary from '../../Components/AboutSummary';
import ContactSummary from '../../Components/ContactSummary';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Abid | Home</title>
        </Helmet>
         <Banner></Banner>
         <SectionTitle title={'About Me'}></SectionTitle>
         <AboutSummary></AboutSummary>
         <SectionTitle title={'Contact With Me'}></SectionTitle>
         <ContactSummary></ContactSummary>
        </>
    );
};

export default Home;