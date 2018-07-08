import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import './todoList.scss'
import { Row, Col } from 'antd'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
  }
  render () {
    return (
      <Row>
        <Col span={6} offset={10}>
          <ul className='todoList'>
            {this.props.todos.map((todo, index) => (
              <Todo
                {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)}
              />
            ))}
          </ul>
        </Col>
      </Row>
    )
  }
}
