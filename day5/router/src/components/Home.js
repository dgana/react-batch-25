import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <p>This is Home Page</p>
      <Link to="/about">Go to the about page</Link>
    </div>
  )
}

Home.propTypes = {}

export default Home
