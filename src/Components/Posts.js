import React from 'react'
import Post from './Post'

import '../Styles/Posts.css'

let bottomContentHeaders = ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor", "Lorem ipsum"]
let bottomContentParagraphs = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam animi rem veritatis iure, delectus voluptas dolore ipsa sed enim blanditiis earum voluptate quo! Ipsam deserunt voluptatibus ratione architecto!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure voluptatem explicabo veniam aspernatur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque assumenda voluptatum at inventore praesentium placeat aut possimus delectus fuga!"
]
const Posts = () => {
    return (
        <div className="posts">
        {
            [...new Array(bottomContentHeaders.length)].map((item,index) => (
                <Post header = {bottomContentHeaders[index]} paragraph = {bottomContentParagraphs[index]}/>
            ))
        }
        </div>
    )
}
export default Posts
