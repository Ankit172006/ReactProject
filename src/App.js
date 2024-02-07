import React from 'react'
import Header from "./Header.js"
import Nav from "./Nav.js"
import Aside from './Aside.js'
import Main from "./Main.js"
import Display from "./Display.js"
import video1 from "./video/video1.mp4"
import video2 from "./video/video2.mp4"
// import { BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
function App() {
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
      
      <div className="column">
        
      <Main videoname={video1} posterimg="https://i.ytimg.com/vi/_vox_-nfjuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYYwhCXi2nncZy5mEhosrCUI6V7A" channellogo="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s68-c-k-c0x00ffffff-no-rj" videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohit" channelname="News24 Sports" views="11k views" time="33 minutes ago"/>  
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      </div>
      
      <div className="column">
      <Main videoname={video1} posterimg="https://i.ytimg.com/vi/_vox_-nfjuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYYwhCXi2nncZy5mEhosrCUI6V7A" channellogo="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s68-c-k-c0x00ffffff-no-rj" videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohit" channelname="News24 Sports" views="11k views" time="33 minutes ago"  />
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      </div>
      
      <div className="column">
      <Main videoname={video1} posterimg="https://i.ytimg.com/vi/_vox_-nfjuw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYYwhCXi2nncZy5mEhosrCUI6V7A" channellogo="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s68-c-k-c0x00ffffff-no-rj" videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये हैं 3 गुनहगार | Rohit" channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      <Main videoname={video2} posterimg="https://i.ytimg.com/vi/4SAh_g8pf64/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBmKBEwDw==&rs=AOn4CLDeeWsP8PPPi8NWDojYRoFcRTrtEg" channellogo="https://yt3.ggpht.com/ytc/AIf8zZSEWpFoJylNdBMZE5gCdXpvPRiMEZZ9RDAXe5ZL=s88-c-k-c0x00ffffff-no-rj" videotitle="Punjabi Songs 2021 | KIKLI : KPTAAN FT Ghost (Official Video) Tru G | Punjabi Songs 2021" channelname="47 Records" views="39M views" time="2 years ago" />
      </div>

      </div>

      </div>
      
      </div>
      </div>   
      {/* <div>
      <Display/>
      </div> */}
     
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
