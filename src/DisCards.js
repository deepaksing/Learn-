import React from 'react';
import './Cards.css';
import Cards from './Cards';
import Cards1 from './Cards1';

function DisCards() {
  return (
    <div className="maincontent">
      <div className= "f1">
            <Cards1/>
          </div>
          <div className= "f2">
            <Cards/>
          </div>
          <div className= "f3">
            <Cards/>
          </div>
          <div className= "f4">
            <Cards1/>
          </div>
          <div className= "f5">
            <Cards/>
          </div>
          <div className= "f2">
            <Cards/>
          </div>
          <div className= "f2">
            <Cards/>
          </div>
          <div className= "f2">
            <Cards/>
          </div>
          <div className= "f5">
            <Cards/>
          </div>
          <div className= "f5">
            <Cards/>
          </div>
    </div>
  );
}

export default DisCards;
