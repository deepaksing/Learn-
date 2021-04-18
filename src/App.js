import React, {useState} from 'react';
import './App.css';
import Headerss from './Headerss';
import DisCard from './DisCards'
import Post from './Post.';


function App() {
  return (
    
    <div className = "main">
       
      <div className = "head">
        <Headerss/>
      </div>
      <div className="lud" id="lud"> Latest Updates </div>
        <DisCard/>
      <Post/>
      
      
      
    </div>
  );
}

export default App;
