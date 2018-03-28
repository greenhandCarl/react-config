import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './addTodo.scss';
import styles from './test.css'

export default class AddTodo extends Component {
  static propTypes = {
    onAddClick: PropTypes.func
  }
  render () {
    return (
      <div className={styles.add_input}>
        <input type='text' ref='input' />
        <button className={styles.btn} onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick (e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}
