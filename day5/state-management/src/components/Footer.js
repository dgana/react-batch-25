import React from 'react'
import { setVisibilityFilter } from '../actions'
import Link from './Link'
import { connect } from 'react-redux'

const Footer = ({ clickMe, active }) => (
  <p>
    Show:{' '}
    <Link active={active === 'SHOW_ALL'} onClick={() => clickMe('SHOW_ALL')}>
      All
    </Link>
    {', '}
    <Link
      active={active === 'SHOW_ACTIVE'}
      onClick={() => clickMe('SHOW_ACTIVE')}
    >
      Active
    </Link>
    {', '}
    <Link
      active={active === 'SHOW_COMPLETED'}
      onClick={() => clickMe('SHOW_COMPLETED')}
    >
      Completed
    </Link>
  </p>
)

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => ({
  clickMe: filter => {
    dispatch(setVisibilityFilter(filter))
  }
})

const WrappedFooter = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default WrappedFooter
