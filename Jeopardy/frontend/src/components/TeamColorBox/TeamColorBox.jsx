export default function TeamColorBox({ team }) {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded text-white font-bold"
      style={{ backgroundColor: team.color || "#555" }}
    >
      {team.name}
    </div>
  );
}
