// create your App component here
import React, { Component } from "react";
const api = "http://api.open-notify.org/astros.json";

class App extends Component {
  fetchData = () => {
    return fetch(api).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <div>app</div>;
  }
}

export default App;
