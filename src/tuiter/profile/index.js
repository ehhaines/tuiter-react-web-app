import React from "react";
import { useNavigate } from "react-router";
//import UserData from "./user.json";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ProfileComponent = () => {
  const UserData = useSelector(state => state.user)
  const nav = useNavigate()
  return(
    <div>
      <div>
        <h3 className="m-0">{UserData.firstName} {UserData.lastName}</h3>
        <span className="text-muted">{UserData.numTuits} Tuits</span>
      </div>
      <div className="wd-evan">
        <img src={`/images/${UserData.bannerPicture}`} className="w-100" alt="User Banner"/>
        <div className="position-relative">
          <img src={`/images/${UserData.profilePicture}`} className="position-absolute rounded-circle w-25 wd-profile-image ms-3 mb-3" alt="User Profile"/>
          <button className="float-end btn rounded-pill border mt-2 me-2" onClick={() => {nav(`/tuiter/edit-profile`)}}>Edit Profile</button>
        </div>
      </div>
      <div className="ms-2">
        <h3 className="m-0 fw-semibold">{UserData.firstName} {UserData.lastName}</h3>
        <span className="text-muted">{UserData.handle}</span>
        <p className="mt-3">{UserData.bio}</p>
        <div className="row">
          <div className="col-auto text-muted"><FontAwesomeIcon icon={faLocationDot}/> {UserData.location}</div>
          <div className="col-auto text-muted"><FontAwesomeIcon icon={faCakeCandles}/> Born {UserData.dateOfBirth}</div>
          <div className="col text-muted"><FontAwesomeIcon icon={faCalendar}/> Joined {UserData.dateJoined}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;