import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateJeopardy from "./pages/CreateJeopardy";
import RunCompetition from "./pages/RunCompetition";
import QuestionPage from "./pages/QuestionPage";
import ScoreBoard from "./pages/ScoreBoard";

const routes = [
  { path: "/", Component: Login },
  { path: "/register", Component: Register },
  { path: "/dashboard", Component: Dashboard },
  { path: "/create-jeopardy", Component: CreateJeopardy },
  { path: "/run-competition/:id", Component: RunCompetition },
  { path: "/question/:id", Component: QuestionPage },
  { path: "/scoreboard/:id", Component: ScoreBoard },
];

export default routes;
