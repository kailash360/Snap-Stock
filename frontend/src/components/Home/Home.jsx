import React from 'react'
import Card from './Posts/Card/Card'
import './styles/Home.css'
import {Toaster} from 'react-hot-toast'

function Home({posts}) {
    console.log("Posts ===>",posts)
    return (
        <div className="home">
            <Toaster></Toaster>
            {posts && posts.length?posts.map((post,index)=><Card
                    imageId = {post.image_id}
                    name = {post.name}
                    description = {post.description}
                    hash = {post.hash}
                    minimum_tip = {post.minimum_tip}
                    createdAt = {post.createdAt}
                ></Card>)
            : <p className="message">Nothing has been uploaded yet</p>
            }
        </div>
    )
}

export default Home
