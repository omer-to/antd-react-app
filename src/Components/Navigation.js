import React from 'react'
import { Button } from 'antd'
import '../Styles/Navigation.css'

const Navigation = () => {
    return (
        <div className = "navigation">
            <Button className = "navigation-link" type="link" size="large"> Home </Button>
            <Button className = "navigation-link" type="link" size="large"> Support </Button>
            <Button className = "navigation-link" type="link" size="large"> Contact </Button>
        </div>
    )
}

export default Navigation
