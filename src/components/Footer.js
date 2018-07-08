import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './footer.scss'
import { Row, Col } from 'antd'

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
      <div className='footer_p'>
        <Row>
          <Col span={6} offset={10}>
            <Col span={4}>
            显示：
            </Col>
            <Col span={20}>
              <Col span={6}>
                {this.renderFilter('SHOW_ALL', '全部')}&nbsp;
              </Col>
              <Col span={6}>
                {this.renderFilter('SHOW_COMPLETED', '已完成')}&nbsp;
              </Col>
              <Col span={6}>
                {this.renderFilter('SHOW_ACTIVE', '未完成')}
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}
