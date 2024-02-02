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
           <div className="top_header" style={{paddingLeft:"0px"}}>You/</div>
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
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZRS_S-XLEIRH3dfEhSv6Yp2CY8Cp6WWJw1660ctrQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Ranveer Allahba</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/FhjsApMVNAz9tC8lSPai89DDW3PySLMqwGcubPWR_o5KFcd--StMyngwkENYrwywSoqwKVYoag=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Navjot Brar</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">CarryMinati</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZScEeN2LrwAO2mMQQT55TfEQ8CV2BN6_lC85jD6qg=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">AndreoBee</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Netflix India</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/P-YRry-uFvTRu3Nd_XKuRjzO5VnRVEfyr9ho3978pi9RC8hYqsttVklL6yv8Z6a5-9YT2DNRvFc=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Anurag Dwivedi</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/M4rz4qAzB93dOTF_2Oexwra1sYJcfsvHMkN-2cnxWo1rm-J_Fe2cfA1Qr2qi43JB9TCxVtJd=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Manoj saru</a>
            </div>
           </div>
           <div className="channel">
            <div className="sub_img">
              <img src="https://yt3.ggpht.com/ytc/AIf8zZSRjNnh2jihP3qt_l-eyiKoli5iXIH58Sey248iRw=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className="sub_name">
              <a href="">Sidhu Moose Wala</a>
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
        </div>
        <hr />
        <div className="explore_part">
          <div className="top_header" style={{paddingLeft:"0px"}}>Explore_</div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16"><path fill="currentColor" d="M9.32 15.653a.812.812 0 0 1-.086-.855c.176-.342.245-.733.2-1.118a2.106 2.106 0 0 0-.267-.779a2.027 2.027 0 0 0-.541-.606a3.96 3.96 0 0 1-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.748.748 0 0 1-.014.901a.87.87 0 0 1-.394.283a.838.838 0 0 1-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686 4.686 0 0 1-.906-1.555a4.811 4.811 0 0 1-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.621.621 0 0 1 .112-.653a.558.558 0 0 1 .623-.147l.146.058a7.63 7.63 0 0 1 2.96 3.5c.58 1.413.576 3.06.184 4.527c.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013c.086.137 2.292 3.343 1.107 6.048a5.516 5.516 0 0 1-1.84 2.027a6.127 6.127 0 0 1-2.138.893a.834.834 0 0 1-.472-.038a.867.867 0 0 1-.381-.29zM7.554 7.892a.422.422 0 0 1 .55.146c.04.059.066.126.075.198l.045.349c.02.511.014 1.045.213 1.536c.206.504.526.95.932 1.298a3.06 3.06 0 0 1 1.16 1.422c.22.564.25 1.19.084 1.773a4.123 4.123 0 0 0 1.39-.757l.103-.084c.336-.277.613-.623.813-1.017c.201-.393.322-.825.354-1.269c.065-1.025-.284-2.054-.827-2.972c-.248.36-.59.639-.985.804c-.247.105-.509.17-.776.19a.792.792 0 0 1-.439-.1a.832.832 0 0 1-.321-.328a.825.825 0 0 1-.035-.729c.412-.972.54-2.05.365-3.097a5.874 5.874 0 0 0-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a3.537 3.537 0 0 1-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.678 3.678 0 0 0 .459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Trending</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V8.615q0-.69.463-1.152Q5.925 7 6.615 7H8.5v-.5q0-1.458 1.021-2.479T12 3q1.458 0 2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h10.77q.23 0 .423-.192q.192-.193.192-.423V8.615q0-.23-.192-.423Q17.615 8 17.385 8H15.5v2.5q0 .213-.143.357Q15.213 11 15 11t-.357-.143q-.143-.144-.143-.357V8h-5v2.5q0 .213-.143.357Q9.213 11 9 11t-.357-.143Q8.5 10.713 8.5 10.5V8H6.615q-.23 0-.423.192Q6 8.385 6 8.615v10.77q0 .23.192.423q.193.192.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4q-1.056 0-1.778.722T9.5 6.5zM6 20V8z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Shopping</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.633 9.177L14 10.72v6.78a4.5 4.5 0 1 1-2-3.742V6.442a3 3 0 0 1 2.051-2.846l3.975-1.325A1.5 1.5 0 0 1 20 3.694v3.585a2 2 0 0 1-1.367 1.898m-3.95-3.684L18 4.387V7.28l-4 1.334V6.442a1 1 0 0 1 .684-.95ZM12 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/></g></svg>
                </div>
                <div className="aside_name">
                    <a href="">Music</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.365 6.127h11.447v6.232a1 1 0 0 1-1 1H2.366a1 1 0 0 1-1-1zm-.001 0L12.42 3.164l-.48-1.79a1 1 0 0 0-1.225-.708L1.591 3.112a1 1 0 0 0-.707 1.224zm2.626 4.69h1.278m-.871-5.503l.64-3.126m2.972 2.158l.64-3.126"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Films</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5.99 4.929a.75.75 0 0 1 0 1.06a8.5 8.5 0 0 0 0 12.021a.75.75 0 0 1-1.061 1.06c-3.905-3.905-3.905-10.236 0-14.141a.75.75 0 0 1 1.06 0m13.081 0c3.905 3.905 3.905 10.237 0 14.142a.75.75 0 0 1-1.06-1.06a8.5 8.5 0 0 0 0-12.022a.75.75 0 1 1 1.06-1.06M8.818 7.757a.75.75 0 0 1 0 1.06a4.5 4.5 0 0 0 0 6.365a.75.75 0 0 1-1.06 1.06a6 6 0 0 1 0-8.485a.75.75 0 0 1 1.06 0m7.425 0a6 6 0 0 1 0 8.485a.75.75 0 1 1-1.061-1.06a4.5 4.5 0 0 0 0-6.364a.75.75 0 0 1 1.06-1.06M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Live</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M24 13.2v-6l-6-3.6l-6 3.6l-6-3.6l-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2m3.6-2.4A1.2 1.2 0 0 1 18 9.6c0-.66.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Gaming</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h9.962L20 8.423v9.962q0 .69-.462 1.152q-.463.463-1.153.463zM7.5 16h9v-1h-9zm0-3.5h9v-1h-9zM15 9h4l-4-4zM7.5 9H12V8H7.5z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">News</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M8.385 20v-1H11.5v-3.754q-1.321-.236-2.312-1.105t-1.365-2.153q-1.586-.186-2.705-1.3Q4 9.573 4 8V7q0-.402.299-.701Q4.599 6 5 6h2.654V4h8.692v2H19q.402 0 .701.299q.299.3.299.701v1q0 1.573-1.118 2.688q-1.119 1.114-2.705 1.3q-.373 1.285-1.364 2.153q-.992.869-2.313 1.105V19h3.115v1zm-.731-9.085V7H5v1q0 1.142.762 1.963q.761.82 1.892.952M12 14.27q1.385 0 2.346-.961q.962-.962.962-2.346V5H8.692v5.962q0 1.384.962 2.346q.961.961 2.346.961m4.346-3.354q1.13-.132 1.892-.953Q19 9.142 19 8V7h-2.654zM12 9.635"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Sports</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.24C41.74 57.91 79.39 19.12 125.93 18A86 86 0 0 1 214 104m-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104m-20.08-9A55.58 55.58 0 0 0 137 50.08a6 6 0 1 0-2 11.84c17.38 2.92 32.13 17.68 35.08 35.08a6 6 0 0 0 5.91 5a6.87 6.87 0 0 0 1-.08a6 6 0 0 0 4.93-6.92"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Bulb</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72c0-1.1.9-2 2-2s2 .9 2 2m-2-6c-3.31 0-6 2.69-6 6c0 1.74.75 3.31 1.94 4.4l1.42-1.42A3.957 3.957 0 0 1 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42A5.957 5.957 0 0 0 18 12c0-3.31-2.69-6-6-6m0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42A7.987 7.987 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Podcast</a>
                </div>
          </div>
        </div>
        <hr />
        <div className="last_container">
        <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Setting</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20.5V5h7.192l.4 2H19v8h-5.192l-.4-2H7v7.5zm8.65-6.5H18V8h-5.25l-.4-2H7v6h7.25z"/></svg>
                </div>
                <div className="aside_name">
                    <a href="">Repot history</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/></svg>
                </div>
                <div className="aside_name">
                    <a href=""> Help</a>
                </div>
          </div>
          <div className=" aside_part">
                <div className="mini_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15q.425 0 .713-.288T13 14q0-.425-.288-.712T12 13q-.425 0-.712.288T11 14q0 .425.288.713T12 15m-1-4h2V5h-2zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"/></svg>
                </div>
                <div className="aside_name">
                    <a href=""> Send Feedback</a>
                </div>
          </div>
        </div>
        <hr />
        <div className="about_container" style={{height:"600px"}}>

          <div className="first_about">
          <div className="first_row">
            <a href="">About</a>
            <a href="">ress</a>
            <a href="">Copyright</a>
          </div>
          <div className="second_row">
            <a href="">Contact us</a>
            <a href="">Creator</a>
            <a href="">Advertise</a>
          </div>
          <div className="third_row">
            <a href="">Developers</a>
          </div>
          </div>
          <div className="first_about">
          <div className="first_row">
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Policy & Safety</a>
          </div>
          <div className="second_row">
            <a href="">How </a>
            <a href="">YouTube</a>
            <a href="">works</a>
          </div>
          <div className="third_row">
            <a href="">Test new features</a>
          </div>
          </div>
          <a href="" className='copyright'>© 2024 Google LLC</a>
        </div>
      </div>
    </div>
  )
}

export default Aside
