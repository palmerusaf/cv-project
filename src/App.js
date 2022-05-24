import "./App.scss";
import React from "react";
import Title from './components/title.js'
import Directions from './components/directions.js'



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <Title></Title>
        <Directions></Directions>
      </div>
    );
  }
}

export default App;
