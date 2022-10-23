import React from "react";
import PostItem from "./post-item";
import homePosts from './home-posts.json'

const PostItemsList = () => {
  return(
    <ul className="list-group">
      {
        homePosts.map(post =>
          <PostItem key={post._id} post={post}/>)
      }
    </ul>
  );
};

export default PostItemsList;