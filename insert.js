const express = require("express");
const router = express.Router();
const con = require("./connect.js");


router.post("/", (req, res) => {
    
    console.log("Request body:", req.body);

    const { name,description,date,location} = req.body;
   const q = "insert into events (name,description,date,location) values(?,?,?,?)"
    con.query(q,[name,description,date,location], (err, result) => {
      if (err) {
        res.status(500).send("insertion error");
      } else {
        res.json(result);
      }
    });
  });
  
  module.exports = router;