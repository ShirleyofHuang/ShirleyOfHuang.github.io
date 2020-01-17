import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import temp from '../NavBar/temp.png'


export class NavBar extends React.Component{

    render(){
        return (
            <div className="Home">
                <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
              <nav class="navbar navbar-expand-md navbar-light bg-dark sticky-top fixed-top" sticky="top">
              <div class="container-fluid">
                  <a class="navbar-brand" href="#"><img src={temp} height="50px" width="50px"></img></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item">
                              <a class="nav-link active" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">About Me</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Projects</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Connect With Me</a>
                          </li>
                      </ul>
                  </div>
                  </div>
              </nav>
            </div>
        )
    }
}

export default NavBar; 