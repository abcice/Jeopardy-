module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    // Example: team buzz
    socket.on("buzz", (teamId) => {
      console.log("Team buzzed:", teamId);
      io.emit("teamBuzzed", teamId); // send to all clients
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
