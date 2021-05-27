var express = require("express");
var Chance = require("chance");
const chance = new Chance();
var app = express();


function generatePosts(nbPostsRange = {min: 2,max: 10}, nbCommentsRange = {min: 2,max: 10}) {
  const posts = [];
  const nbPosts = chance.integer(nbPostsRange)
 
  // On génère des postes de blogs
  for (let i = 0; i < nbPosts; ++i) {
    const post = {
      title: chance.sentence({ word: chance.integer({ min: 2, max: 10 }) }),
      content: chance.paragraph({
        sentences: chance.integer({ min: 3, max: 20 }),
      }),
      author: chance.name(),
      comments: [],
    };
    const nbComments = chance.integer(nbCommentsRange)
    // On génère des commentaires pour ce post
    for (let j = 0; j < nbComments; ++j) {
      post.comments.push({
        comment: chance.sentence({ word: chance.integer({ min: 2, max: 10 }) }),
        author: chance.name(),
        date: chance.date(),
      });
    }
    // On retourne les postes crées
    posts.push(post);
  }
  return posts;
}
// Get posts de blog
app.get("/", function (req, res) {
  res.send(generatePosts());
});

// On écoute sur le port 8080
app.listen(8080, function () {
  console.log("Connexion au server expressjs");
});
