import React from 'react'
import Header from "./Header.js"
import Nav from "./Nav.js"
import Aside from './Aside.js'
import Main from "./Main.js"
import "./App.css"

function App() {
  return (
    <div style={{backgroundColor:"gray"}}>
      <Header/>
      <div className="main_content">
      <div className="left_side">
        <Aside/>
      </div>
      <div className="right_side">
      
      <Nav/>
      <div className="App_main_contant_container">

      <Main mainimg="https://i.ytimg.com/vi/HwvRa8FW7nM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2_mc8mET-k13jPWfYHrU2lhDDzw" channellogo="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s68-c-k-c0x00ffffff-no-rj" videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohit" channelname="News24 Sports" views="11k views" time="33 minutes ago" />
      <br />
      <Main/>
      <Main/>
      {/* <Main/>
      <Main/>
      <Main/>
      <Main/> */}
      
      </div>
     
      </div>
      </div>
    
    </div>
  )
}

export default App
