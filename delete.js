const express = require("express");
const router = express.Router();
const con = require("./connect.js");

// Delete event by ID
router.delete("/:id", (req, res) => {
  const eventId = req.params.id;

  const q = "DELETE FROM events WHERE id = ?";
  con.query(q, [eventId], (err, result) => {
    if (err) {
      res.status(500).send("Deletion error");
    } else {
      res.json({ message: "Event deleted successfully", result });
    }
  });
});

module.exports = router;
