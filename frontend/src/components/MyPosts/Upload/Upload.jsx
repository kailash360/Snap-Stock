import React,{useState} from 'react'
import Web3 from 'web3'
import '../styles/MyPosts.css'
import config from '../../../config.js'
import * as IPFS from 'ipfs-core'
import toast,{Toaster} from 'react-hot-toast'


function Upload({load}) {
    
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [minimumTip,setMinimumTip] = useState(1)
    const [uploadImage,setUploadImage] = useState(null)

    const handleUpload = async() => {
        try{
            const node = await IPFS.create({repo:'ok'+Math.random()})

            if(!name || !description || !minimumTip || !uploadImage){
                toast.error("Fields cannot be empty")
                return
            }

            const ipfsUploadResult = await node.add(uploadImage)
        
            //convert amount to Big Number
            let bigMinimumTip = new Web3.utils.BN(minimumTip)
            
            const blockchainUploadResult = await config.METHODS.upload_image(ipfsUploadResult.path,name,description,config.ACCOUNT).send({from:config.ACCOUNT,gas:3000000,value:bigMinimumTip})
            
            toast.success("Image uploaded successfully",{duration:3000})
            console.log("Image uploaded successfully")

            load()
            setName('')
            setDescription('')
            setUploadImage(null)
            
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className="upload">
            <Toaster  position="top-center"/>
            <h3>Upload new post</h3>
            <div className="mb-3 col-3 my-3 mx-auto">
                <input className="form-control" type="file" id="formFile" onChange={(e)=>{setUploadImage(e.target.files[0])}} />
            </div>
            {uploadImage? 
                <>
                    <img 
                        src={URL.createObjectURL(uploadImage)} 
                        className="uploadImage" 
                        alt={URL.createObjectURL(uploadImage)} 
                    />
                    <h5>Add Details</h5>
                    <input className="form-control col-3 mx-auto my-1 h4 bold" type="text" id="formName" onChange={(e)=>{setName(e.target.value)}} placeholder="Name" value={name}/>
                    <input className="form-control col-3 mx-auto my-1" type="text" id="formDescription" onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" value={description} />
                    <input className="form-control col-3 mx-auto my-1" type="number" min="1" id="formTip" onChange={(e)=>{setMinimumTip(e.target.value)}} placeholder="Minimum Tip" value={minimumTip} />
                    <label for="formTip" className="form-label" style={{marginLeft:'-300px',fontSize:'0.8em'}}>*in ETH</label>
                    <button className="btn btn-dark my-3 col-3" onClick={handleUpload} >Upload</button>
                </>
            :""}
            
        </div>
    )
}

export default Upload
