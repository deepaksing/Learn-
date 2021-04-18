import React, {useState} from 'react';
import './Headerss.css';

function Headerss() {

  const  [theme, setTheme] = useState("light");
  
  const dark = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const bd = document.body;
    const an = document.getElementById("an");
    const an1 = document.getElementById("an1");
    const an2 = document.getElementById("an2");
    const cont = document.getElementsByClassName("content");
    const lud = document.getElementById("lud");
    const logo = document.getElementById("logoo");
    const mcon = document.getElementById("mcon");

    const manc = document.getElementById("manc");
    const tpc = document.getElementById("tpc");
   
    if(theme == "light") {
      bd.style.backgroundColor = "#111827";
      manc.style.backgroundColor = "#202735";
      bd.style.color = "#a8abb1";
      an.style.color = "#FEB93C";
      an1.style.color = "#E95F34";
      an2.style.color = "#E7496C";
      for(var i = 0; i<cont.length; i++) {
        cont[i].style.color = "#767a80";
      }
      if(lud) lud.style.color = "#7488D0";
      logo.style.color = "white";
      bd.style.transition = "400ms all ease";
      mcon.style.color = "#767a80";
      tpc.style.color = "#a8abb1";
    }
    
    else {
      bd.style.backgroundColor = "rgba(245, 222, 179, 0.278)";
      bd.style.color = "black"; 
      an.style.color = "#5920df"; 
      an1.style.color = "#e74a1a";  
      an2.style.color = "#e0224b";
      for(var i = 0; i<cont.length; i++) {
        cont[i].style.color = "#646970";
      }
      mcon.style.color = "#646970";
      tpc.style.color = "black";
      logo.style.color = "black";
      bd.style.transition = "400ms all ease";
      if(lud) lud.style.color = "black";
      manc.style.backgroundColor = "rgba(245, 245, 245, 0.819)";
    }
  }

  return (
    <div className = "heading">
      <div className = "logoname" id = "logoo">
        Learn
      </div>
      <div className="navbar">
        <a className="home" id ="an" href="#">Home</a>
        <a className="hot" id ="an1" href="#">Hottest</a>
        <a className="contact" id ="an2" href="#">Contact</a>
      </div>
      <div className={theme} onClick = {dark}></div>
    </div>
  );
}

export default Headerss;
