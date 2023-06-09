import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  const [menu_5, setMenu_5] = useState(false)
  const [menu_2, setMenu_2] = useState(false)
  const [menu_9, setMenu_9] = useState(false)
  const [menu_3, setMenu_3] = useState(false)
  const [menu_6, setMenu_6] = useState(false)
  const [menu_7, setMenu_7] = useState(false)
  const [menu_8, setMenu_8] = useState(false)
  const [menu_4, setMenu_4] = useState(false)
  const [menu_1, setMenu_1] = useState(false)
  return (
    <div className="menu-menu">
      <div className="menu-logo gradBg">
        <div className="menu-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="menu-image"
          />
        </div>
        <div className="menu-container01">
          <span className="menu-text">{props.text1}</span>
          <span className="menu-text01">{props.text2}</span>
        </div>
      </div>
      <div className="menu-container02">
        <div className="menu-container03">
          <span className="menu-text02">{props.text3}</span>
          <div className="menu-container04"></div>
        </div>
        <div className="menu-menu1">
          <div className="menu-container05">
            {menu_1 && (
              <div className="menu-btn-enable">
                <svg viewBox="0 0 1024 1024" className="menu-icon">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM302.836 834.152c11.106-30.632 17.164-63.688 17.164-98.152 0-124.35-78.81-230.292-189.208-270.606 10.21-84.924 48.254-163.498 109.678-224.924 72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c61.428 61.426 99.468 140 109.682 224.924-110.402 40.314-189.212 146.256-189.212 270.606 0 34.468 6.060 67.52 17.166 98.15-61.706 40.242-133.77 61.85-209.166 61.85-75.394 0-147.458-21.608-209.164-61.848zM551.754 640.996c13.878 3.494 24.246 16.080 24.246 31.004v64c0 17.6-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32v-64c0-14.924 10.368-27.51 24.246-31.004l23.754-448.996h32l23.754 448.996z"></path>
                </svg>
                <span>{props.text4}</span>
              </div>
            )}
            {!menu_1 && (
              <div className="menu-btn-disable">
                <svg viewBox="0 0 1024 1024" className="menu-icon02">
                  <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM302.836 834.152c11.106-30.632 17.164-63.688 17.164-98.152 0-124.35-78.81-230.292-189.208-270.606 10.21-84.924 48.254-163.498 109.678-224.924 72.53-72.526 168.96-112.47 271.53-112.47s199 39.944 271.53 112.47c61.428 61.426 99.468 140 109.682 224.924-110.402 40.314-189.212 146.256-189.212 270.606 0 34.468 6.060 67.52 17.166 98.15-61.706 40.242-133.77 61.85-209.166 61.85-75.394 0-147.458-21.608-209.164-61.848zM551.754 640.996c13.878 3.494 24.246 16.080 24.246 31.004v64c0 17.6-14.4 32-32 32h-64c-17.6 0-32-14.4-32-32v-64c0-14.924 10.368-27.51 24.246-31.004l23.754-448.996h32l23.754 448.996z"></path>
                </svg>
                <span className="menu-text04">{props.text41}</span>
              </div>
            )}
          </div>
          <div className="menu-container08">
            {menu_2 && (
              <div className="menu-container09">
                <div className="menu-btn-enable">
                  <div className="menu-container11">
                    <svg
                      viewBox="0 0 1097.142857142857 1024"
                      className="menu-icon04"
                    >
                      <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                    </svg>
                    <span className="menu-text05">{props.text5}</span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="menu-icon06">
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
                <div className="menu-container12">
                  {menu_3 && (
                    <div className="menu-sub-btn-enable">
                      <span className="menu-text06">Companies</span>
                    </div>
                  )}
                  {!menu_3 && (
                    <Link to="/company-overview" className="menu-navlink">
                      <div className="menu-container14 menu-sub-btn-desable">
                        <span>Companies</span>
                      </div>
                    </Link>
                  )}
                  {menu_4 && (
                    <Link to="/employees" className="menu-navlink1">
                      <div className="menu-sub-btn-enable">
                        <span>Employees</span>
                      </div>
                    </Link>
                  )}
                  {!menu_4 && (
                    <Link to="/employees" className="menu-navlink2">
                      <div className="clickable menu-sub-btn-desable">
                        <span>Employees</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            )}
            {!menu_2 && (
              <Link to="/customers" className="menu-navlink3">
                <div className="menu-container17 menu-btn-disable">
                  <div className="menu-container18">
                    <svg
                      viewBox="0 0 1097.142857142857 1024"
                      className="menu-icon08"
                    >
                      <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                    </svg>
                    <span>{props.text52}</span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="menu-icon10">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </Link>
            )}
          </div>
          <div className="menu-container19">
            {menu_5 && (
              <div className="menu-btn-enable">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="menu-icon12"
                >
                  <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
                </svg>
                <span className="menu-text11">{props.text6}</span>
              </div>
            )}
            {!menu_5 && (
              <div className="menu-btn-disable">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="menu-icon14"
                >
                  <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
                </svg>
                <span>{props.text61}</span>
              </div>
            )}
          </div>
          <div className="menu-container22">
            {menu_6 && (
              <div className="menu-btn-enable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon16">
                  <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
                  <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"></path>
                </svg>
                <span className="menu-text13">{props.text7}</span>
              </div>
            )}
            {!menu_6 && (
              <div className="menu-btn-disable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon19">
                  <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
                  <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"></path>
                </svg>
                <span>{props.text71}</span>
              </div>
            )}
          </div>
          <div className="menu-container25">
            {menu_7 && (
              <div className="menu-btn-enable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon22">
                  <path d="M554 384h236l-236-234v234zM256 86h342l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25z"></path>
                </svg>
                <span className="menu-text15">{props.text8}</span>
              </div>
            )}
            {!menu_7 && (
              <div className="menu-btn-disable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon24">
                  <path d="M554 384h236l-236-234v234zM256 86h342l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25z"></path>
                </svg>
                <span>{props.text81}</span>
              </div>
            )}
          </div>
          <div className="menu-container28">
            {menu_8 && (
              <div className="menu-btn-enable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon26">
                  <path d="M682 384h172v470h-172v-470zM170 854v-342h172v342h-172zM426 854v-684h172v684h-172z"></path>
                </svg>
                <span className="menu-text17">{props.text9}</span>
              </div>
            )}
            {!menu_8 && (
              <div className="menu-btn-disable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon28">
                  <path d="M682 384h172v470h-172v-470zM170 854v-342h172v342h-172zM426 854v-684h172v684h-172z"></path>
                </svg>
                <span>{props.text91}</span>
              </div>
            )}
          </div>
          <div className="menu-container31">
            {menu_9 && (
              <div className="menu-btn-enable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon30">
                  <path d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"></path>
                </svg>
                <span className="menu-text19">{props.text10}</span>
              </div>
            )}
            {!menu_9 && (
              <div className="menu-btn-disable clickable">
                <svg viewBox="0 0 1024 1024" className="menu-icon32">
                  <path d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"></path>
                </svg>
                <span>{props.text101}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="menu-container34 border-top-1px">
        <Link to="/" className="menu-navlink4">
          <div className="menu-container35 clickable">
            <svg viewBox="0 0 1024 1024" className="menu-icon34">
              <path d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"></path>
            </svg>
            <span className="menu-text21">{props.text}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  text8: 'Files',
  text9: 'Reports',
  text2: 'Admin',
  text6: 'Import & Export',
  text: 'Logout',
  text5: 'Customers',
  text7: 'Onboarding',
  text41: 'Overview',
  text53: 'Customers',
  image_alt: 'image',
  text91: 'Reports',
  text71: 'Onboarding',
  text10: 'Settings',
  text4: 'Overview',
  text52: 'Customers',
  text61: 'Import & Export',
  text1: 'Up2Data',
  image_src: '/u2d-chrome-logo-200h.png',
  text51: 'Customers',
  text3: 'Menu',
  text101: 'Settings',
  text81: 'Files',
  text511: 'Customers',
}

Menu.propTypes = {
  text8: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text41: PropTypes.string,
  text53: PropTypes.string,
  image_alt: PropTypes.string,
  text91: PropTypes.string,
  text71: PropTypes.string,
  text10: PropTypes.string,
  text4: PropTypes.string,
  text52: PropTypes.string,
  text61: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text51: PropTypes.string,
  text3: PropTypes.string,
  text101: PropTypes.string,
  text81: PropTypes.string,
  text511: PropTypes.string,
}

export default Menu