  
import React from 'react';
import './App.css';
import IdSearch from './components/IdSearch';
import NameSearch from './components/NameSearch';


class App extends React.Component{

  render(){
    return(
      
      <div className="container">
      <IdSearch />
      <NameSearch />
      <h2>I CHOOSE YOU</h2>
     <div id="reportingArea"></div>
    </div>
    
    );
  }
}

export default App;