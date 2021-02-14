import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App
