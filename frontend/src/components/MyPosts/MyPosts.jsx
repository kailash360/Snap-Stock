import React,{useState} from 'react'
import Card from '../Home/Posts/Card/Card'
import '../Home/styles/Home.css'
import './styles/MyPosts.css'
import Upload from './Upload/Upload'

function MyPosts({posts}) {


    
    return (<>
        <Upload/>
        <div className="home">
            <h3>My Posts</h3>
            {posts && posts.length?posts.map(post=><Card
                    name = {post.name}
                    description = {post.description}
                    hash = {post.hash}
                    minimum_tip = {post.minimum_tip}
                    createdAt = {post.createdAt}
                    tippable={false}
                ></Card>)
            : <p>Nothing to show here</p>
            }
        </div>
    </>)
}

export default MyPosts
