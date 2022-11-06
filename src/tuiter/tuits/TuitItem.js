import React from "react";
import TuitStats from "./TuitStats";
import { deleteTuit } from "./tuits-reducer";
import {useDispatch} from "react-redux";
const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
    <li className="list-group-item">
      <div className="row mb-2">
        <div className="col-auto">
          <img className="rounded-circle" src={tuit.profilePicture} width="45px" height="45px" alt="Profile Pic"/>
        </div>
        <div className="col">
          <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i>
          <div className="fw-bolder">{tuit.username} <i className="fa-solid fa-circle-check"></i> <span className="text-secondary fw-normal"> {tuit.handle} - {tuit.whenPosted}</span></div>
          <div>{tuit.blurb}</div>
          <TuitStats tuit={tuit}/>
        </div>
      </div>
    </li>
  );
}

export default TuitItem;