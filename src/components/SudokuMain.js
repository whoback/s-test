import React, { Component } from "react";
import generator from "sudoku";
import produce from "immer";
import SudokuBoard from "./SudokuBoard";
import Button from "react-bootstrap/Button";

function genSudoku() {
  const raw = generator.makepuzzle();
  const rawSolution = generator.solvepuzzle(raw);

  const formattedSolution = rawSolution.map(e => e + 1);
  const res = { rows: [], solution: formattedSolution };
  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = { row: i, col: j, value: value, readonly: value !== null };
      row.cols.push(col);
    }
    res.rows.push(row);
  }
  return res;
}

function checkSolution(sudoku) {
  const candidate = sudoku.rows
    .map(row => row.cols.map(col => col.value))
    .flat();

  for (let i = 0; i < candidate.length; i++) {
    if (candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
      return false;
    }
  }
  return true;
}
export default class SudokuMain extends Component {
  constructor(props) {
    super(props);
    this.state = produce({}, () => ({
      sudoku: genSudoku(),
      winner: false
    }));
  }

  handleChange = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value;
        const solved = checkSolution(state.sudoku);
        if (solved) {
          state.winner = true;
          console.log(state.winner);
        }
      })
    );
  };

  solveSudoku = e => {
    this.setState(
      produce(state => {
        state.sudoku.rows.forEach(row =>
          row.cols.forEach(col => {
            col.value = state.sudoku.solution[col.row * 9 + col.col];
          })
        );
      })
    );
  };
  printSoduku = e => {
    window.print();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku</h1>
        </header>
        <div className="d-flex justify-content-center">
          <SudokuBoard
            sudoku={this.state.sudoku}
            onChange={this.handleChange}
          />
        </div>
        <Button
          onClick={this.printSoduku}
          variant="primary"
          className="d-print-none"
        >
          Print the puzzle
        </Button>{" "}
        <Button
          onClick={this.solveSudoku}
          variant="primary"
          className="d-print-none"
        >
          Solve the puzzle
        </Button>{" "}
      </div>
    );
  }
}
