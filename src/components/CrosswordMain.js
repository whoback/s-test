import React, { Component } from "react";
import Picker from "./Date";
export default class CrosswordMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1990/05/05.json"
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json
        });
      });
  }

  //TODO
  render() {
    const { error, isLoaded, data, startDate, setStartDate } = this.state;

    if (error) {
      return <div>Error in loading</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div className="na">
          <header className="App-header">
            <h1>Crossword</h1>
          </header>
          <div className="row justify-content-end">
            <Picker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
          <ul className="crossword">
            <li>Title: {data.title}</li>
            <li>Author: {data.author}</li>
            <li>
              Date: {data.dow} {data.date}
            </li>
            <li>Editor: {data.editor}</li>
          </ul>

          <div className="clues-across">
            <ul>
              <h3>Across</h3>
              {data.clues.across.map((c, index) => (
                <li className="clue" key={index}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="clues-down">
            <ul>
              <h3>Down</h3>
              {data.clues.down.map((c, index) => (
                <li className="clue" key={index}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}
