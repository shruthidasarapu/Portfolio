import React from "react";
import Title from "../Components/Title";
import SkillsSection from "../Components/SkillsSection";

function SkillsPage() {
  return (
    <div className='SkillsPage'>
      <Title title={"My Skills"} span={"My Skills"} />
      <div className='skills-container'>
        <SkillsSection skill={"React.Js"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"HTML/CSS"} progress={"98%"} width={"98%"} />
        <SkillsSection skill={"Javascript"} progress={"95%"} width={"95%"} />
        <SkillsSection skill={"TypeScript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Redux"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"ReactQuery"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Node.Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"C#/.Net"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Mysql"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"AWS"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Docker"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Github"} progress={"95%"} width={"95%"} />
      </div>
    </div>
  );
}
export default SkillsPage;
