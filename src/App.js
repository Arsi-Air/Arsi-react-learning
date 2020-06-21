import React from "react";
import "./App.css";
import Comp1 from './Comp1';
import Room from './Room';

function App({name, age}) {//can write props in the () after App and then props.name and props.age below
  return <div className="App">
      React test app for learning by {<strong>{name}</strong>}. Age = {age - 5}
      <br />
      <Comp1 firstName = {name}></Comp1>
      <br /><br />
      <Room></Room>
    </div>

}


export default App;
