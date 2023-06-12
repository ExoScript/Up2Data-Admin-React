import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main-component.css'

const MainComponent = (props) => {
  const [select_all, setSelect_all] = useState(false)
  return (
    <div className={`main-component-container ${props.rootClassName} `}>
      <div className="main-component-container001">
        <Link to="/" className="main-component-navlink">
          {props.view_title}
        </Link>
        <div className="main-component-container002">
          <div className="main-component-container003 clickable">
            <svg viewBox="0 0 1024 1024" className="main-component-icon">
              <path
                d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
                className=""
              ></path>
            </svg>
            <span className="">{props.text2}</span>
          </div>
          <div className="main-component-container004 clickable">
            <svg viewBox="0 0 1024 1024" className="main-component-icon02">
              <path
                d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                className=""
              ></path>
            </svg>
            <span className="">{props.text3}</span>
          </div>
        </div>
      </div>
      <div className="main-component-container005">
        <div className="main-component-container006">
          <div className="main-component-container007">
            <div className="main-component-container008">
              <svg viewBox="0 0 1024 1024" className="main-component-icon04">
                <path
                  d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
                  className=""
                ></path>
              </svg>
              <input
                type="text"
                placeholder={props.textinput_placeholder}
                className="main-component-textinput input"
              />
            </div>
            <div className="main-component-container009">
              <svg viewBox="0 0 1024 1024" className="main-component-icon06">
                <path
                  d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"
                  className=""
                ></path>
              </svg>
              <input
                type="text"
                placeholder={props.textinput_placeholder1}
                className="main-component-textinput1 input"
              />
            </div>
            <div className="main-component-container010">
              <svg viewBox="0 0 1024 1024" className="main-component-icon08">
                <path
                  d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
                  className=""
                ></path>
              </svg>
              <div
                data-thq="thq-dropdown"
                className="main-component-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="main-component-dropdown-toggle"
                >
                  <span className="main-component-text02">{props.text12}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="main-component-dropdown-arrow"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="main-component-icon10"
                    >
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="main-component-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle1"
                    >
                      <span className="main-component-text03">
                        {props.text16}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle2"
                    >
                      <span className="main-component-text04">
                        {props.text17}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle3"
                    >
                      <span className="main-component-text05">
                        {props.text18}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-component-container011">
            <div className="main-component-container012">
              <div className="main-component-container013">
                <svg viewBox="0 0 1024 1024" className="main-component-icon12">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
              <span className="main-component-text06">{props.text4}</span>
            </div>
            <div className="main-component-container014">
              <div className="main-component-container015">
                <svg viewBox="0 0 1024 1024" className="main-component-icon14">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
              <span className="main-component-text07">{props.text5}</span>
            </div>
            <span className="main-component-text08">{props.text1}</span>
          </div>
        </div>
        <div className="main-component-container016">
          <div className="main-component-container017">
            <div className="main-component-container018">
              <span className="main-component-text09">{props.text6}</span>
              <span className="main-component-text10">{props.text7}</span>
              <span className="main-component-text11">{props.text8}</span>
            </div>
            <div className="main-component-container019">
              <div className="main-component-container020 clickable">
                <svg viewBox="0 0 1024 1024" className="main-component-icon16">
                  <path
                    d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                    className=""
                  ></path>
                </svg>
                <span className="main-component-text12">Select all</span>
              </div>
              <div className="main-component-container021 clickable">
                <svg viewBox="0 0 1024 1024" className="main-component-icon18">
                  <path
                    d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                    className=""
                  ></path>
                </svg>
                <span className="main-component-text13">{props.text10}</span>
              </div>
              <div className="main-component-container022 clickable">
                <svg viewBox="0 0 1024 1024" className="main-component-icon20">
                  <path
                    d="M662 170h148v86h-596v-86h148l44-42h212zM342 384v426h340v-426h-340zM256 810v-512h512v512q0 34-26 60t-60 26h-340q-34 0-60-26t-26-60z"
                    className=""
                  ></path>
                </svg>
                <span className="main-component-text14">{props.text11}</span>
              </div>
            </div>
          </div>
          <div className="main-component-container023">
            <div className="main-component-container024">
              <span className="">{props.text15}</span>
              <div
                data-thq="thq-dropdown"
                className="main-component-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="main-component-dropdown-toggle4"
                >
                  <span className="main-component-text16">{props.text19}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="main-component-dropdown-arrow1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="main-component-icon22"
                    >
                      <path d="M426 726v-428l214 214z" className=""></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="main-component-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle5"
                    >
                      <span className="main-component-text17">
                        {props.text55}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle6"
                    >
                      <span className="main-component-text18">
                        {props.text56}
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="main-component-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="main-component-dropdown-toggle7"
                    >
                      <span className="main-component-text19">
                        {props.text57}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-component-container025">
          <ul className="list">
            <li onClick={props.test} className="main-component-li list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container026">
                  <div className="main-component-container027">
                    <div className="main-component-container028">
                      <img
                        alt={props.image_alt}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image"
                      />
                      <div className="main-component-container029"></div>
                    </div>
                    <div className="main-component-container030">
                      <div className="main-component-container031">
                        <span className="main-component-text20">
                          {props.text27}
                        </span>
                        <div className="main-component-container032">
                          <div className="main-component-container033">
                            <span className="main-component-text21">
                              {props.text58}
                            </span>
                          </div>
                          <div className="main-component-container034">
                            <span className="main-component-text22">
                              {props.text59}
                            </span>
                          </div>
                          <div className="main-component-container035">
                            <span className="main-component-text23">
                              {props.text60}
                            </span>
                          </div>
                          <div className="main-component-container036">
                            <span className="main-component-text24">
                              {props.text61}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container037">
                        <span className="main-component-text25">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text28">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container038">
                    <div className="main-component-container039">
                      <div className="main-component-container040">
                        <span className="main-component-text29">
                          {props.text29}
                        </span>
                        <span className="main-component-text30">
                          {props.text30}
                        </span>
                      </div>
                      <span className="main-component-text31">
                        {props.text20}
                      </span>
                    </div>
                    <div className="main-component-container041"></div>
                    <div className="main-component-container042">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon24"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="main-component-li1 list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container043">
                  <div className="main-component-container044">
                    <div className="main-component-container045">
                      <img
                        alt={props.image_alt11}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image1"
                      />
                      <div className="main-component-container046"></div>
                    </div>
                    <div className="main-component-container047">
                      <div className="main-component-container048">
                        <span className="main-component-text32">
                          {props.text2710}
                        </span>
                        <div className="main-component-container049">
                          <div className="main-component-container050">
                            <span className="main-component-text33">
                              {props.text5810}
                            </span>
                          </div>
                          <div className="main-component-container051">
                            <span className="main-component-text34">
                              {props.text5910}
                            </span>
                          </div>
                          <div className="main-component-container052">
                            <span className="main-component-text35">
                              {props.text6010}
                            </span>
                          </div>
                          <div className="main-component-container053">
                            <span className="main-component-text36">
                              {props.text6110}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container054">
                        <span className="main-component-text37">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text40">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container055">
                    <div className="main-component-container056">
                      <div className="main-component-container057">
                        <span className="main-component-text41">
                          {props.text2910}
                        </span>
                        <span className="main-component-text42">
                          {props.text3010}
                        </span>
                      </div>
                      <span className="main-component-text43">
                        {props.text2010}
                      </span>
                    </div>
                    <div className="main-component-container058"></div>
                    <div className="main-component-container059">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon26"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="main-component-li2 list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container060">
                  <div className="main-component-container061">
                    <div className="main-component-container062">
                      <img
                        alt={props.image_alt10}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image2"
                      />
                      <div className="main-component-container063"></div>
                    </div>
                    <div className="main-component-container064">
                      <div className="main-component-container065">
                        <span className="main-component-text44">
                          {props.text279}
                        </span>
                        <div className="main-component-container066">
                          <div className="main-component-container067">
                            <span className="main-component-text45">
                              {props.text589}
                            </span>
                          </div>
                          <div className="main-component-container068">
                            <span className="main-component-text46">
                              {props.text599}
                            </span>
                          </div>
                          <div className="main-component-container069">
                            <span className="main-component-text47">
                              {props.text609}
                            </span>
                          </div>
                          <div className="main-component-container070">
                            <span className="main-component-text48">
                              {props.text619}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container071">
                        <span className="main-component-text49">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text52">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container072">
                    <div className="main-component-container073">
                      <div className="main-component-container074">
                        <span className="main-component-text53">
                          {props.text299}
                        </span>
                        <span className="main-component-text54">
                          {props.text309}
                        </span>
                      </div>
                      <span className="main-component-text55">
                        {props.text209}
                      </span>
                    </div>
                    <div className="main-component-container075"></div>
                    <div className="main-component-container076">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon28"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="main-component-li3 list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container077">
                  <div className="main-component-container078">
                    <div className="main-component-container079">
                      <img
                        alt={props.image_alt9}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image3"
                      />
                      <div className="main-component-container080"></div>
                    </div>
                    <div className="main-component-container081">
                      <div className="main-component-container082">
                        <span className="main-component-text56">
                          {props.text278}
                        </span>
                        <div className="main-component-container083">
                          <div className="main-component-container084">
                            <span className="main-component-text57">
                              {props.text588}
                            </span>
                          </div>
                          <div className="main-component-container085">
                            <span className="main-component-text58">
                              {props.text598}
                            </span>
                          </div>
                          <div className="main-component-container086">
                            <span className="main-component-text59">
                              {props.text608}
                            </span>
                          </div>
                          <div className="main-component-container087">
                            <span className="main-component-text60">
                              {props.text618}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container088">
                        <span className="main-component-text61">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text64">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container089">
                    <div className="main-component-container090">
                      <div className="main-component-container091">
                        <span className="main-component-text65">
                          {props.text298}
                        </span>
                        <span className="main-component-text66">
                          {props.text308}
                        </span>
                      </div>
                      <span className="main-component-text67">
                        {props.text208}
                      </span>
                    </div>
                    <div className="main-component-container092"></div>
                    <div className="main-component-container093">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon30"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="main-component-li4 list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container094">
                  <div className="main-component-container095">
                    <div className="main-component-container096">
                      <img
                        alt={props.image_alt8}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image4"
                      />
                      <div className="main-component-container097"></div>
                    </div>
                    <div className="main-component-container098">
                      <div className="main-component-container099">
                        <span className="main-component-text68">
                          {props.text277}
                        </span>
                        <div className="main-component-container100">
                          <div className="main-component-container101">
                            <span className="main-component-text69">
                              {props.text587}
                            </span>
                          </div>
                          <div className="main-component-container102">
                            <span className="main-component-text70">
                              {props.text597}
                            </span>
                          </div>
                          <div className="main-component-container103">
                            <span className="main-component-text71">
                              {props.text607}
                            </span>
                          </div>
                          <div className="main-component-container104">
                            <span className="main-component-text72">
                              {props.text617}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container105">
                        <span className="main-component-text73">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text76">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container106">
                    <div className="main-component-container107">
                      <div className="main-component-container108">
                        <span className="main-component-text77">
                          {props.text297}
                        </span>
                        <span className="main-component-text78">
                          {props.text307}
                        </span>
                      </div>
                      <span className="main-component-text79">
                        {props.text207}
                      </span>
                    </div>
                    <div className="main-component-container109"></div>
                    <div className="main-component-container110">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon32"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="main-component-li5 list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container111">
                  <div className="main-component-container112">
                    <div className="main-component-container113">
                      <img
                        alt={props.image_alt7}
                        src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                        className="main-component-image5"
                      />
                      <div className="main-component-container114"></div>
                    </div>
                    <div className="main-component-container115">
                      <div className="main-component-container116">
                        <span className="main-component-text80">
                          {props.text276}
                        </span>
                        <div className="main-component-container117">
                          <div className="main-component-container118">
                            <span className="main-component-text81">
                              {props.text586}
                            </span>
                          </div>
                          <div className="main-component-container119">
                            <span className="main-component-text82">
                              {props.text596}
                            </span>
                          </div>
                          <div className="main-component-container120">
                            <span className="main-component-text83">
                              {props.text606}
                            </span>
                          </div>
                          <div className="main-component-container121">
                            <span className="main-component-text84">
                              {props.text616}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container122">
                        <span className="main-component-text85">
                          <span className="">
                            87
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </span>
                        <span className="main-component-text88">
                          under observation
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="main-component-container123">
                    <div className="main-component-container124">
                      <div className="main-component-container125">
                        <span className="main-component-text89">
                          {props.text296}
                        </span>
                        <span className="main-component-text90">
                          {props.text306}
                        </span>
                      </div>
                      <span className="main-component-text91">
                        {props.text206}
                      </span>
                    </div>
                    <div className="main-component-container126"></div>
                    <div className="main-component-container127">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="main-component-icon34"
                      >
                        <path
                          d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

MainComponent.defaultProps = {
  textinput_placeholder: 'Search by company, employees, keywords',
  text20: '15 days ago\n',
  text21: '15 days ago',
  text6: 'We´ve found',
  text12: 'Filters',
  text15: 'Sort by:',
  text1: 'Clear all',
  text16: 'Sub-menu Item',
  text61: 'Extension',
  image_src1:
    'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&ixlib=rb-4.0.3&w=200',
  text2: 'Add Customer',
  text11: 'Delete',
  text19: 'Date',
  text5: 'Scan',
  text57: 'Sub-menu Item',
  text59: 'Onboarding',
  test: () => {},
  text30: 'Employees',
  text7: '354',
  view_title: 'Customers',
  text4: 'Technology',
  text63: 'Leads',
  text34: 'Employees',
  text55: 'Sub-menu Item',
  text10: 'Scan ',
  image_alt1: 'image',
  textinput_placeholder1: 'Anywhere',
  text60: 'Cookie',
  image_alt: 'image',
  text27: 'HeyData GmbH',
  text3: 'Scan now',
  text33: '386',
  rootClassName: '',
  text17: 'Sub-menu Item',
  text8: 'Companies',
  image_src:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text56: 'Sub-menu Item',
  text58: 'Scanned',
  text18: 'Sub-menu Item',
  text29: '386',
  test1: () => {},
  image_alt2: 'image',
  image_src2:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text201: '15 days ago\n',
  text271: 'HeyData GmbH',
  text291: '386',
  text301: 'Employees',
  text581: 'Scanned',
  text591: 'Onboarding',
  text601: 'Cookie',
  text611: 'Extension',
  test2: () => {},
  image_alt3: 'image',
  image_src3:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text202: '15 days ago\n',
  text272: 'HeyData GmbH',
  text292: '386',
  text302: 'Employees',
  text582: 'Scanned',
  text592: 'Onboarding',
  text602: 'Cookie',
  text612: 'Extension',
  test3: () => {},
  image_alt4: 'image',
  image_src4:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text203: '15 days ago\n',
  text273: 'HeyData GmbH',
  text293: '386',
  text303: 'Employees',
  text583: 'Scanned',
  text593: 'Onboarding',
  text603: 'Cookie',
  text613: 'Extension',
  test4: () => {},
  image_alt5: 'image',
  image_src5:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text204: '15 days ago\n',
  text274: 'HeyData GmbH',
  text294: '386',
  text304: 'Employees',
  text584: 'Scanned',
  text594: 'Onboarding',
  text604: 'Cookie',
  text614: 'Extension',
  test5: () => {},
  image_alt6: 'image',
  image_src6:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text205: '15 days ago\n',
  text275: 'HeyData GmbH',
  text295: '386',
  text305: 'Employees',
  text585: 'Scanned',
  text595: 'Onboarding',
  text605: 'Cookie',
  text615: 'Extension',
  test6: () => {},
  image_alt7: 'image',
  text206: '15 days ago\n',
  text276: 'HeyData GmbH',
  text296: '386',
  text306: 'Employees',
  text586: 'Scanned',
  text596: 'Onboarding',
  text606: 'Cookie',
  text616: 'Extension',
  test7: () => {},
  image_alt8: 'image',
  text207: '15 days ago\n',
  text277: 'HeyData GmbH',
  text297: '386',
  text307: 'Employees',
  text587: 'Scanned',
  text597: 'Onboarding',
  text607: 'Cookie',
  text617: 'Extension',
  test8: () => {},
  image_alt9: 'image',
  text208: '15 days ago\n',
  text278: 'HeyData GmbH',
  text298: '386',
  text308: 'Employees',
  text588: 'Scanned',
  text598: 'Onboarding',
  text608: 'Cookie',
  text618: 'Extension',
  test9: () => {},
  image_alt10: 'image',
  text209: '15 days ago\n',
  text279: 'HeyData GmbH',
  text299: '386',
  text309: 'Employees',
  text589: 'Scanned',
  text599: 'Onboarding',
  text609: 'Cookie',
  text619: 'Extension',
  test10: () => {},
  image_alt11: 'image',
  text2010: '15 days ago\n',
  text2710: 'HeyData GmbH',
  text2910: '386',
  text3010: 'Employees',
  text5810: 'Scanned',
  text5910: 'Onboarding',
  text6010: 'Cookie',
  text6110: 'Extension',
}

MainComponent.propTypes = {
  textinput_placeholder: PropTypes.string,
  text20: PropTypes.string,
  text21: PropTypes.string,
  text6: PropTypes.string,
  text12: PropTypes.string,
  text15: PropTypes.string,
  text1: PropTypes.string,
  text16: PropTypes.string,
  text61: PropTypes.string,
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  text11: PropTypes.string,
  text19: PropTypes.string,
  text5: PropTypes.string,
  text57: PropTypes.string,
  text59: PropTypes.string,
  test: PropTypes.func,
  text30: PropTypes.string,
  text7: PropTypes.string,
  view_title: PropTypes.string,
  text4: PropTypes.string,
  text63: PropTypes.string,
  text34: PropTypes.string,
  text55: PropTypes.string,
  text10: PropTypes.string,
  image_alt1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text60: PropTypes.string,
  image_alt: PropTypes.string,
  text27: PropTypes.string,
  text3: PropTypes.string,
  text33: PropTypes.string,
  rootClassName: PropTypes.string,
  text17: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  text56: PropTypes.string,
  text58: PropTypes.string,
  text18: PropTypes.string,
  text29: PropTypes.string,
  test1: PropTypes.func,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  text201: PropTypes.string,
  text271: PropTypes.string,
  text291: PropTypes.string,
  text301: PropTypes.string,
  text581: PropTypes.string,
  text591: PropTypes.string,
  text601: PropTypes.string,
  text611: PropTypes.string,
  test2: PropTypes.func,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  text202: PropTypes.string,
  text272: PropTypes.string,
  text292: PropTypes.string,
  text302: PropTypes.string,
  text582: PropTypes.string,
  text592: PropTypes.string,
  text602: PropTypes.string,
  text612: PropTypes.string,
  test3: PropTypes.func,
  image_alt4: PropTypes.string,
  image_src4: PropTypes.string,
  text203: PropTypes.string,
  text273: PropTypes.string,
  text293: PropTypes.string,
  text303: PropTypes.string,
  text583: PropTypes.string,
  text593: PropTypes.string,
  text603: PropTypes.string,
  text613: PropTypes.string,
  test4: PropTypes.func,
  image_alt5: PropTypes.string,
  image_src5: PropTypes.string,
  text204: PropTypes.string,
  text274: PropTypes.string,
  text294: PropTypes.string,
  text304: PropTypes.string,
  text584: PropTypes.string,
  text594: PropTypes.string,
  text604: PropTypes.string,
  text614: PropTypes.string,
  test5: PropTypes.func,
  image_alt6: PropTypes.string,
  image_src6: PropTypes.string,
  text205: PropTypes.string,
  text275: PropTypes.string,
  text295: PropTypes.string,
  text305: PropTypes.string,
  text585: PropTypes.string,
  text595: PropTypes.string,
  text605: PropTypes.string,
  text615: PropTypes.string,
  test6: PropTypes.func,
  image_alt7: PropTypes.string,
  text206: PropTypes.string,
  text276: PropTypes.string,
  text296: PropTypes.string,
  text306: PropTypes.string,
  text586: PropTypes.string,
  text596: PropTypes.string,
  text606: PropTypes.string,
  text616: PropTypes.string,
  test7: PropTypes.func,
  image_alt8: PropTypes.string,
  text207: PropTypes.string,
  text277: PropTypes.string,
  text297: PropTypes.string,
  text307: PropTypes.string,
  text587: PropTypes.string,
  text597: PropTypes.string,
  text607: PropTypes.string,
  text617: PropTypes.string,
  test8: PropTypes.func,
  image_alt9: PropTypes.string,
  text208: PropTypes.string,
  text278: PropTypes.string,
  text298: PropTypes.string,
  text308: PropTypes.string,
  text588: PropTypes.string,
  text598: PropTypes.string,
  text608: PropTypes.string,
  text618: PropTypes.string,
  test9: PropTypes.func,
  image_alt10: PropTypes.string,
  text209: PropTypes.string,
  text279: PropTypes.string,
  text299: PropTypes.string,
  text309: PropTypes.string,
  text589: PropTypes.string,
  text599: PropTypes.string,
  text609: PropTypes.string,
  text619: PropTypes.string,
  test10: PropTypes.func,
  image_alt11: PropTypes.string,
  text2010: PropTypes.string,
  text2710: PropTypes.string,
  text2910: PropTypes.string,
  text3010: PropTypes.string,
  text5810: PropTypes.string,
  text5910: PropTypes.string,
  text6010: PropTypes.string,
  text6110: PropTypes.string,
}

export default MainComponent
