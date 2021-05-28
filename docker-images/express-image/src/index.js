var express = require("express");
var Chance = require("chance");
const { networkInterfaces } = require("os");
const chance = new Chance();
var app = express();

function getNetworkInfo() {
  const nets = networkInterfaces();
  const results = Object.create(null); // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === "IPv4" && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  return results;
}

function generatePosts(
  nbPostsRange = { min: 2, max: 10 },
  nbCommentsRange = { min: 2, max: 10 }
) {
  const posts = [];
  const nbPosts = chance.integer(nbPostsRange);

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
    const nbComments = chance.integer(nbCommentsRange);
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
  res.send({ data: generatePosts(), serverIp: getNetworkInfo().eth0[0] });
});

// On écoute sur le port 8080
app.listen(3000, function () {
  console.log("Connexion au server expressjs");
});
