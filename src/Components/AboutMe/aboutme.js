import React from 'react';
import './aboutme.css';
import laptop from '../AboutMe/laptopcafe.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from './mepic.jpg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    UncontrolledCollapse,
    Button,
    Card, 
    CardBody
  } from 'reactstrap';



export class AboutMe extends React.Component{

    render(){
        return (
            <div className="AboutMe">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"/>

            <div class="container">
                <div class="column">
            <div className="title">
              <h2 class="thisisme">Who Is Shirley?</h2>
              <hr></hr>
            </div>
            
            <div className="profilepic">
                <img class="img-circle" width="117px" height="117px" src={me} alt=""></img>
                </div>
            
            <div className="intro">
                <p>Hello, <br></br>
                    I'm an aspiring <b>computer scientist </b>with big dreams and big ambitions. <br></br>
                    With a can-do attitude and a team player, I believe I am adaptable and can make 
                    anything possible. <br></br>
                    I love solving problems and puzzles, and mysteries intrigue me, so I'm up for a challenge
                    anytime! <br></br>
                    <br></br>

                </p>
            </div>
            
            <div className="paragraph">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Experiences</h4>
                    <p>
                    I have not only been applying myself academically, but also have been making an effort outside of academia as well
                    by participating in <b>clubs</b> or working at <b>internships</b>, or <b>travelling</b> around the world.
                    </p>
                    {/* <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p> */}
                    <div>
                        <Button color="secondary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Learn More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler1">
                        <Card>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
                    </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Skills</h4>
                    <p>I have experience with <b>Java, Python, C++, Verilog</b> among many <b>other languages</b>.
                        I have worked with designing UI as well as websites (like the one you are reading!

                    </p>
                    {/* <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p> */}
                    <div>
                        <Button color="secondary" id="toggler2" style={{ marginBottom: '1rem' }}>
                        Learn More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                                <h6>Computer Languages</h6>
                                <ul className="skills-list">
                                    <li><b>Java:</b> Worked extensively with Java to create Android Apps and is very familiar 
                                        with the language as a result.
                                    </li>
                                    <li><b>Python: </b>First language learnt and have worked with it fully in first year 
                                        to complete school assignments.
                                    </li>
                                    <li><b>Verilog: </b>Learnt during school and used it to create a game. Have worked with it 
                                        to create circuits as well that are able to be used on a FPGA board.
                                    </li>
                                    <li><b>React: </b>Used React and Bootstrap to create a interactive website as a personal side project</li>
                                    <li><b>C++: </b>Worked with C++ to create simple widget calculators and notepads, as well as worked with documenting
                                        C++ code during internship.</li>
                                </ul>
                                
                                <h6>Others</h6>
                                <ul className="skills-list">
                                    <li>Trilingual in English, French, and Mandarin</li>
                                    <li>Fast learner and able to work under a fast paced environment and high stress environments</li>
                                    <li>Mandarin</li>
                                </ul>
                                To see how read more, go check out my projecs!
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>

                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <h4>Courses</h4>
                    <p>
                    I am currently attending the <b>University of Toronto</b> as a second year student, and have completed many 
                    courses from theory to practice. I have also been able to maintain a GPA of around 3.6.</p>
                    {/* <p><a href="#" class = "btn btn-dark" role ="button">Learn More</a></p> */}
                    <div>
                        <Button color="secondary" id="toggler3" style={{ marginBottom: '1rem' }}>
                        Learn More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                            <CardBody>
                                <h6>Completed Courses</h6>
                                <ul className="courses-list">
                                    <li><b>Software Design</b></li>
                                    <li><b>Computer Organization</b></li>
                                    <li><b>Introduction to Theory of Computation</b></li>
                                </ul>
                                <h6>Courses in Progress</h6>
                                <ul className="courses-list">
                                    <li><b>Software Tools and Systems Programming</b></li>
                                    <li><b>Data Structures and Analysis</b></li>
                                </ul>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
                <div class="container">
                <p>
                    <br></br>
                    <a href="#" class = "btn btn-dark" role ="button">Get Resume</a></p>
                

                </div>

                </div>

            </div>
              </div>

              </div>
              </div>
          
          
        )
    }
}