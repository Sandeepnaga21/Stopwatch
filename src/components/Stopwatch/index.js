import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  onStartBtnClicked = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  onStopBtnClicked = () => {
    this.setState(prevState => ({time: prevState.time}))
  }

  onResetBtnClicked = () => {
    this.setState({time: 0})
  }

  render() {
    const {time} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p className="about">Timer</p>
          </div>
          <h1 className="timer">{time}0:00</h1>
          <div className="buttons">
            <button
              className="start-button"
              type="button"
              onClick={this.onStartBtnClicked}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.onStopBtnClicked}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onResetBtnClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
