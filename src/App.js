import React from 'react'
import Display from "./Display.js"
import Home from './Home.js'

// import New from "./New.js"
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
function App() {
  return (
  
  <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Display" element={<Display/>} />
        </Routes>
        </BrowserRouter>

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
