import React from 'react';
import {Fade} from 'react-slideshow-image';
import calgary from './calgary.jpg';
import toronto from './toronto.jpg';
import shanghai from './shanghai.jpg';
import './slideshow.css';

const fadeImages= [
    
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    // arrows: true,
    onChange: (oldIndex, newIndex) => {console.log(`slide transition from ${oldIndex} to ${newIndex}`)}

}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={calgary} alt='' />
            </div>
            <h2>home in calgary</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={toronto} alt=''/>
            </div>
            <h2>studying in toronto</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={shanghai} alt='' />
            </div>
            <h2>working in shanghai</h2>
          </div>
        </Fade>
      </div>
    )
  }

export class Slideshows extends React.Component{
    render(){
     return(
         <Slideshow></Slideshow>
     )


    
    }
}

export default Slideshows; 