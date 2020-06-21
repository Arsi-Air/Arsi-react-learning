import React, { useState } from "react";
import './Room.css';

const Room = () => {
    const [isLit, setLit] = useState(true);

    return(
        <div className="room">This room is {isLit ? 'lit' : 'dark'}
        <br />
        <button onClick={() => setLit(!isLit)}>Switch</button>
        </div>
    );
}

export default Room;