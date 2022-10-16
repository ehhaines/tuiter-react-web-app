const NavigationSidebar = () => {
  return(`
  <div class="list-group">
    <a href="../home.html" class="list-group-item list-group-item-action">
      <i class="fa-brands fa-twitter"></i></a>
    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-house"></i></div>
        <div class="col d-none d-xl-block">Home</div>
      </div></a>
    <a href="../explore/index.html" class="list-group-item list-group-item-action active">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-hashtag"></i></div>
        <div class="col d-none d-xl-block">Explore</div>
      </div></a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-bell"></i></div>
        <div class="col d-none d-xl-block">Notifications</div>
      </div></a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-envelope"></i></div>
        <div class="col d-none d-xl-block">Messages</div>
      </div></a>
    <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-bookmark"></i></div>
        <div class="col d-none d-xl-block">Bookmarks</div>
      </div></a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-list"></i></div>
        <div class="col d-none d-xl-block">Lists</div>
      </div></a>
    <a href="../profile.html" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-user"></i></div>
        <div class="col d-none d-xl-block">Profile</div>
      </div></a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="row">
        <div class="col-1"><i class="fa-solid fa-ellipsis"></i></div>
        <div class="col d-none d-xl-block">More</div>
      </div></a>
  </div>
  <button type="button" class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
  `);
 }
 export default NavigationSidebar;