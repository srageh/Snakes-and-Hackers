
import './App.css';

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
        <form action="/house">
            <button className = "play-button">Play</button>
        </form>
    </div>

    
  );
}

export default Home;
