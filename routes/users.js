var express = require('express');
var router = express.Router();

router.get('/terve', function(req, res, next) {
  const nimi = req.query.nimi || 'senkin tomppeli'
  res.send(`Terve, ${nimi}!`);
});

router.get("/hej", (req, res, next) => {
  const namn = req.query.namn || "fina du"
  res.send(`Hallå där, ${namn}!`)
})

module.exports = router;