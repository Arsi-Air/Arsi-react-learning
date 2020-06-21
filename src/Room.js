import React, { useState } from "react";
import "./Room.css";

const Room = () => {
    let [isLit, setLit] = useState(true);
    let [isClicks, setClicks] = useState(0);
    let [isTemp, setTemp] = useState(0);
    const brightness = isLit ? "lit" : "dark";
    let togLight = () => {
        setLit(!isLit);
        setClicks(++isClicks);
    }

    return(
        <div className={`room ${brightness}`}>This room is {isLit ? "lit" : "dark"}
        <br />
        Number of times toggled light has been pressed: {isClicks}
        <br />
        <button onClick = {togLight} > Toggle light</button>
        <br />
        <button onClick = {() => {setLit(true)}}>Turn On</button>
        <br />
        <button onClick = {() => {setLit(false)}}>Turn Off</button>
        <br />
        The temperature is {isTemp}
        <br />
        <button onClick = {() => setTemp(isTemp + 1)}>+</button>
        <button onClick = {() => setTemp(isTemp - 1)}>-</button>
        </div>
    );
}

export default Room