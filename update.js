const express = require("express");
const router = express.Router();
const con = require("./connect.js");

// Update event by ID
router.put("/:id", (req, res) => {
  const eventId = req.params.id;
  const { name, description, date, location } = req.body;

  const q = `
    UPDATE events 
    SET name = ?, description = ?, date = ?, location = ? 
    WHERE id = ?
  `;
  
  con.query(q, [name, description, date, location, eventId], (err, result) => {
    if (err) {
      res.status(500).send("Update error");
    } else {
      res.json({ message: "Event updated successfully", result });
    }
  });
});

module.exports = router;
