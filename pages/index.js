import React from "react";

// internal import
import {useStateContext} from '../Context/index'


const index = () => {
  const {transferNativeToken} = useStateContext();
  return <div>
    <h1>Prateush</h1>
    <button onClick={() => transferNativeToken()}> TRANSFER</button>
    </div>;
};

export default index;
