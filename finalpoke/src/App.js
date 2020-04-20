  
import React from 'react';
import './App.css';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';
import pika from './pika.gif';


class App extends React.Component{

  render(){
    return(
      
      <div className="container">
      <IdSearch />
      <NameSearch />
      <h2>I CHOOSE YOU!</h2>
     <div id="reportingArea"></div>
     <img src={pika}width="200px" height="200px"  alt=" "/>

    </div>
    
    );
  }
}

export default App;