import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './footer.scss'

export default class Footer extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func
  }
  renderFilter (filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <a href='' onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render () {
    return (
      <p className='footer_p'>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    )
  }
}
