import React from 'react';
import './projects.css';
import ProjectsBox from '../ProjectsBox/projectsbox';
import python from '../ProjectsBox/pythontreemap.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsBoxtwo from '../ProjectsBox/projectsboxtwo';



export class Projects extends React.Component{

    render(){
        return (
            <div className="Projects">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <div class="containter">
                <div class="column">
                    {/* <div class="jumbotron">
                        <p>Projects: either made outside of school or as a personal project.</p>
                    </div> */}
                    <div className="title">
                        <br></br>
                        <br></br>
              <h2 class="myprojects">HERE'S SOME OF WHAT I'VE DONE</h2>
              <hr></hr>
            </div>

                {/* <ProjectsBox image={python} title="Python TreeMap" description="Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it."></ProjectsBox>
                <ProjectsBox image={python} title="Java Android Game" description="Created in a group of 6, we made an android game using Android Studio as well as SQLite. All work was done with GitHub while implementing
                the MVP archticheture while maintaining Software Design Principles."></ProjectsBox>
                <ProjectsBox image={python} title="Verilog Simon Says Game" description="Using verilog, an implementation of Simon Says was made. Many aspects of the 
                game required designing a DFA and implementing all other modules accordingly. Designing circuits was the most challenging part."></ProjectsBox> */}
                <ProjectsBox></ProjectsBox>
                </div>
                <div class="container-fluid padding">
                    <div class="row welcome text-center">
                        <div class="col-12">
                            <h1 class="display-4">Projects</h1>
                        </div>
                        
                    </div>
                    {/* <ProjectsBoxtwo></ProjectsBoxtwo> */}
                </div>
            </div>
            

           
            </div>
        )

    }
}

export default Projects;