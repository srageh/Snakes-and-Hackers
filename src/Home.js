import React from "react";
import './App.css';
import { Link } from "react-router-dom";



const Home = ()=> {
  return (
    <div className="choose-game-cotainer">
        <h2 style={{textAlign:"center", margin:"2em 0", fontSize:"3em"}}>Choose Game Mode</h2>
        <div className="flex-2">
        <div className="solo-game">
            <h2>Solo Game</h2>
            <p>play against computer</p>
        </div>
        <div className="multipayer-game">
            <h2>Multiplayer Game</h2>
            <p>play against friends</p>
        </div>
 
        
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Link className="play-button"  to="/house" >Play</Link>
       
        </div>
        
    </div>

    
  );
}

export default Home;
