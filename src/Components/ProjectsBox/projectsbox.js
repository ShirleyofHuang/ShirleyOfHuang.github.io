import React from 'react';
import './projectsbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './pythontreemap.png';
import simon from './simonsays.jpg';


export class ProjectsBox extends React.Component{

    render(){
        return (
            <div className="ProjectsBox">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
                <div class ="container">
                    <div class ="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>Python Tree Map</h4>
                                    <h6><i>Completed.</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={simon} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>Verilog Simon Says</h4>
                                    <h6><i>Completed.</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>Automated Fan</h4>
                                    <h6><i>Completed.</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>Study Penguin</h4>
                                    <h6><i>In Progress...</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>Java Android Game</h4>
                                    <h6><i>Completed.</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class = "thumbnail">
                                <img src={python} alt="..." height="75" width = "75"></img>
                                <div class = "caption">
                                    <h4>React&Bootstrap Website</h4>
                                    <h6><i>In Progress...</i></h6>
                                    <p>Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it.</p>
                                    <p><a href="#" class="btn btn-outline-secondary">See Project</a></p>
                                </div>
                            </div>
                    </div>
                    </div>
                    </div>
                    </div>
              
                
                    
                

            
        )

    }
}

export default ProjectsBox;