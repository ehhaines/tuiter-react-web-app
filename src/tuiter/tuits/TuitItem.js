import React from "react";
import TuitStats from "./TuitStats";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
    <li className="list-group-item">
      <div className="row mb-2">
        <div className="col-auto">
          <img className="rounded-circle" src={`/images/${tuit.image}`} width="45px" height="45px" alt="Profile Pic"/>
        </div>
        <div className="col">
          <i className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}></i>
          <div className="fw-bolder">{tuit.username} <i className="fa-solid fa-circle-check"></i> <span className="text-secondary fw-normal"> {tuit.handle} - {tuit.time}</span></div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit}/>
        </div>
      </div>
    </li>
  );
}

export default TuitItem;