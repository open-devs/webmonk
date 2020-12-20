import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosList from "./TodosList";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Nav from "./Nav";
import SetEmail from "./SetEmail";

import "bootstrap/dist/css/bootstrap.min.css";

//NOTE: try to work on lazy loading

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/set-email" component={SetEmail} />
        </div>
      </div>
    </Router>
  );
}

export default App;
