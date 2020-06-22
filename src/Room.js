import React, { useState } from "react";
import "./Room.css";

const Room = () => {
    let [isLit, setLit] = useState(false);
    let [isClicks, setClicks] = useState(0);
    let [isTemp, setTemp] = useState(0);
    let togLight = () => {
        setLit(!isLit);
        setClicks(++isClicks);
    }
    
    let onPressLightOn = () => {
        setLit(true);
        setClicks(++isClicks);
    }
    
    let onPressLightOff = () => {
        setLit(false);
        setClicks(++isClicks);
    }

    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>
        <h1><center>A {isLit ? "Lit" : "Dark"} Room</center></h1>
        This room is {isLit ? "lit" : "dark"}
        <br />
        Number of times light controls have been pressed: {isClicks}
        <br />
        <button onClick = {togLight}> Toggle light</button>
        <br />
        <button onClick = {onPressLightOn}>Turn On</button>
        <br />
        <button onClick = {onPressLightOff}>Turn Off</button>
        <br />
        The temperature is {isTemp}
        <br />
        <button onClick = {() => setTemp(++isTemp)}>+</button>
        <button onClick = {() => setTemp(--isTemp)}>-</button>
        </div>
    );
}

export default Room