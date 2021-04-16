const { randomBytes } = require('crypto');
const posts = {
  posts: {},
};

const getPosts = (req, res) => {
  res.send(posts);
};

const addPost = (req, res) => {
  console.log('Add a post');
  const id = randomBytes(4).toString('hex');
  const title = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
};

module.exports = {
  getPosts,
  addPost,
};
