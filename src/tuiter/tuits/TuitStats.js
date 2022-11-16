import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  return(
    <div className="row text-muted mt-3 mb-3">
      <div className="col"><FontAwesomeIcon icon={faComment} /> {tuit.replies}</div>
      <div className="col"><FontAwesomeIcon icon={faRetweet} /> {tuit.retuits} </div>
      <div className="col" onClick={() => dispatch(updateTuitThunk({
          ...tuit,
          likes: tuit.likes + 1,
          liked: true
        }))}><FontAwesomeIcon icon={faHeart} color={tuit.liked ? "red" : undefined}/> {tuit.likes}
      </div>
        <div className="col" onClick={() => dispatch(updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1,
          disliked: true
        }))}>
        <FontAwesomeIcon icon={faThumbsDown} color={tuit.disliked ? "black" : undefined}></FontAwesomeIcon> {tuit.dislikes}
      </div>
      <div className="col"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
    </div>
  );
}

export default TuitStats;