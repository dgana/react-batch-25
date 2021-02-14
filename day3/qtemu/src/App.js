import React, { Component } from "react";
import People from "./components/People";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      value: "",
      peoples: [
        {
          name: "Obi Wan",
          status: "Jedi"
        },
        {
          name: "Luke Skywalker",
          status: "Padawan"
        },
        {
          name: "Darth Vader",
          status: "bad guy"
        },
        {
          name: "Leia",
          status: "bad guy"
        },
        {
          name: "asdlaskjdskal",
          status: "bad guy"
        }
      ]
    };
    this.loggingIn = this.loggingIn.bind(this);
    this.loggingOut = this.loggingOut.bind(this);
  }

  loggingIn() {
    this.setState({ username: "Riza" });
  }

  loggingOut() {
    this.setState({ username: "Hacktiv8" });
  }

  deletePeople = () => {
    this.setState({ peoples: [] });
  };

  addPeople = () => {
    this.setState(state => ({
      peoples: [...state.peoples].concat([
        { name: this.state.value, status: "" }
      ])
    }));
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { username, peoples, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.onChange} />
        <button onClick={this.addPeople}>Add People</button>
        <button onClick={this.loggingIn}>Logging In</button>
        <button onClick={this.loggingOut}>Logging Out</button>
        <p>{username}</p>
        {peoples.map((x, i) => (
          <People
            deletePeople={this.deletePeople}
            anything={10}
            peoples={peoples}
            key={i}
            name={x.name}
            status={x.status}
          />
        ))}
      </div>
    );
  }
}

export default App;
