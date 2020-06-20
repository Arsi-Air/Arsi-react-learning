import React from "react";

/*function Comp1() {//can write props in the () after App and then props.name and props.age below
  return <p>This is a paragraph in comp1 tag.</p>
}*/

const Comp1 = ({firstName}) => {
    return <p>This is a paragraph in comp1 tag. name: {firstName}</p>
}

export default Comp1;
