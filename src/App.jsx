import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Name from "./Pages/Name";
import List from "./Pages/List";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
