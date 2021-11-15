import React from 'react'
import config from '../../../../config.js'
import toast from 'react-hot-toast'

function Card({imageId,name,description,hash,minimum_tip,tippable=true}) {

    const handleTip = async()=>{
        try{
            const tipResult = await config.METHODS.tip_image(imageId).send({from:config.ACCOUNT,value: config.WEB3.utils.toWei('0.1','Ether'),gas:3000000})

            toast.success("Tipped successfully")
        }catch(err){
            console.log(err)
            toast.error(err)
        }
    }

    return (
        <div className="card my-2 mx-2 py-1 px-0" style={{width: "28rem"}}>
        <img className="card-img-top" src={"https://ipfs.io/ipfs/"+hash} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary px-3" title = "Minimum Tip" style={{dispaly:tippable?"block":"none"}} onClick={handleTip} >Tip</button>
            <p className="card-text" style={{opacity:"0.7",fontSize:"90%"}}>Minimum Tip : {minimum_tip} ETH</p>
        </div>
        </div>
    )
}

export default Card
