import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Name from "./Pages/Name";
import List from "./Pages/List";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/list/:username" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
