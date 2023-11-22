const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const http = require("http");
// const socketio = require("socket.io");

// const app = http.createServer();
// const io = socketio(server);

require("dotenv").config();
const PORT = process.env.PORT;

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("message", (message) => {
//     console.log("message:", message);
//     io.emit("message", message);
//   });
//   socket.on("disconnect", () => {
//     console.log("a user disconnected");
//   });
// });

app.use(bodyParser.json());

// Routes
const router = require("./app/routes");
app.use("/api/v1/", router);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
