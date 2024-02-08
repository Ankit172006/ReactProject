import React from 'react'
import Header from "./Header.js"
import Nav from "./Nav.js"
import Aside from './Aside.js'
import Main from "./Main.js"
import Display from "./Display.js"
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
import New from "./New.js"

// import New from "./New.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
function App() {
  return (
  
  <div>
       
       {/* <New/> */}
      <Header/>
       <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        
        <Route path="/display" element={<Display/>} />
        {/* </Route> */}
        </Routes>
        </BrowserRouter>

      {/* <Display/> */}
     </div>
  )
}

export default App





































      //  {/* <BrowserRouter>
      //   <Header/>
      //   <Routes>
      //   <Route path="/"/>
      //   <Route path="/display" element={<Display/>}/>
      //   <Route path="/app" element={<App/>}/>
      //   </Routes>
      //  </BrowserRouter>  */}
