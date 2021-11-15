import React from 'react'


function Card({name,description,hash,minimum_tip,createdAt,tippable=true}) {
    return (
        <div class="card my-2 mx-2 py-1 px-0" style={{width: "28rem"}}>
        <img class="card-img-top" src={"https://www.robohash.org/"+hash} alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <a href="#" class="btn btn-primary px-3" title = "Minimum Tip" style={{dispaly:tippable?"block":"none"}} >{minimum_tip} ETH</a>
            <p class="card-text" style={{opacity:"0.7",fontSize:"90%"}}>{createdAt}</p>
        </div>
        </div>
    )
}

export default Card
