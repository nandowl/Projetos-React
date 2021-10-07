import React, { Component } from 'react'
import cronometro from './assets/cronometro.png'
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0, 
      botao: 'Start'
    }
    this.timer = null
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
  }

  start() {
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      this.state.botao = 'Start'
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      },100)
      state.botao = 'Pause'
    }    
    this.setState(state)
  }

  reset() {
    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state
    state.numero = 0
    state.botao = 'Start'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
          <img className="img" src={cronometro} />
          <a className="timer">{this.state.numero.toFixed(1)}</a>
          <div className="areaBtn">
            <a className="botao" onClick={this.start}>{this.state.botao}</a>
            <a className="botao" onClick={this.reset}>Reset</a>
          </div>
      </div>
    )
  }
}
export default App;
