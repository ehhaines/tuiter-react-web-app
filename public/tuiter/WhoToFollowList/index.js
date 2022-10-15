import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return(`
    <ul class="list-group">
      <li class="list-group-item fw-bolder">
        Who to follow
      </li>
      ${
        who.map(acc => {
          return(WhoToFollowListItem(acc));
        }).join('')
      }
    </ul>
  `);
}
export default WhoToFollowList;