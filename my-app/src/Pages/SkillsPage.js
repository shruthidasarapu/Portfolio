import React from 'react';
import Title from '../Components/Title';
import SkillsSection from '../Components/SkillsSection';

function SkillsPage() {
    return(
        <div className="SkillsPage">
           
            <Title title= {'My Skills'} span= {'My Skills'}/>
            <div className="skills-container">
            <SkillsSection skill={'React Js'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'HTML/CSS'} progress= {'90%'} width= {'90%'} />
            <SkillsSection skill={'Javascript'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'Node Js'} progress= {'70%'} width= {'70%'} />
            <SkillsSection skill={'Database'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'Github'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'C#'} progress= {'50%'} width= {'50%'} />
            <SkillsSection skill={'PHP'} progress= {'50%'} width= {'50%'} />
            </div>
        </div>
    )
}
export default SkillsPage;