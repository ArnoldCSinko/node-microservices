const { randomBytes } = require('crypto');
const posts = {};

const getPosts = (req, res) => {
  res.send(posts);
};

const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts[id];
  if (!post) {
    return res.status(404).send('No such post');
  }
  res.status(200).send(posts[id]);
};

const addPost = (req, res) => {
  console.log('Add a post');
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = { id, title };
  res.status(201).send(posts[id]);
};

module.exports = {
  addPost,
  getPosts,
  getPostById,
};
