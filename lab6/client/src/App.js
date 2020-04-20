  
import React from 'react';
import './App.css';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';
<<<<<<< HEAD
import pika from './pika.gif';

=======
import Pika from './components/pika.gif';
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b

class App extends React.Component{

  render(){
    return(
      
      <div className="container">
      <IdSearch />
      <NameSearch />
<<<<<<< HEAD
      <h2>I CHOOSE YOU!</h2>
     <div id="reportingArea"></div>
     <img src={pika}width="200px" height="200px"  alt=" "/>
=======
      <h2><center>I CHOOSE YOU!</center></h2>
      <img src={Pika}width="200px" height="200px"  alt=" "/>
     <center><div id="reportingArea"></div></center> 
>>>>>>> 7f926778e2a899a823ef02abe27ef2563d903a0b

    </div>
  
    );
  }
}

export default App;