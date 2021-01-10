import React from "react";
import './App.css';
import { Link } from "react-router-dom";



const Characters = (props)=> {
  //console.log(props.location.house)
  var x =0;
  const allCharacters = [];
    function chooseCharacter(chr, element){
        x++;
        if(x<3){
            var c = document.getElementById('character').childNodes;
            c[chr].style.border = "3px solid red";
            allCharacters.push(element);
           // allCharacters += c[chr];
            if(x==2){
                document.getElementById('playButton').style.display = 'flex';
            }




        }
        

    }



 

  return (
    <div className="characters-cotainer">
        <h2 style={{textAlign:"center", margin:"2em 0", fontSize:"3em"}}>Choose Characters</h2>
        <div id="character" style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}} >
        
         {props.location.house.map((element, key) => {
             
             return(
            <div  onClick={()=>chooseCharacter(key, element)} key={key+1} style={{margin:"20px"}} >
                        

                <img style={{width:"200px", height:"200px", borderRadius:"20px"}} src={element.image}/>
                <p>{element.name}</p>

            </div>
             )

                
             
         })}
 
        
        </div>
        <div id="playButton"  style={{display:"none", justifyContent:"center"}}>
            {console.log(allCharacters)}
          <Link  className="play-button"  to={ {pathname:"/game", allCharacters:allCharacters}} >Play</Link>
       
        </div>
        
    </div>

    
  );
}

export default Characters;
