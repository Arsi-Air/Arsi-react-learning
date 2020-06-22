import React from 'react';
import './App.css';
import Comp1 from './Comp1';
import Room from './Room';
import AgeContext from './AgeContext';

function App({name, age}) {//can write props in the () after App and then props.name and props.age below
  let value = 21;
  return <AgeContext.Provider value={value}>
  <div className="App">
      React test app for learning by {<strong>{name}</strong>}. Age 5 years ago: {value - 5}
      <br />
      <Comp1 firstName = {name}></Comp1>
      <br /><br />
      <Room></Room>
    </div>
    </AgeContext.Provider>
}


export default App;
