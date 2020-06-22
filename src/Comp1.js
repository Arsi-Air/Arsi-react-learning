import React, { useContext } from "react";
import './Comp1.css';
import AgeContext from './AgeContext';

/*function Comp1() {//can write props in the () after App and then props.name and props.age below
  return <p>This is a paragraph in comp1 tag. name: {props.name}</p>
}*/

const Comp1 = ({firstName}) => {
  let age = useContext(AgeContext);
    return <div>
    <p> This paragraph is in Comp1 tag. Name: {firstName}</p>    
    <p>This age is being output using context API: {age} </p>    
  </div>
}

export default Comp1;
