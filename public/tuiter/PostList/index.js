import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostItemsList = () => {
  return(`
  ${
    posts.map(post => {
      return(PostItem(post));
    }).join('')
  }
  `)
}
export default PostItemsList;