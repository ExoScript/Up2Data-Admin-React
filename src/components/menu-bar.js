import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './menu-bar.css'

const MenuBar = (props) => {
  const [menu_1, setMenu_1] = useState(false)
  const [menu_6, setMenu_6] = useState(false)
  const [menu_2, setMenu_2] = useState(false)
  const [menu_5, setMenu_5] = useState(false)
  return (
    <div className={`menu-bar-container ${props.rootClassName} `}>
      <div className="menu-bar-logo gradBg">
        <div className="menu-bar-container01">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="menu-bar-image"
          />
        </div>
        <div className="menu-bar-container02">
          <span className="menu-bar-text">{props.text}</span>
          <span className="menu-bar-text01">Dashboard</span>
        </div>
      </div>
      <div className="menu-bar-container03">
        <div className="menu-bar-container04">
          <span className="menu-bar-text02">{props.text1}</span>
          <div className="menu-bar-container05"></div>
        </div>
        <div className="menu-bar-container06">
          <div className="menu-bar-menu1">
            {menu_1 && (
              <div className="">
                <div className="menu-bar-container08">
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon">
                    <path
                      d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_1}</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon02">
                  <path
                    d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                    className=""
                  ></path>
                </svg>
              </div>
            )}
            {!menu_1 && (
              <div className="">
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon04">
                  <path
                    d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_1}</span>
              </div>
            )}
          </div>
          <div className="menu-bar-menu2">
            {menu_2 && (
              <div className="">
                <div className="menu-bar-container11">
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon06">
                    <path
                      d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"
                      className=""
                    ></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon08">
                    <path
                      d="M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_2}</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon10">
                  <path
                    d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                    className=""
                  ></path>
                </svg>
              </div>
            )}
            {!menu_2 && (
              <div className="">
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon12">
                  <path
                    d="M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_2}</span>
              </div>
            )}
          </div>
          <div className="menu-bar-menu3">
            {menu_5 && (
              <div className="">
                <div className="menu-bar-container14">
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon14">
                    <path
                      d="M554 384h236l-236-234v234zM256 86h342l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_5}</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon16">
                  <path
                    d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                    className=""
                  ></path>
                </svg>
              </div>
            )}
            {!menu_5 && (
              <div className="">
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon18">
                  <path
                    d="M554 384h236l-236-234v234zM256 86h342l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_5}</span>
              </div>
            )}
          </div>
          <div className="menu-bar-menu4">
            {menu_6 && (
              <div className="">
                <div className="menu-bar-container17">
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon20">
                    <path
                      d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"
                      className=""
                    ></path>
                  </svg>
                  <span className="">{props.menu_6}</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon22">
                  <path
                    d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                    className=""
                  ></path>
                </svg>
              </div>
            )}
            {!menu_6 && (
              <div className="">
                <svg viewBox="0 0 1024 1024" className="menu-bar-icon24">
                  <path
                    d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"
                    className=""
                  ></path>
                </svg>
                <span className="">{props.menu_6}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="menu-bar-container19">
        <svg viewBox="0 0 1024 1024" className="menu-bar-icon26">
          <path
            d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"
            className=""
          ></path>
        </svg>
        <span className="menu-bar-text11">{props.logout}</span>
      </div>
    </div>
  )
}

MenuBar.defaultProps = {
  logout: 'Logout',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  rootClassName: '',
  menu_6: 'Settings',
  menu_2: 'List',
  menu_5: 'Import & Export',
  text1: 'Dashboard',
  text: 'Up2Data',
  menu_1: 'Overview',
}

MenuBar.propTypes = {
  logout: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_6: PropTypes.string,
  menu_2: PropTypes.string,
  menu_5: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  menu_1: PropTypes.string,
}

export default MenuBar
