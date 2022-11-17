import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeBio, changeDOB, changeFirstName, changeHandle, changeLastName } from "../reducers/profile";
import "./index.css";

const EditProfile = () => {
  const UserData = useSelector(state => state.user);

  const [fn, setfn] = useState({firstName: UserData.firstName});
  const fnChangeHandler = (event) => {
    const val = event.target.value;
    const newfn = {
      firstName: val
    };
    setfn(newfn);
  }

  const [ln, setln] = useState({lastName: UserData.lastName});
  const lnChangeHandler = (event) => {
    const val = event.target.value;
    const newln = {
      lastName: val
    };
    setln(newln);
  }

  const [han, setHandle] = useState({handle: UserData.handle});
  const hanChangeHandler = (event) => {
    const val = event.target.value;
    const newHandle = {handle: val};
    setHandle(newHandle);
  }

  const [bio, setBio] = useState({bio: UserData.bio});
  const bioChangeHandler = (event) => {
    const val = event.target.value;
    const newBio = {bio: val};
    setBio(newBio);
  }

  const [dob, setdob] = useState({dob: UserData.dateOfBirth});
  const dobChangeHandler = (event) => {
    const val = event.target.value;
    const newDOB = {dateOfBirth: val};
    setdob(newDOB);
  }

  const dispatch = useDispatch();
  const updateProfileClickHandler = () => {
    dispatch(changeFirstName(fn));
    dispatch(changeLastName(ln));
    dispatch(changeHandle(han));
    dispatch(changeBio(bio));
    dispatch(changeDOB(dob));
  }

  const nav = useNavigate()

  return(
    <div>
      <div className="row">
        <i className="bi bi-x-lg col-1" onClick={() => {nav(`/tuiter/profile`)}}></i>
        <h3 className="m-0 col-9 ">Edit Profile</h3>
        <button className="float-end btn rounded-pill border col bg-dark text-light" onClick={updateProfileClickHandler}>Save</button>
      </div>
      <div className="wd-evan">
        <img src={`/images/${UserData.bannerPicture}`} className="w-100" alt="User banner"/>
        <div className="position-relative">
          <img src={`/images/${UserData.profilePicture}`} className="position-absolute rounded-circle w-25 wd-profile-image ms-3 mb-3" alt="User profile"/>
        </div>
      </div>
      <div>
        <div className="row">
          <input className="col-6 wd-inc-height"
            onChange={fnChangeHandler}
            value={fn.firstName}
            placeholder="First Name"
          />
          <input className="col-6"
            onChange={lnChangeHandler}
            value={ln.lastName}
            placeholder="Last Name"
          />
        </div>
        <br></br>
        <input className="w-100 wd-inc-height col-12"
          onChange={hanChangeHandler}
          value={han.handle}
          placeholder="Handle"
        />
        <br></br>
        <br></br>
        <textarea rows="5" cols="40"
          placeholder="Bio"
          value={bio.bio}
          onChange={bioChangeHandler}>
        </textarea>
        <input className="w-100 wd-inc-height"
          onChange={dobChangeHandler}
          placeholder="DOB"
          value={dob.dob}
        />
      </div>
    </div>
  );
}

export default EditProfile;