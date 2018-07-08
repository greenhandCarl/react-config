import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './addTodo.scss';
import styles from './test.css'
import { Button, Input, Row, Col } from 'antd'

export default class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: undefined
    }
  }
  static propTypes = {
    onAddClick: PropTypes.func
  }
  inputValueChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  render () {
    return (
      <div className={styles.add_input}>
        <Row>
          <Col span={4} offset={10}>
            <Input type='text' ref='input' value={this.state.inputValue} onChange={this.inputValueChange} />
          </Col>
          <Col span={2} style={{ margin: 5 }}>
            <Button type='primary' onClick={(e) => this.handleClick(e)}>
              添加
            </Button>
          </Col>
        </Row>
      </div>
    )
  }

  handleClick = () => {
    console.log(this.refs.input.props)
    const inputValue = this.state.inputValue
    const text = inputValue.trim()
    this.props.onAddClick(text)
    this.setState({inputValue: undefined})
  }
}
