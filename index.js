const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Importing routes
const event_list = require("./list.js"); // Import event list
const registerRoutes = require("./register"); // Import registration routes
const insert = require("./insert.js");
const deleted = require("./delete.js");
const update = require("./update.js");
const viewRegistration = require("./view_registration");
app.use("/view_registration", viewRegistration);




// Use the routes for the respective endpoints
app.use("/list", event_list); // For event list
app.use("/events", registerRoutes); // For registering/unregistering from events
app.use("/insert", insert);
app.use("/delete", deleted);
app.use("/update", update);



app.listen(8090, () => {
  console.log("Server is running on http://localhost:8090");
});
