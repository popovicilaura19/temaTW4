import React, { Component } from 'react'
import RobotForm from './RobotForm';
import RobotList from './RobotList'

class App extends Component {
  render() {
    return (
      <div>
      	A list of robots
      	<RobotList />
      </div>
    )
  }
}

export default App;
