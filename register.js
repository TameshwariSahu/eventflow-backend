const express = require('express');
const router = express.Router();
const db = require('./connect');
const { logAuditAction } = require('./auditLog'); // Correct import

// Register for an event
router.post('/register', function(req, res) {
    const { userId, eventId } = req.body;

    // Query to register user for the event
    const query = 'INSERT INTO registrations (user_id, event_id) VALUES (?, ?)';
    db.query(query, [userId, eventId], (err, result) => {
        if (err) {
            console.error("Error registering for event: ", err);
            return res.status(500).json({ message: 'Registration failed' });
        }

        // Log the action (register event)
        logAuditAction(userId, 'REGISTER', `User registered for event ID ${eventId}`);

        res.status(200).json({ message: 'Successfully registered for event' });
    });
});

module.exports = router;
