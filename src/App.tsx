import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AnimePage from "./pages/AnimePage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/anime/:id" element={<AnimePage />} />
    </Routes>
  </Router>
);

export default App;
