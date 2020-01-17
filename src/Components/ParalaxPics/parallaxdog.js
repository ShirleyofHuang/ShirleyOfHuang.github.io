import React from 'react';
import { Parallax, Background } from 'react-parallax';
import laptop from '../ParalaxPics/laptopcafe.jpg';
import './parallaxdog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {arrow_down} from 'react-icons-kit/ikons/arrow_down';
import { Icon } from 'react-icons-kit';

export const IconHome= () => <Icon icon={arrow_down} />

export class ParallaxDog extends React.Component{

    render(){
        return (
            <div>
            <div className="Projects">
                 <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
            
            </div>

            <div>
              
                <main class="wrapper">
                <section class="section parallaxx bgg1">
                    <div class="boxed-dog">
                        <h4 class="dog">TRAVELLING IS A PART OF ME <br></br>CHECK OUT WHERE I'VE BEEN</h4> 
                        
                        {/* <span class="glyphicon glyphicon-arrow-down"></span> */}
                        <Icon icon={arrow_down} size="20%"></Icon>
                    </div>
                </section>
                </main>  
            </div>
            </div>       


        
           

      
        )
    }
}