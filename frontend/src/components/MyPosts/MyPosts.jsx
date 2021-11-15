import React,{useState} from 'react'
import Card from '../Home/Posts/Card/Card'
import '../Home/styles/Home.css'
import './styles/MyPosts.css'

function MyPosts({posts}) {

    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [minimumTip,setMinimumTip] = useState(0.001)
    const [uploadImage,setUploadImage] = useState(null)
    
    return (<>
        <div className="upload">
            <h3>Upload new post</h3>
            <div class="mb-3 col-3 my-3 mx-auto">
                <input class="form-control" type="file" id="formFile" onChange={(e)=>{setUploadImage(e.target.files[0])}} />
            </div>
            {uploadImage? 
                <>
                    <img 
                        src={URL.createObjectURL(uploadImage)} 
                        className="uploadImage" 
                        alt={URL.createObjectURL(uploadImage)} 
                    />
                    <h5>Add Details</h5>
                    <input class="form-control col-3 mx-auto my-1 h4 bold" type="text" id="formName" onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
                    <input class="form-control col-3 mx-auto my-1" type="text" id="formDescription" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description"/>
                    <input class="form-control col-3 mx-auto my-1" type="number" min="0.001" id="formTip" onChange={(e)=>{setMinimumTip(e.target.value)}} placeholder="Minimum Tip"/>
                    <label for="formTip" class="form-label" style={{marginLeft:'-300px',fontSize:'0.8em'}}>*in ETH</label>
                    <button className="btn btn-dark my-3 col-3">Upload</button>
                </>
            :""}
            
        </div>
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
