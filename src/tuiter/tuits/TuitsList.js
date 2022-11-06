import React from "react";
import TuitItem from "./TuitItem";
//import Tuits from "./tuits.json";
import { useSelector } from "react-redux";

const TuitList = () => {
  const tuitsArray = useSelector(state => state.tuits)
  return(
    <ul className="list-group">
      {tuitsArray.map(tuit =>
        <TuitItem key={tuit._id} tuit={tuit}/>)
      }
    </ul>
  );
}

export default TuitList;