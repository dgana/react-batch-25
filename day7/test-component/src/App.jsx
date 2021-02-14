import React from 'react'
import logo from './logo.svg'
import './App.css'

const array = [1, 2, 3, 4, 5]

class App extends React.Component {
  render() {
    return null
  }
}

export const ItemList = ({ items }) => {
  return items.length ? (
    <ul>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  ) : (
    'no items'
  )
}

export const sum = (a, b) => {
  if (b === 7) return 1
  return a + b
}

export default App
