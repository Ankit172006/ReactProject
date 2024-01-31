import React from 'react'
import "./Aside.css"
function Aside() {
  return (
    <div>
      <div className="main_aside">
        <div className="home_aside">
            <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Home</a>
                </div>
            </div>
            <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193a4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192a4.525 4.525 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"/></svg>
                </div>
                <div className="aside_name">
                  <a href="">Shorts</a>
                </div>
            </div>
            <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21V9h18v12zm1-1h16V10H4zm6.5-1.923L15.115 15L10.5 11.923zM4.5 7.23v-1h15v1zm3-2.77v-1h9v1zM4 20V10z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Subscription</a>
                </div>
            </div>
        </div>
        <hr className='hr' />
        <div className="you_aside">
           <div className="top_header">You/</div>
           <div className="aside_part">
            <div className="mini_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M94 120a34 34 0 1 1 34 34a34 34 0 0 1-34-34m-28.23 90a66.43 66.43 0 0 1 20.77-29.36a66 66 0 0 1 82.92 0A66.43 66.43 0 0 1 190.23 210ZM210 208a2 2 0 0 1-2 2h-5.17a77.85 77.85 0 0 0-49.38-51.71a46 46 0 1 0-50.9 0A77.85 77.85 0 0 0 53.17 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"/></svg>
            </div>
          <div className="aside_name">
            <a href="">Your Channel</a>
          </div>
           </div>
           <div className="aside_part">
            <div className="mini_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.636 18.364A9 9 0 1 0 3 12.004V14"/><path d="m1 12l2 2l2-2m6-4v5h5"/></g></svg>
            </div>
            <div className="aside_name">
              <a href="">History</a>
            </div>
           </div>
           <div className="aside_part">
            <div className="mini_logo"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"/></svg></div>
            <div className="aside_name">
              <a href="">Your Video</a>
            </div>
           </div>
           <div className="aside_part">
            <div className="mini_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/><path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"/></svg>
            </div>
            <div className="aside_name">
              <a href="">Watch List</a>
            </div>
           </div>
           <div className="aside_part">
            <div className="mini_logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m15 10l-.493-.082A.5.5 0 0 0 15 10.5zM4 10v-.5a.5.5 0 0 0-.5.5zm16.522 2.392l.49.098zM6 20.5h11.36v-1H6zm12.56-11H15v1h3.56zm-3.067.582l.806-4.835l-.986-.165l-.806 4.836zM14.82 3.5h-.213v1h.213zm-3.126 1.559L9.178 8.832l.832.555l2.515-3.774zM7.93 9.5H4v1h3.93zM3.5 10v8h1v-8zm16.312 8.49l1.2-6l-.98-.196l-1.2 6zM9.178 8.832A1.5 1.5 0 0 1 7.93 9.5v1a2.5 2.5 0 0 0 2.08-1.113zm7.121-3.585A1.5 1.5 0 0 0 14.82 3.5v1a.5.5 0 0 1 .494.582zM18.56 10.5a1.5 1.5 0 0 1 1.471 1.794l.98.196a2.5 2.5 0 0 0-2.45-2.99zm-1.2 10a2.5 2.5 0 0 0 2.452-2.01l-.98-.196A1.5 1.5 0 0 1 17.36 19.5zm-2.754-17a3.5 3.5 0 0 0-2.913 1.559l.832.554a2.5 2.5 0 0 1 2.08-1.113zM6 19.5A1.5 1.5 0 0 1 4.5 18h-1A2.5 2.5 0 0 0 6 20.5z"/><path stroke="currentColor" d="M8 10v10"/></g></svg>
            </div>
            <div className="aside_name">
              <a href="">Like</a>
            </div>
           </div>
        </div>
        <hr />
        <div className="subscription_aside">
          <div className="top_header">Subscription</div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Mrbeast</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/4C08xEwEeqPuErOztpHTiabcLtwqOjihucTszd_RVgIDym5sLvnvjJZng-IuHt90sty0XYyk=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">PK GAMERS</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/oXowbH1wDySOINdxwTMaoaJIJiAeL3gNPRLsE8XPaOmJ1F1NfuPfBXn8krfcDj0LPrRv-5Zo2A=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">As Gaming</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">News 24 Sports </a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZRQJAwiJzfUpSuvcX2ipwIOhDgwidIlc9bhlYUHrw=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Fukra Insaan</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Dhruv Rathee</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Taraak Metha Ka...</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/szR92lL8-5jqaQ6m1Lmh2EE7uRuv1XC_FWnEgX_eFx07r2A_GlXbMvubEO-sbALvTsfCsBzegA=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Royal Challenger...</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZSpYhkuJy8DgmzVnJYdhkDIIv0ef-HOMMhaGZvu9g=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Sports Universe</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZTiFWXmaebRzdihKnbqAuQHdAK6JafmhkZJGw9EfQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Triggered Insaan</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
           <div className="channel">
            <div className="sub_img"></div>
            <div className="sub_name"></div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
