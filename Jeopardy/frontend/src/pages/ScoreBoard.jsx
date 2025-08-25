import Navbar from "../components/common/Navbar";

export default function ScoreBoard() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">Scoreboard</h1>
        <p>Show teams and scores sorted descending</p>
      </div>
    </>
  );
}
