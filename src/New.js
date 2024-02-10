import React from 'react'
import Header from "./Header.js"
import Nav from "./Nav.js"
import Aside from './Aside.js'
import Main from "./Main.js"
import Display from "./Display.js"
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
import "./New.css"
import { Form, Link } from 'react-router-dom'
import "./App.css"
import Videodata from './Videodata.js'
export default function New() {

  return (
    <div>
    <div>

<Header/>
<div className="main_content">
<div className="left_side">
  <Aside/>
</div>
<div className="right_side">
<Nav/>
<div className="App_main_contant_container">
<Videodata/>
</div>
</div>
</div>
</div>
    </div>
  )
}
