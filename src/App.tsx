import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DndClasses from "./components/dnd-classes";
import DndSpells from "./components/dnd-spells";
import Gpt4Generator from "./components/gpt-gen";

const App: React.FC = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <a href="/classes" className="mr-4">
            Classes
          </a>
          <a href="/spells" className="mr-4">
            Spells
          </a>
          <a href="/gpt4">GPT-4 Generator</a>
        </nav>
        <Routes>
          <Route path="/classes" element={<DndClasses />} />
          <Route path="/spells" element={<DndSpells />} />
          <Route path="/gpt4" element={<Gpt4Generator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
