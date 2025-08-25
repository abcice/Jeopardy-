import React, { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [jeopardies, setJeopardies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/jeopardy");
        setJeopardies(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Instructor Dashboard</h1>
      <ul>
        {jeopardies.map((game) => (
          <li key={game._id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
