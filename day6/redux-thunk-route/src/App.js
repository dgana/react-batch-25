import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="ma0 pa3 bg-gainsboro">
          <ul className="flex justify-around">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
