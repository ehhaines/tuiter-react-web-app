import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="row">
      <div class="position-relative col-10">
        <input class="form-control rounded-pill wd-searchbar ps-5" placeholder="Search Tuiter" />
        <i class="fa-solid fa-magnifying-glass position-absolute wd-magnifying-glass"></i>
      </div>
      <div class="col">
        <i class="fa-solid fa-gear fa-2x mt-1 float-end" style="color: rgb(29 161 242)"></i>
      </div>
    </div>
    <ul class="nav nav-tabs mt-1">
      <li class="nav-item">
          <a class="nav-link active" href="#">For you</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    <div class="position-relative">
      <img src="../../images/sakura.jpg" class="w-100 mt-1 mb-1"/>
      <h2 class="position-absolute bottom-0 left-1 text-white wd-cherry-blossom display-6">Cherry Blossom Festival</h2>
    </div>
    ${PostSummaryList()}
  `)
}
export default ExploreComponent;