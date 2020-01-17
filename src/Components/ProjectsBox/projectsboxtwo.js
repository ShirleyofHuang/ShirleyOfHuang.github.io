import React from 'react';
import './projectsbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import python from './pythontreemap.png';


export class ProjectsBoxtwo extends React.Component{

    render(){
        return (
            <div className="ProjectsBox">
                <div class="container-fluid padding">
                <div class="row padding">
                <div class="col-md-4">
                <div class="mt-5">
                        <div class="card" >
                            <img class="card-img-top" src={python} height="200px" width="340px"></img>
                            <div class="card-body">
                                <h4 class="card-title">
                                    Python Tree Map
                                </h4>
                                <p class="card-text">
                                Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it
                                </p>
                                <a href="#" class="btn btn-outline-secondary">See Project</a>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-md-4">
                    <div class="mt-5">
                        <div class="card">
                            <img class="card-img-top" src={python} height="200px" width="340px"></img>
                            <div class="card-body">
                                <h4 class="card-title">
                                    Automated Fan
                                </h4>
                                <p class="card-text">
                                Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it
                                </p>
                                <a href="#" class="btn btn-outline-secondary">See Project</a>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-md-4">
                    <div class="mt-5">
                        <div class="card">
                            <img class="card-img-top" src={python} height="200px" width="340px"></img>
                            <div class="card-body">
                                <h4 class="card-title">
                                    Java Android Game
                                </h4>
                                <p class="card-text">
                                Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it
                                </p>
                                <a href="#" class="btn btn-outline-secondary">See Project</a>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-md-4">
                    <div class="mt-5">
                        <div class="card">
                            <img class="card-img-top" src={python} height="200px" width="340px"></img>
                            <div class="card-body">
                                <h4 class="card-title">
                                    Study Penguin
                                </h4>
                                <p class="card-text">
                                Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it
                                </p>
                                <a href="#" class="btn btn-outline-secondary">See Project</a>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-md-4">
                    <div class="mt-5">
                        <div class="card">
                       
                            <img class="card-img-top" src={python} height="200px" width="340px"></img>
                            <div class="card-body">
                                <h4 class="card-title">
                                Verilog Simon Says
                                </h4>
                                <p class="card-text">
                                Using python, a visual representation of a tree was made in order 
        to see the different levels there were to a folder in a computer. Recursion was mainly used to implement it                                </p>
                                <a href="#" class="btn btn-outline-secondary">See Project</a>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default ProjectsBoxtwo;
