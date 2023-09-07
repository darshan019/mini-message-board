var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "The One Piece is real!",
    user: "Gol D Roger",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add new message" })
})

router.post("/new", async (req, res, next) => {
  messages.push({text: req.body.userMessage, user: req.body.userName, added: new Date()})
  res.redirect("/")
})

module.exports = router;
