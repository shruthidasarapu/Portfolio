import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
// import SkillsSection from '../Components/SkillsSection';
import Education from "../Components/Education";

function AboutPage() {
  return (
    <div className='AboutPage'>
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      {/* <Title title= {'My Skills'} span= {'My Skills'}/>
            <div className="skills-container">
            <SkillsSection skill={'React Js'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'Html/Css'} progress= {'90%'} width= {'90%'} />
            <SkillsSection skill={'Javascript'} progress= {'70%'} width= {'70%'} />
            <SkillsSection skill={'Node Js'} progress= {'60%'} width= {'60%'} />
            <SkillsSection skill={'Database'} progress= {'80%'} width= {'80%'} />
            <SkillsSection skill={'Github'} progress= {'60%'} width= {'60%'} />
            <SkillsSection skill={'C#'} progress= {'50%'} width= {'50%'} /> 
            </div>*/}
      <Title title={"Education"} span={"Education"} />
      <div className='education'>
        <Education
          title={"Web Development"}
          text={"Hack Your Future 2021, Copenhagen"}
        />
        <Education title={"Coding"} text={"Redi school 2020, Copenhagen"} />
        <Education
          title={"Danish Language PD3"}
          text={"Hellerup Sprøg Skole 2019, Lyngby"}
        />
        <Education
          title={"Masters in Engineering"}
          text={"JNT University 2012, India"}
        />
        <Education
          title={"Bachelors in Engineering"}
          text={"JNT University 2009, India"}
        />
      </div>
    </div>
  );
}
export default AboutPage;
