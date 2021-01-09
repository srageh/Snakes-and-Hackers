import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const House = ()=> {
  return (
    <div className="choose-game-cotainer">
        <h2 style={{textAlign:"center", margin:"1em 0", fontSize:"3em"}}>Choose House</h2>
        <div className="flex-2">

          <div className="solo-game">
              <h2>Ravenclaw</h2>
              <img  src={"raven.png"}/>
              <p>cath phrase</p>
          </div>
          
          <div className="solo-game">

              <h2>Gryffindor</h2>
              <img  src={"gryf.png"}/>
              <p>cath phrase</p>
          </div>

          <div className="solo-game">
              <h2>Hufflepuff</h2>
              <img  src={"huffle.png"}/>
              <p>cath phrase</p>
          </div>
          

         

          <div className="solo-game">
              <h2>Slytherin</h2>
              <img  src={"slytg.png"}/>
              <p>cath phrase</p>
          </div>
          
        

        
        </div>
        
        <div style={{display:"flex", justifyContent:"center"}}>
          <Link className="play-button"  to="/game" >Start Game</Link>
       
        </div>
      
    </div>

    
  );
}

export default House;
