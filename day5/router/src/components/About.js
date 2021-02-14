import React from 'react'
import PropTypes from 'prop-types'

const About = ({ name }) => {
  return (
    <div>
      <p>This is about page {name}</p>
    </div>
  )
}

About.propTypes = {}

export default About
