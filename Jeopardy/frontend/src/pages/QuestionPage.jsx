import Navbar from "../components/common/Navbar";

export default function QuestionPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl mb-4">Question</h1>
        <p>Show question here, buttons: Correct, Wrong, Skip, Buzz for teams</p>
      </div>
    </>
  );
}
