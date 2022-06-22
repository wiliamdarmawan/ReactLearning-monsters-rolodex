import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "123123123",
        },
        {
          name: "Frank",
          id: "123123123123",
        },
        {
          name: "Jacky",
          id: "123123123123123",
        },
        {
          name: "Andrei",
          id: "123123123123eqwe",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
