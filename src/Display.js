import React from 'react'
import Header from "./Header.js"
import video1 from "./video/video1.mp4"
import Rightvideo from './Rightvideo.js'
import { Link } from 'react-router-dom'
// import "./Main.css"
import "./Header.css"
import "./Display.css"

function Display() {
  return (
    <div>
    <Header/>
    <div className="width_container">
    <div className="main_display_container">
        <div className="left_display_container">
            <div className="real_video_container">
                <div className="video_player">
                <video className='mainimgnew' controls >
            <source src={video1} type="video/mp4"/>
            </video>
                </div>
            </div>
            <div className="lower-video_container">
                <div className="lower_title_part">
                 <h1 className='title_main_container'>Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये</h1>   
                </div>
                <div className="lower_toprow_container">
                <div className="frist_action_button">
                <div className="channel_logo_main_container">
                    <img src="https://yt3.ggpht.com/49eUE89RL69LuncBcF5xccRkff2fRlJytQuZ5vOgIzgOYLc5Bo9beP6uNCE_AOwpT2iqqC_ygq4=s88-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
                <div className="upload_info_button">

                    <div className="channel_name_mini_container">
                        <a href="">News24 Sports</a>
                    </div>
                    <div className="owner_sub_count">
                        <a href="">3.25M Subscribers</a>
                    </div>
                </div>
                <div className="subscriber_button">
                <div class="dropdown">
                <button style={{height:"36px",display:"flex",alignItems:"center"}} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	            <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		        <path d="M0 0h24v24H0z" />
	        	<path fill="white" d="M17.451 2.344a1 1 0 0 1 1.41-.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1-1.818.836a10.05 10.05 0 0 0-2.54-3.39a1 1 0 0 1-.1-1.41zM5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0-2.54 3.39a1 1 0 1 1-1.817-.835a12.05 12.05 0 0 1 3.045-4.065M14.235 19c.865 0 1.322 1.024.745 1.668A3.992 3.992 0 0 1 12 22a3.992 3.992 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171l.008.043a8.013 8.013 0 0 1 4.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 0 0 1.143 1.847l.167.117l.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063L5 13.924l.001-2.97A8 8 0 0 1 8.822 4.5l.248-.146l.01-.043a3.003 3.003 0 0 1 2.562-2.29l.182-.017z" />
	           </g>
               </svg>
                Subscribe
                </button>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li><a class="dropdown-item" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	<g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M0 0h24v24H0z" />
		<path fill="white" d="M17.451 2.344a1 1 0 0 1 1.41-.099a12.05 12.05 0 0 1 3.048 4.064a1 1 0 1 1-1.818.836a10.05 10.05 0 0 0-2.54-3.39a1 1 0 0 1-.1-1.41zM5.136 2.245a1 1 0 0 1 1.312 1.51a10.05 10.05 0 0 0-2.54 3.39a1 1 0 1 1-1.817-.835a12.05 12.05 0 0 1 3.045-4.065M14.235 19c.865 0 1.322 1.024.745 1.668A3.992 3.992 0 0 1 12 22a3.992 3.992 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171l.008.043a8.013 8.013 0 0 1 4.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 0 0 1.143 1.847l.167.117l.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063L5 13.924l.001-2.97A8 8 0 0 1 8.822 4.5l.248-.146l.01-.043a3.003 3.003 0 0 1 2.562-2.29l.182-.017z" />
	</g>
</svg>All</a></li>
               <li><a class="dropdown-item"   href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="-3 -2 24 24">
	<path fill="white" d="M18 17H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17M6.17 18h5.66a3.001 3.001 0 0 1-5.66 0" />
</svg>Personalised</a></li>
               <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	<path fill="white" d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.2-2.21H3l3-3v-5.5c0-.83.18-1.62.5-2.32zM12 4.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v1.53c-1 .11-1.91.55-2.6 1.21l-.71-.71c.64-.61 1.43-1.07 2.31-1.32V4.5A1.5 1.5 0 0 1 11.5 3A1.5 1.5 0 0 1 13 4.5v.71c2.31.65 4 2.79 4 5.29v5.34l-1-1V10.5c0-2.32-1.75-4.22-4-4.47zm-5 6v5.91L5.41 18h10.93L7.28 8.94C7.1 9.43 7 9.95 7 10.5M11.5 22a2.5 2.5 0 0 1-2.45-2h1.04a1.495 1.495 0 0 0 2.82 0h1.04a2.5 2.5 0 0 1-2.45 2" />
</svg>None</a></li>
<li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="28px" height="24px" viewBox="0 0 24 24">
	<path fill="white" d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25a4.125 4.125 0 0 0 0-8.25m0 9.75a7.125 7.125 0 0 0-7.124 7.247a.75.75 0 0 0 .363.63a13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12M16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" />
</svg>Unsubscribe</a></li>
               </ul>
                   </div>
                </div>
                </div>
                <div className="action_button">
                 
                    <div className="like_and_dislike">
                        <div className="like_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      	<g fill="none">
		                <path fill="white" d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6zM8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005zm-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z" />
		                <path stroke="white" stroke-width="1.5" d="M8 10v10" />
	                    </g>
                        </svg>
                        </div>
                        <div className="like_count">
                            <p>3.5k</p>
                        </div>
                        <div className="dislike_container">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
	                    <path fill="white" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z" />
                        </svg>
                        </div>
                    </div>
                    <div className="share_container">
                    <div className="share_button">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256">
	                   <path fill="white" d="m237.66 106.35l-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91c-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
                        </svg>
                    </div> 
                    <div className="share_text">
                    <p>Share</p>
                    </div>
                    </div>
                    <div className="download_container">
                        <div className="download_button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32">
	                    <path fill="white" d="M15 4v16.563L9.719 15.28L8.28 16.72l7 7l.719.687l.719-.687l7-7l-1.438-1.438l-5.28 5.28V4zM7 26v2h18v-2z" />
                        </svg>
                        </div>
                        <div className="download_text">
                         <p>Download</p>
                        </div>
                    </div>
                    <div className="three_dot">
                        <div className="three_button">
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="discription_part">
                    <div className="view_and_time_discription">
                        <div className="discription_view">
                            <span>11k views</span>
                            <span>33 minutes ago</span>
                        </div>
                        {/* <div className="discription_time"></div> */}
                    </div>
                    <div className="main_discription_part">
                      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque ratione rerum maiores laboriosam molestias repellat totam fugit quibusdam similique hic repellendus eos porro nihil, qui recusandae! Amet, explicabo repudiandae.</span>  
                    </div>
                </div>
            </div>
            <div className="comment_container">
            <div className="upper_comment">
             <div className="mail_name">
                <a id='mail_name' href="">A</a>
             </div>
             <div className="input_container">
                <div className="first_part">
                    <input type="text" placeholder='Add a comment...'/>
                </div>
                <div className="second_container">
                    <div className="emojy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32">
	                 <path fill="white" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12m10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12m-10.19 7l-1.72 1a8.111 8.111 0 0 0 2.87 2.896c.297.176.604.333.923.47a7.894 7.894 0 0 0 2.031.56a7.988 7.988 0 0 0 2.172 0a7.953 7.953 0 0 0 4.572-2.293A8.14 8.14 0 0 0 22.91 20l-1.72-1a5.996 5.996 0 0 1-6.795 2.783a5.922 5.922 0 0 1-1.436-.611A6.02 6.02 0 0 1 10.811 19z" />
                    </svg>
                    </div>
                    <div className="button_comment">
                        <button id='cancel'>Cancel</button>
                        <button id='comment'>Comment</button>
                    </div>
                </div>
             </div>
            </div> 
            <div className="main_comment_part">

            </div>
            </div>
        </div>
        <div className="right_display_container">
            <div className="right_video_container">
                <div className="nextvideo_container">
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                    <Rightvideo videotitle="Ind Vs Eng, 2nd Test : Yashasvi Jaiswal की Superb Innings के ये " channelname="News24 Sports" views="11k views" time="33 minutes ago"/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Display
