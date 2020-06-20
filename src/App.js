import React from "react";
import "./App.css";

function App({name, age}) {//can write props in the () after App and then props.name and props.age below
  return (
    <div className="App">
      React test app for learning by {name}. Age = {age - 5}
    </div>
  );
}

export default App;
