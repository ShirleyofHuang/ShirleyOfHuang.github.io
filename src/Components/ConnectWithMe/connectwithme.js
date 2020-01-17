import React from 'react';
import './connectwithme.css';
import laptop from '../AboutMe/laptopcafe.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
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



export class ConnectWithMe extends React.Component{

    render(){
        return (
            <div className="ConnectWithMe">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"/>
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

                <div class="container-fluid">
                    <div class="jumbotron">
                    <div class="container">
                        <div class="column">
                            <div className="title">
                                <h2 class="connect">CONNECT WITH ME</h2>
                                <hr></hr>
                            </div>
                            <div class="column">
                            
                            <SocialIcon class="icons" url="https://linkedin.com/in/yunqing-shirley-huang" network="linkedin" label="LinkedIn"></SocialIcon>
                            <SocialIcon class="icons" url="https://github.com/ShirleyofHuang" network="github" label="GitHub"></SocialIcon>
                            <SocialIcon class="icons" url="#" network="email" label="Email"></SocialIcon>

                            </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConnectWithMe; 

