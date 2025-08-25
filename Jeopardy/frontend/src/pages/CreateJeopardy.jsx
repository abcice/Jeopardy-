import Navbar from "../components/common/Navbar";

export default function CreateJeopardy() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">Create Jeopardy</h1>
        <p>Form to create categories, questions, points, daily double, etc. (will connect to backend)</p>
      </div>
    </>
  );
}
