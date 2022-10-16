const PostItem = (post) => {

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

  return (`
  <div class="row border-bottom border-secondary mb-2">
    <div class="col-1">
      <img class="rounded-circle" src=${post.profilePicture} width="45px" height="45px"/>
    </div>
    <div class="col">
      <div class="fw-bolder">${post.username} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal"> ${post.handle} - ${post.whenPosted}</span></div>
      <div>${post.blurb}</div>
      <div class="border border-secondary rounded">
        <img src=${post.contentPicture} class="w-100 rounded"/>
        <div class=${marginSpacer}>
          <div class=${contentTitleClass}>${post.contentTitle}</div>
          <div class=${contentDescClass}>${post.contentDesc}</div>
          <div class=${contentLinkClass}><i class="fa-solid fa-link"></i> ${post.contentLink}</div>
        </div>  
      </div>
      <div class="row text-muted mt-3 mb-3">
        <div class="col"><i class="fa-regular fa-comment"></i> ${post.numComments}</div>
        <div class="col"><i class="fa-solid fa-retweet"></i> ${post.numRetweets} </div>
        <div class="col"><i class="fa-regular fa-heart"></i> ${post.numLikes} </div>
        <div class="col"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
      </div>
    </div>
  </div>
  `);
}
export default PostItem;