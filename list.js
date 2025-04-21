const express = require("express");
const router = express.Router();
const con = require("./connect.js");

router.get("/", (req, res) => {
  con.query("SELECT * FROM events", (err, result) => {
    if (err) {
      res.status(500).send("Database error");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;


