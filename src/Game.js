import React from "react";
import './App.css';
import { Link } from "react-router-dom";



const Game = ()=> {
  return (
    <div className="game-cotainer">
        <h2 style={{textAlign:"center", margin:"2em 0 1em 0", fontSize:"3em"}}>Snakes and Hacks</h2>
        <div className="flex-2">
        

        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
            </tr>
            <tr>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
            </tr>
            <tr>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
            </tr>
            <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
            </tr>
        </table>
       
        
 
        
        </div>
      
       
       
    </div>

    
  );
}

export default Game;
