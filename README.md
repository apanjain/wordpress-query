# WORDPRESS QUERY

A Node.js program to perform query on wordpress endpoints.

## Setup

- You need access to a working wordpress instance, or you can creating one by following the guide [here](https://upcloud.com/community/tutorials/wordpress-with-docker/)
- Clone this repository
- Run the following command

```sh
npm install
```

- Create a .env file same as .env.example

```sh
cp .env.example .env
```

- Enter the base url of a running wordpress instance in the env file

## Usage

- To run using axios call

```sh
node app.js
```

- To run using node-wpapi

```sh
node wpapi.js
```

- This will log output in the following manner

```js
{recentPostsCount: "0"}
{pagesCount: "2"}
{postCount: "2"}
{usersCount: "2"}
```
