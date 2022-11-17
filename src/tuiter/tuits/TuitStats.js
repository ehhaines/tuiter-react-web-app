import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({tuit}) => {
  return(
    <div className="row text-muted mt-3 mb-3">
      <div className="col"><FontAwesomeIcon icon={faComment} /> {tuit.numComments}</div>
      <div className="col"><FontAwesomeIcon icon={faRetweet} /> {tuit.numRetweets} </div>
      <div className="col"><FontAwesomeIcon icon={faHeart} color={tuit.liked ? "red" : undefined}/> {tuit.numLikes} </div>
      <div className="col"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
    </div>
  );
}

export default TuitStats;