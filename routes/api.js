const router = require("express").Router();
const Contact = require("../models/contact.js");

router.post("/api/contact", function (req, res) {
  Contact.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });
});



module.exports = router;