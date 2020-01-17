import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

import './newnavbar.css';


export class NewNavBar extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            const isTop = window.scrollY > 100;
            const nav = document.getElementById('nav');
            if (isTop){
                nav.classList.add('scrolled');
            }else{
                nav.classList.remove('scrolled');
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }
    render(){
        return (
            <div className="newnavbar" >
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            
            <div className="nav" class="nav">
                 <Navbar expand="md" fixed="top" position="fixed" id="nav" class="nav">
                    <NavbarBrand class="navbarcontent" href="/"><h4 class="navbarcontent">SHIRLEY</h4></NavbarBrand>
                    <Nav className="mr-auto" class="navbar" navbar>
                        <NavItem>
                        <NavLink class="navbarcontent"href="/components/"><h5 class="navbarcontent">ABOUT ME</h5></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink class="navbarcontent"href="https://github.com/ShirleyOfHuang"><h5 class="navbarcontent">GITHUB</h5></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink class="navbarcontent"href="/projects/"><h5 class="navbarcontent">PROJECTS</h5></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink class="navbarcontent"href="travels"><h5 class="navbarcontent">TRAVEL</h5></NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>get to know me</NavbarText>
                   
                </Navbar>
                </div>
                </div>
               
              
        )
    }
}


export default NewNavBar;