let currentBuzz = null;

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected: " + socket.id);

    socket.on("chooseTeam", (team) => {
      socket.join(team);
      io.emit("teamJoined", team);
    });

    socket.on("buzz", (team) => {
      if (!currentBuzz) {
        currentBuzz = team;
        io.emit("buzzPressed", team);
      }
    });

    socket.on("resetBuzz", () => {
      currentBuzz = null;
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected: " + socket.id);
    });
  });
};
