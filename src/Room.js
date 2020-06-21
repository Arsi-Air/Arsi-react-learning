import React, { useState } from "react";
import './Room.css';

const Room = () => {
    let [isLit, setLit] = useState(true);
    let [isClicks, setClicks] = useState(0);
    let Click = () => {
        setLit(!isLit);
        setClicks(++isClicks);
    }

    return(
        <div className="room">This room is {isLit ? 'lit' : 'dark'}
        <br />
        Number of times light has been toggled: {isClicks}
        <br />
        <button onClick = {Click} > Toggle light</button>
        </div>
    );
}

export default Room