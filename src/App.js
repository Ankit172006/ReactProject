import React from 'react'
import Display from "./Display.js"
import Home from './Home.js'
// import Apifatch from "./video/Apifatch.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
function App() {
  return (
  
 
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/display" element={<Display/>} />
        </Routes>
        </BrowserRouter>

 
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
