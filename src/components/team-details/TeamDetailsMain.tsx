import { idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import SingleTeam from './SingleTeam';
import { teamData } from '@/data/team-data';
import PersonalSkills from './PersonalSkills';
import Experience from './Experience';
import Cta from '../home/Cta';

const TeamDetailsMain = ({id}:idType) => {
    const filterData = teamData.find((item)=> item.id == id)
    const pageSmallTitle = filterData ? filterData.name : '';
    return (
        <>
            <Breadcrumb pageTitle='Team Details' pageSmallTitle={pageSmallTitle}/>
            <SingleTeam filterData={filterData}/>
            <PersonalSkills/> 
            <Experience/>
            <Cta/>
        </>
    );
};

export default TeamDetailsMain;