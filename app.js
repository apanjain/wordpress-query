require("dotenv").config();
const axios = require("axios");

const baseUrl = process.env.BASE_URL;

let postCount = 0;
let recentPostsCount = 0;
let usersCount = 0;
let pagesCount = 0;

// Count total number of posts

axios
  .get(`${baseUrl}/wp/v2/posts?_fields=id`)
  .then((res) => {
    postCount = res.headers["x-wp-total"];
    console.log({ postCount });
  })
  .catch((err) => {
    console.log(err);
  });

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// Count total number of posts in past 24 hours

axios
  .get(`${baseUrl}/wp/v2/posts?_fields=id&after=${yesterday.toISOString()}`)
  .then((res) => {
    recentPostsCount = res.headers["x-wp-total"];
    console.log({ recentPostsCount });
  })
  .catch((err) => {
    console.log(err);
  });

// Count total number of User profiles

axios
  .get(`${baseUrl}/wp/v2/posts?_fields=id`)
  .then((res) => {
    usersCount = res.headers["x-wp-total"];
    console.log({ usersCount });
  })
  .catch((err) => {
    console.log(err);
  });

// Count total number of Pages on website

axios
  .get(`${baseUrl}/wp/v2/pages?_fields=id`)
  .then((res) => {
    pagesCount = res.headers["x-wp-total"];
    console.log({ pagesCount });
  })
  .catch((err) => {
    console.log(err);
  });
