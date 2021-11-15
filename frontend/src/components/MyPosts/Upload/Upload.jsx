import React,{useState,useEffect} from 'react'
import Web3 from 'web3'
import '../styles/MyPosts.css'
import config from '../../../config.js'
import * as IPFS from 'ipfs-core'


function Upload() {
    
    const [name,setName] = useState("test")
    const [description,setDescription] = useState("jhghjgjhkgjhkgjhkghjgjhgjkhgkjhghjgjhgkhjgkhjgjkg")
    const [minimumTip,setMinimumTip] = useState(0.001)
    const [uploadImage,setUploadImage] = useState(null)

    const handleUpload = async() => {

        const node = await IPFS.create()

        console.log(node)

        if(!name || !description || !minimumTip || !uploadImage){
            return
        }

        const ipfsUploadResult = await node.add(uploadImage)
        console.log(ipfsUploadResult)
        const blockchainUploadResult = await config.METHODS.upload_image(ipfsUploadResult.path,name,description,config.ACCOUNT,new Web3.utils.BN(minimumTip)).send({from:config.ACCOUNT,gas:3000000})
        console.log( blockchainUploadResult)
    }

    return (
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
                    <input class="form-control col-3 mx-auto my-1 h4 bold" type="text" id="formName" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" value={name}/>
                    <input class="form-control col-3 mx-auto my-1" type="text" id="formDescription" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" value={description} />
                    <input class="form-control col-3 mx-auto my-1" type="number" min="0.001" id="formTip" onChange={(e)=>{setMinimumTip(e.target.value)}} placeholder="Minimum Tip" value={minimumTip} />
                    <label for="formTip" class="form-label" style={{marginLeft:'-300px',fontSize:'0.8em'}}>*in ETH</label>
                    <button className="btn btn-dark my-3 col-3" onClick={handleUpload} >Upload</button>
                </>
            :""}
            
        </div>
    )
}

export default Upload
