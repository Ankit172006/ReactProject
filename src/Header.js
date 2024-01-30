import React from 'react'
import "./Header.css"
function Header() {

  return (
    <div>
      <div className="mainheader">
        <div className="first_section">
            <div className="hamber_gun">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 640H0V512h2048zm0 1024H0v-128h2048zm0-513H0v-127h2048z"/></svg>
            
            </div>
            <div className="main_logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKg2LqGnCrSRHciLgPtI43Pp6X_Wm_Utyrw&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="second_section"> 
          <div className="search_bar">
            <input type="text" placeholder='Search' />
           <div className="search_logo">
           <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="11" cy="11" r="5.5"/><path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4"/></g></svg>
           </div>
          </div>
          <div className="mic_section">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3"/><path fill="currentColor" d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92z"/></svg>
          </div>
        </div>
        <div className="third_section">
            <div className="video_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zM8 8h2v3h3v2H9.999L10 16H8l-.001-3H5v-2h3zm13 .841l-4 2.8v.718l4 2.8z"/></svg>
            </div>
            <div className="notification">
            <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm5.708 12a2.5 2.5 0 0 0 4.584 0zM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6"/></svg>
            </div>
            <div className="gmail_section">
                <a href="">A</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
