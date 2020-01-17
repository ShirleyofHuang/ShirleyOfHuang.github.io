import React from 'react';
import './title.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const sortByOptions = {
    'home': 'Home',
    'about' : 'About Me',
    'projects': 'Projects',
    'connect' : 'Connect with me'

}
export class Title extends React.Component{
    renderSortByOptions(){
        
        return Object.keys(sortByOptions).map(sortByOption=>{
          let sortByOptionValue = sortByOptions[sortByOption]
          return <li key={sortByOptions}>{sortByOptionValue}</li>
        });
              
      }
      render(){
         return (
        <div className="title">

            
          <div className="SearchBar">
                 <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
            <div className="SearchBar-sort-options">
                <ul>
                {this.renderSortByOptions()}
                </ul>
            </div>
            
            <div className="SearchBar-search">
            <div className="SearchBar-fields">
                <input placeholder="Search Me" />
            </div>
            <div className="SearchBar-submit">
                <a href='https://twitter.com/bunnybuddhism'>{this.props.enter}</a>
            </div>
            </div>
        </div>
        </div>
         )
      }
  }
