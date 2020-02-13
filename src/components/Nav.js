import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SudokuMain from "./SudokuMain";
import CrosswordMain from "./CrosswordMain";
export default function Nav() {
  return (
    <Router>
      <nav>
        <ul className="navbar navbar-light">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sudoku" className="nav-link">
              Sudoku
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/crossword" className="nav-link">
              Crossword
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/sudoku">
          <Sudoku />
        </Route>
        <Route path="/crossword">
          <Crossword />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="row">
      <h2>Hello there! Landing page is a wip.</h2>
    </div>
  );
}

function Sudoku() {
  return <SudokuMain />;
}

function Crossword() {
  return <CrosswordMain />;
}
