import React from 'react'
import { Typography } from 'antd'

import Posts from './Posts'
import Shape from './Shape'

import '../Styles/MainContent.css'


const { Title, Paragraph } = Typography
let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non imperdiet ante, vel ullamcorper justo. Etiam ullamcorper eros est."


const MainContent = () => {
    return (
        <>
            <div className="ant-col ant-col-push-1" style = {{display: "flex"}}>
                <div>
                    <Title className="header">New Features <span>in <span className="header-in-bold">Designer</span></span></Title>
                    <Paragraph className="paragraph">
                        {content}
                    </Paragraph>
                </div>
                <div style={{position: "relative"}}>
                    <Shape />
                </div>
            </div>
                
            
                <Posts />
            

        </>
    )
}

export default MainContent



