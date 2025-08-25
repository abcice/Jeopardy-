import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Jeopardy App</div>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-jeopardy">Create</Link>
      </div>
    </nav>
  );
}
