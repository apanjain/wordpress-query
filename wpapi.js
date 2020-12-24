const WPAPI = require("wpapi");

const wp = new WPAPI({ endpoint: "http://0.0.0.0:5000/wp-json" });

let postCount = 0;
let recentPostsCount = 0;
let usersCount = 0;
let pagesCount = 0;

// Count total number of posts

wp.posts()
  .param("_fields", "_paging")
  .get((err, data) => {
    if (err) {
      console.log(err);
    } else {
      postCount =
        data && data._paging && data._paging.total ? data._paging.total : 0;
      console.log({ postCount });
    }
  });

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// Count total number of posts in past 24 hours

wp.posts()
  .param("_fields", "_paging")
  .after(yesterday.toISOString())
  .get((err, data) => {
    if (err) {
      console.log(err);
    } else {
      recentPostsCount =
        data && data._paging && data._paging.total ? data._paging.total : 0;
      console.log({ recentPostsCount });
    }
  });

// Count total number of User profiles

wp.users()
  .param("_fields", "_paging")
  .get((err, data) => {
    if (err) {
      console.log(err);
    } else {
      usersCount =
        data && data._paging && data._paging.total ? data._paging.total : 0;
      console.log({ usersCount });
    }
  });

// Count total number of Pages on website

wp.pages()
  .param("_fields", "_paging")
  .get((err, data) => {
    if (err) {
      console.log(err);
    } else {
      pagesCount =
        data && data._paging && data._paging.total ? data._paging.total : 0;
      console.log({ pagesCount });
    }
  });
