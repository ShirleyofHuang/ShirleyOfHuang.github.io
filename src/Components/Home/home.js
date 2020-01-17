import React from 'react';
import pic_me from './pic_me.jpg';
import './home.css';
import this_me from './ThisIsMe.png';
import blog from './Blog-Pink.png';


export class Home extends React.Component{

    render(){
        return (
            <div className="Home">
                <div className="Home-title">
                    <img className="Home-title-pic" src={blog} alt=''></img>
                    <p className="Home-title-slogan">
                      
                        <em>personal blog for cool projects and stuff</em>
                     
                    </p>
                </div>
                <div className="Home-picture">
                    {/* <img className = "Home-me" src={this_me} alt=''></img>
                    <img className = "Home-pic" src={pic_me} alt=''></img> */}
                    
                </div>
                <div>
                    {/* <h1>First, let me introduce myself. <br></br>
                    My name is Shirley. <br></br>
                    And to future employers (the only people that would read this) <br></br>or 
                    my friends (that are reading this to help me or make fun of me), <br></br>welcome to my blog.
                    </h1> */}
                </div>

            </div>
        )
    }


}

export default Home;