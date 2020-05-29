import React from 'react'
import { Row, Col } from 'antd'


const BottomContent = props => {
    const {header, paragraph} = props
    return (
        <Row>
            <Col span={5} push={1}>
                <h4> {header} </h4>
            </Col>
            <Col span={15} push={4}>
                <p> {paragraph} </p>
            </Col>
        </Row>    
    )
}

export default BottomContent
