import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }, idx) => (
          <Route key={idx} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}
