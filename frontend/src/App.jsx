import React,{useState,useEffect} from 'react'
import './App.css';
import Web3 from 'web3'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navigation from './components/Navbar/Navbar'

function App() {

  const [account,setAccount] = useState(null)

  const load = async() => {
    try{
      const web3 = new Web3("http://localhost:7545") 
      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])

      console.log(web3)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    load()
  }, [])


  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" ></Route>
          <Route path="/my-posts" ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
