import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { useSocket } from "../context/SocketContext";

export default function RunCompetition() {
  const socket = useSocket(); // inside the component

  useEffect(() => {
    if (!socket) return;

    socket.on("teamBuzzed", (teamId) => {
      console.log("Team buzzed:", teamId);
      // TODO: update UI with the buzzed team
    });

    return () => socket.off("teamBuzzed");
  }, [socket]);

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">Run Competition</h1>
        <p>Teams choose colors/numbers, then see question board (socket.io integration)</p>
      </div>
    </>
  );
}
