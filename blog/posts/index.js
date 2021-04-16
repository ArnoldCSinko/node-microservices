const postsHandler = require('./handlers/posts');
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 4000;

app.get('/posts', postsHandler.getPosts);

app.get('/posts/:id', postsHandler.getPostById);

app.post('/posts', postsHandler.addPost);

app.listen(PORT, () => console.log(`Posts Service is listening on port ${PORT}`));