import React from 'react';
import Title from '../Components/Title';
import Projects from '../Components/Projects';

function ProjectsPage() {
    return(
        <div className="ProjectsPage">
            <Title title= {'My Projects'} span= {'My Projects'}/>
            <div className="my-projects">
              <Projects title= {'Rate my CV'} place= {'Hack your future'} desc={'ReactJs, NodeJs,My sql,Firebase'} />
              <Projects title= {'Meal sharing'} place= {'Hack your future'} desc={'ReactJs, NodeJs,My sql,html/css,Bootstrap'} />
              <Projects title= {'Fastest presser game'} place= {'Hack your future'} desc={'Html/Css, Javascript'} />
            </div> 
        </div>
    )
}
export default ProjectsPage;