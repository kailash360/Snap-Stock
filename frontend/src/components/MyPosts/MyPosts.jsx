import React,{useState,useEffect} from 'react'
import Card from '../Home/Posts/Card/Card'
import '../Home/styles/Home.css'
import './styles/MyPosts.css'
import Upload from './Upload/Upload'
import config from '../../config.js'

function MyPosts({posts,load}) {

    const [myPosts,setMyPosts] = useState([])
    useEffect(() => {
        setMyPosts(posts.filter(post=>post.author.toLowerCase()===config.ACCOUNT))
    },[posts])
    
    return (<>
        <Upload load={load} />
        <div className="home">
            <h3>My Posts</h3>
            {myPosts && myPosts.length?myPosts.map(post=> 
                <Card
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
