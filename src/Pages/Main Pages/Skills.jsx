import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

import Skill from '../../Components/Skill';
import SkillBanner from '../../Components//SkillBanner';
import { Helmet } from 'react-helmet-async';
import SkillBar from '../../Components/Skillbar';

const Skills = () => {
    return (
        <>
        <Helmet>
          <title>Abid | Skills</title>
        </Helmet>
          <SectionTitle title={'My Skills'}></SectionTitle>
          

          <Skill></Skill>
          
          <SkillBanner></SkillBanner>
          <SkillBar></SkillBar>
        </>
    );
};

export default Skills;