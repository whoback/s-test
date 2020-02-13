import React, { Component } from "react";
import SudokuField from "./SudokuField";
export default class SudokuBoard extends Component {
  render() {
    const { sudoku, onChange, className } = this.props;
    return (
      <div id="board">
        {sudoku.rows.map(row => (
          <div className="row" key={row.index}>
            {row.cols.map(field => (
              <SudokuField
                field={field}
                key={field.col}
                onChange={onChange}
                className={className}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
