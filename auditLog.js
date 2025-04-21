const db = require('./connect');

function logAuditAction(userId, action, details) {
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `
        INSERT INTO audit_logs (user_id, action, details, timestamp)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [userId, action, details, timestamp], (err, result) => {
        if (err) {
            console.error("Error inserting audit log: ", err);
        } else {
            console.log(" Audit log recorded successfully.");
        }
    });
}

module.exports = { logAuditAction };
