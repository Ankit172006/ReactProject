import React from 'react'
import Header from "./Header.js"
import Nav from "./Nav.js"
import Aside from './Aside.js'
import "./App.css"

function App() {
  return (
    <div>
      <Header/>
      <div className="main_content">
      <div className="left_side">
        <Aside/>
      </div>
      <div className="right_side">
      
      <Nav/>
      </div>
      </div>
    
    </div>
  )
}

export default App
