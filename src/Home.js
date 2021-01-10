import React from "react";
import './App.css';
import { Link } from "react-router-dom";



const Home = ()=> {
  
  function gameType(value){
    document.getElementById('playButton').style.display = 'flex';

  }

  function playGame(){

  }

  return (
    <div className="choose-game-cotainer">
        <h2 style={{textAlign:"center", margin:"2em 0", fontSize:"3em"}}>Choose Game Mode</h2>
        <div className="flex-2">
        <div onClick={()=>gameType(1)} className="solo-game">
            <h2>Solo Game</h2>
            <p>play against computer</p>
        </div>
        <div onClick={()=>gameType(2)} className="multipayer-game">
            <h2>Multiplayer Game</h2>
            <p>play against friends</p>
        </div>
 
        
        </div>
        <div id="playButton"  style={{display:"none", justifyContent:"center"}}>
          <Link onClick={()=> playGame()} className="play-button"  to="/house" >Play</Link>
       
        </div>
        
    </div>

    
  );
}

export default Home;
