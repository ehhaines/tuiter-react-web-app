
const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item">
  <div class="row">
    <div class="col-2">
      <img src=${who.avatarIcon} class="rounded-circle" width="45px" height="45px"/>
    </div>
    <div class="col-xxl-7 col-lg-6">
      <div class="fw-bolder">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
      <div>@${who.handle}</div>
    </div>
    <div class="col-xxl-3 col-lg-4">
      <button type="button" class="btn btn-primary w-100 rounded-pill">Follow</button>
    </div>
  </div>
  </li>
  `);
}
export default WhoToFollowListItem;