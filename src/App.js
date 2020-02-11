import React, { Component } from "react"
import generator from "sudoku"
import SudokuBoard from "./components/SudokuBoard"
import "./App.css"

function genSudoku() {
  const raw = generator.makepuzzle()
  const res = { rows: [] }
  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i }
    for (let j = 0; j < 9; j++) {
      const val = raw[i * 9 + j]
      const col = { row: i, col: j, value: val, readonly: val !== null };
      row.cols.push(col);
    }
    res.rows.push(row);
  }
  return res;
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sudoku: genSudoku()
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku Test</h1>
        </header>
        <SudokuBoard sudoku={this.state.sudoku} />
      </div>
    )
  }
}

export default App
