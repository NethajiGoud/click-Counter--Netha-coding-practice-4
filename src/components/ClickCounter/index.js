// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  OnIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="conatiner">
        <h1>The button has been clicked {count} times</h1>
        <p> Click the button to increase the count!</p>
        <button type="button" onClick={this.OnIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
