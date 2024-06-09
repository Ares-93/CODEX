import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/classes" Component={DndClasses} />
          <Route path="/spells" Component={DndSpells} />
          <Route path="/gpt4" Component={Gpt4Generator} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
