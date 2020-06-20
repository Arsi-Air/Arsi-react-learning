import React from "react";
import "./App.css";
import Comp1 from './Comp1';

function App({name, age}) {//can write props in the () after App and then props.name and props.age below
  return <div className="App">
      React test app for learning by {name}. Age = {age - 5}
      <br />
      <Comp1 firstName = {name}></Comp1>
    </div>

}


export default App;
