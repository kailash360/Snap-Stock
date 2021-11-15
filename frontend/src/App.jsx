import React,{useState,useEffect} from 'react'
import './App.css';
import Web3 from 'web3'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navigation from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import MyPosts from './components/MyPosts/MyPosts'
import config from './config'

function App() {

  const [data,setData] = useState([])
  const [search,setSearch] = useState('')
  const [myPosts,setMyPosts] = useState([])
  
  //Connect to the blockchain once the app loads
  useEffect(async() => {
    setData([])
    
    //connect to the blockchain and request for account
    const web3 = new Web3("http://localhost:7545")
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    config.ACCOUNT = accounts[0]

    //Create the contract instance using build, and add the builds
    const contract = new web3.eth.Contract(config.DECENTRAGRAM_ABI, config.DECENTRAGRAM_ADDRESS)
    config.METHODS = contract.methods
    
    console.log(config)
    
    //Insert all the images into data  
    const imageCount = await config.METHODS.image_count().call()
    
    let temp =[]
    for(let i=1; i<=imageCount; i++){
      
      let image = await config.METHODS.images(i).call()
      console.log(image)
      temp.push(image)
    }

    setData(temp)

  }, [])



  //Update posts on searching
  useEffect(() => {
    //Update the data on homepage
    let filterData = data.filter(post=>post.name.toLowerCase().includes(search.toLowerCase()))
    setData(filterData)
  },[search])


  return (
    <div className="App">
      <Router>
        <Navigation search={search} setSearch={setSearch}></Navigation>
        <Routes>
          <Route exact path="/" element={<Home posts={data} />} ></Route>
          <Route exact path="/my-posts" element={<MyPosts posts={data} />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
