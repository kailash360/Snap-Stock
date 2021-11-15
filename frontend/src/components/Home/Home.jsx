import React from 'react'
import Card from './Posts/Card/Card'
import './styles/Home.css'

function Home({posts}) {
    console.log("Posts ===>",posts)
    return (
        <div className="home">
            {posts.map(post=><Card
                    name = {post.name}
                    description = {post.description}
                    hash = {post.hash}
                    minimum_tip = {post.minimum_tip}
                    createdAt = {post.createdAt}
                ></Card>)}
        </div>
    )
}

export default Home
