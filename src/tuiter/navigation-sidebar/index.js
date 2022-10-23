import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
 return (
   <div className="list-group">
     <a href="." className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
     <FontAwesomeIcon icon={faHouse} /> Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
     <FontAwesomeIcon icon={faHashtag} /> Explore
     </Link>
     <Link to="/" className="list-group-item">
       Labs
     </Link>
     <a href="." className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <FontAwesomeIcon icon={faBell} /> Notifications
     </a>
     <a href="." className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <FontAwesomeIcon icon={faEnvelope} /> Messages
     </a>
     <a href="." className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <FontAwesomeIcon icon={faBookmark} /> Bookmarks
     </a>
     <a href="." className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <FontAwesomeIcon icon={faList} /> Lists
     </a>
     <a href="." className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <FontAwesomeIcon icon={faUser} /> Profile
     </a>
     <a href="." className={`list-group-item
                    ${active === 'more'?'active':''}`}>
      <FontAwesomeIcon icon={faEllipsis} />  More
     </a>
   </div>
 );
};
export default NavigationSidebar;