# EventFlow Backend

## Overview

The backend of the **EventFlow** project is responsible for managing events, attendee registrations, audit logging, and event updates. It uses **Node.js** and **Express.js** for the server, **MySQL** as the database, and handles operations like event creation, registration, and logging user actions.

## Features

- **Event CRUD**: Create, Read, Update, and Delete events.
- **Event Registration**: Allows users to register and unregister for events.
- **Audit Logging**: Logs all critical actions performed by users for security and auditing purposes.
- **Secure APIs**: APIs for interacting with events and registrations.

## Database Schema

### 1. `users` table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
2. events table
sql
Copy code
CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(255) NOT NULL
);
3. registrations table
sql
Copy code
CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id)
);
4. audit_logs table
sql
Copy code
CREATE TABLE audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  action VARCHAR(50),
  details TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
Backend Structure
The backend code is organized as follows:

arduino
Copy code
backend/
└── event/
    ├── audit_log.js           // Logs user actions (e.g., registration/unregistration)
    ├── connect.js             // Establishes a MySQL connection
    ├── delete.js              // Handles deletion of events or registrations
    ├── index.js               // Entry point for backend routes and server setup
    ├── insert.js              // Handles insertion of new events into the database
    ├── list.js                // Fetches a list of events from the database
    ├── register.js            // Manages user event registrations/unregistrations
    ├── update.js              // Updates event details in the database
    ├── view_registered.js     // Displays the list of registered attendees for each event
└── package.json              // Project dependencies and metadata
Setup Instructions
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/TameshwariSahu/eventflow-backend.git
Navigate into the backend directory:

bash
Copy code
cd eventflow-backend
Install dependencies:

bash
Copy code
npm install
Set up MySQL database:

Create a database named eventmanagement.

Create the tables as mentioned in the Database Schema section above.

Configure MySQL connection in connect.js:

Update the user, password, host, and port fields with your local MySQL configuration.

Start the server:

bash
Copy code
npm start
The backend will be accessible on http://localhost:8090.

API Endpoints
GET /list: Fetches all events.

POST /insert: Creates a new event.

DELETE /delete/:id: Deletes an event by its ID.

PUT /update/:id: Updates an event by its ID.

POST /register: Registers a user for an event (requires userId and eventId).

GET /view_registered: View the list of attendees for a specific event.
