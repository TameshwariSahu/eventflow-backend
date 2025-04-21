const express = require("express");
const router = express.Router();
const con = require("./connect");

// Route to fetch attendee registrations for all events
router.get("/", (req, res) => {
    const q = `
    SELECT 
      r.id AS registration_id,
      u.name AS attendee_name,
      u.email AS attendee_email,  
      e.name AS event_name,
      e.date AS event_date,
      e.location AS event_location
    FROM 
      registrations r
    JOIN users u ON r.user_id = u.id
    JOIN events e ON r.event_id = e.id
    ORDER BY e.date ASC
  `;
  

  con.query(q, (err, result) => {
    if (err) {
      console.error("Error fetching registrations:", err);
      return res.status(500).send("Error fetching registrations");
    }
    res.json(result);
  });
});

module.exports = router;
