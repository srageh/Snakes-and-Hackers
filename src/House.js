
import './App.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const House = ()=> {
  var x = 0;
  const [house, setHouse] = useState({imgage:'', name:''});
 
  function startGame(){

   
  


  }

  useEffect(()=>{

  })

  function houseValue(value){
  
    document.getElementById('btn').style.display = "flex";

    //bnt.style.display = 'flex';

    if(value == "Hufflepuff"){
      fetch('http://hp-api.herokuapp.com/api/characters/staff/')
      .then(resp=>resp.json())
      .then(data=> console.log(data))
    }
    else{
      fetch('http://hp-api.herokuapp.com/api/characters/house/' + value)
      .then(resp=> resp.json())
      .then(house=> { setHouse({image:house.name, name:house.name }); console.log(house)})

    }

   
  }


  return (
    <div className="choose-game-cotainer">
        <h2 style={{textAlign:"center", margin:"1em 0", fontSize:"3em"}}>Choose House</h2>
        <div className="flex-2">

          <div onClick={ ()=>houseValue("Ravenclaw")} className="solo-game">
              <h2>Ravenclaw</h2>
              <img  src={"raven.png"}/>
              <p>cath phrase</p>
          </div>
          
          <div onClick={()=>houseValue("Gryffindor")} className="solo-game">

              <h2>Gryffindor</h2>
              <img  src={"gryf.png"}/>
              <p>cath phrase</p>
          </div>

          <div onClick={()=>houseValue("Hufflepuff")} className="solo-game">
              <h2>Hufflepuff</h2>
              <img  src={"huffle.png"}/>
              <p>cath phrase</p>
          </div>
          

         

          <div onClick={()=>houseValue("Slytherin")} className="solo-game">
              <h2>Slytherin</h2>
              <img  src={"slytg.png"}/>
              <p>cath phrase</p>
          </div>
          
        

        
        </div>
        
        <div id="btn" style={{display:"none", justifyContent:"center"}}>
         
          <Link className="play-button" onClick={startGame} house={house}   to="/game" >Start Game</Link>
       
        </div>
      
    </div>

    
  );
}

export default House;
