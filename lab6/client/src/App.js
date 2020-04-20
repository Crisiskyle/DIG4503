  
import React from 'react';
import './App.css';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';
import Pika from './components/pika.gif';

class App extends React.Component{

  render(){
    return(
      
      <div className="container">
      <IdSearch />
      <NameSearch />
      <h2><center>I CHOOSE YOU!</center></h2>
      <img src={Pika}width="200px" height="200px"  alt=" "/>
     <center><div id="reportingArea"></div></center> 

    </div>
  
    );
  }
}

export default App;