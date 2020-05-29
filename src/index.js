import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'antd'

import Sign from './Components/Form'
import Navigation from './Components/Navigation'
import MainContent from './Components/MainContent'

import './Styles/App.css'
import 'antd/dist/antd.css'



class App extends Component {
    render() {
        return (            
                   
                        <Row id="top-root-row">
                            <Col span = {16} className ="left-col-group">
                                <Navigation />                                
                                <MainContent />                                
                            </Col>
                            
                            <Col span={6} push = {1} className = "right-col-group">
                                <Sign />
                            </Col>
                        </Row>

        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
