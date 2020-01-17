import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title} from './Components/Title/title';
import {Home} from './Components/Home/home';
import {Slideshows} from './Components/Slideshow/slideshow';
import Projects from './Components/Projects/projects';
import python from './python.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsBox from './Components/ProjectsBox/projectsbox';
import {AboutMe} from './Components/AboutMe/aboutme';
import {NavBar} from './Components/NavBar/navbar';
import {ConnectWithMe} from './Components/ConnectWithMe/connectwithme';
import {NewNavBar} from './Components/NewNavBar/newnavbar';
import { Parallax, Background } from 'react-parallax';
import {ParalaxPics} from './Components/ParalaxPics/paralaxpics';
import {ParalaxPicsProject} from './Components/ParalaxPics/paralaxpicproject';
import {Travel} from './Components/Travel/travel';
import {ParallaxDog} from './Components/ParalaxPics/parallaxdog';
import {History} from './Components/History/history';
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
         <NewNavBar/>
        <ParalaxPics></ParalaxPics>
        {/* <NavBar></NavBar> */}
       

            {/* <div className="AboutMe"> */}
              <AboutMe></AboutMe>
            {/* </div> */}
            <ParalaxPicsProject></ParalaxPicsProject>
            {/* <div className="Projects"> */}
              <Projects></Projects>

              <ParallaxDog></ParallaxDog>

            {/* </div> */}
            <Travel></Travel>

            <History></History>

            {/* <ParallaxDog></ParallaxDog> */}

            
            {/* <div className="Connect"> */}
              <ConnectWithMe></ConnectWithMe>

              
            {/* </div> */}

            {/* <div className="Bootstrap"> */}

            {/* </div> */}
      
      {/* </div> */}
    
    </div>
  );
}

export default App;
