const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
const socketHandler = require("./socket");

const authRoutes = require("./routes/auth");
const jeopardyRoutes = require("./routes/jeopardy");
const competitionRoutes = require("./routes/competition");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const corsOptions = {
  origin: "http://localhost:5173", // frontend URL
  credentials: true, // if using cookies or auth headers
};



// DB Connection
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jeopardy", jeopardyRoutes);
app.use("/api/competition", competitionRoutes);

// Socket.io
socketHandler(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
