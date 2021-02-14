import React, { Component } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/about"
            render={renderProps => (
              <div>
                <Link to="/about/ari">Ari</Link>
                <Link to="/about/nate">Nate</Link>
                <Link to="/about/hacktiv8">Hacktiv8</Link>
                <Link to="/company">Company</Link>
                <Route path="/company" render={() => <Redirect to="/" />} />
                <Route
                  path="/about/:reactApp"
                  render={renderProps => (
                    <div>
                      <About name={renderProps.match.params.reactApp} />
                      <Link to="/">Go home</Link>
                    </div>
                  )}
                />
              </div>
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
