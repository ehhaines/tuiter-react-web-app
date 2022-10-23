import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const PostItem = ({post}) => {

  let contentTitleClass = "d-none";
  let contentDescClass = "d-none";
  let contentLinkClass = "d-none";
  let marginSpacer = "";

  if (post.contentTitle) {
    contentTitleClass = "";
    marginSpacer = "m-3";
  }
  if (post.contentDesc) {
    contentDescClass = "text-muted";
  }
  if (post.contentLink) {
    contentLinkClass = "text-muted";
  }

  return (
    <li className="list-group-item">
      <div className="row mb-2">
        <div className="col-1">
          <img className="rounded-circle" src={post.profilePicture} width="45px" height="45px" alt="Profile Pic"/>
        </div>
        <div className="col">
          <div className="fw-bolder">{post.username} <i className="fa-solid fa-circle-check"></i> <span className="text-secondary fw-normal"> {post.handle} - {post.whenPosted}</span></div>
          <div>{post.blurb}</div>
          <div className="border border-secondary rounded">
            <img src={post.contentPicture} className="w-100 rounded" alt="Source media not found"/>
            <div className={marginSpacer}>
              <div className={contentTitleClass}>{post.contentTitle}</div>
              <div className={contentDescClass}>{post.contentDesc}</div>
              <div className={contentLinkClass}><FontAwesomeIcon icon={faLink} /> {post.contentLink}</div>
            </div>  
          </div>
          <div className="row text-muted mt-3 mb-3">
            <div className="col"><FontAwesomeIcon icon={faComment} /> {post.numComments}</div>
            <div className="col"><FontAwesomeIcon icon={faRetweet} /> {post.numRetweets} </div>
            <div className="col"><FontAwesomeIcon icon={faHeart} /> {post.numLikes} </div>
            <div className="col"><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
          </div>
        </div>
      </div>
    </li>
  );
}
export default PostItem;