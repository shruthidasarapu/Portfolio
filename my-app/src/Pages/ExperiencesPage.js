import React from 'react';
import Title from '../Components/Title';
import Experiences from '../Components/Experiences';

function ExperiencesPage() {
    return(
        
        <div className="ExperiencesPage">
           <Title title= {'My Experience'} span= {'My Experience'}/> 
           <div className="my-projects">
              <Experiences title= {'Danske Bank'} text= {'Frontend Developer'} desc={'ReactJs,TypeScript,Storybook, ReactQuery, Jest,Docker,Azure Devops'} />
              <Experiences title= {'Skordetid'} text= {'Frontend Developer'} desc={'HTML, CSS, JavaScript, PHP'} />
              
            </div> 
            <Title title= {'My Projects'} span= {'My Projects'}/>
            <div className="my-projects">
              <Experiences title= {'Rate my CV'} text= {'Hack your future'} desc={'ReactJs, NodeJs,JavaScript, Storybook,Mysql,Firebase'} />
              <Experiences title= {'Meal sharing'} text= {'Hack your future'} desc={'ReactJs, NodeJs,Mysql,HTML/CSS, JavaScript,Bootstrap'} />
              <Experiences title= {'Weather app'} text= {'Hack your future'} desc={'HTML/CSS, Javascript, API'} />
              <Experiences title= {'Github user search'} text= {'Hack your future'} desc={'HTML/CSS, Javascript, React.Js, API'} />
            </div> 
        </div>
    )
}
export default ExperiencesPage;