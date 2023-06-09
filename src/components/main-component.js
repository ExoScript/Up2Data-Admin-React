import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main-component.css'

const MainComponent = (props) => {
  const [select_all, setSelect_all] = useState(false)
  return (
    <div className={`main-component-container ${props.rootClassName} `}>
      <div className="main-component-container01">
        <Link to="/" className="main-component-navlink">
          {props.view_title}
        </Link>
        <div className="main-component-container02">
          <div className="main-component-container03 clickable">
            <svg viewBox="0 0 1024 1024" className="main-component-icon">
              <path
                d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
                className=""
              ></path>
            </svg>
            <span className="">{props.text2}</span>
          </div>
          <div className="main-component-container04 clickable">
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
      <div className="main-component-container05">
        <div className="main-component-container06">
          <div className="main-component-container07">
            <div className="main-component-container08">
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
            <div className="main-component-container09">
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
            <div className="main-component-container10">
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
          <div className="main-component-container11">
            <div className="main-component-container12">
              <div className="main-component-container13">
                <svg viewBox="0 0 1024 1024" className="main-component-icon12">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
              <span className="main-component-text06">{props.text4}</span>
            </div>
            <div className="main-component-container14">
              <div className="main-component-container15">
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
        <div className="main-component-container16">
          <div className="main-component-container17">
            <div className="main-component-container18">
              <span className="main-component-text09">{props.text6}</span>
              <span className="main-component-text10">{props.text7}</span>
              <span className="main-component-text11">{props.text8}</span>
            </div>
            <div className="main-component-container19">
              <div className="main-component-container20 clickable">
                <svg viewBox="0 0 1024 1024" className="main-component-icon16">
                  <path
                    d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                    className=""
                  ></path>
                </svg>
                <span className="main-component-text12">Select all</span>
              </div>
              <div className="main-component-container21 clickable">
                <svg viewBox="0 0 1024 1024" className="main-component-icon18">
                  <path
                    d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                    className=""
                  ></path>
                </svg>
                <span className="main-component-text13">{props.text10}</span>
              </div>
              <div className="main-component-container22 clickable">
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
          <div className="main-component-container23">
            <div className="main-component-container24">
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
        <div className="main-component-container25">
          <ul className="list">
            <li onClick={props.test} className="main-component-li list-item">
              <Link to="/company-overview" className="">
                <div className="main-component-container26">
                  <div className="main-component-container27">
                    <div className="main-component-container28">
                      <img
                        alt={props.image_alt}
                        src={props.image_src}
                        className="main-component-image"
                      />
                      <div className="main-component-container29"></div>
                    </div>
                    <div className="main-component-container30">
                      <div className="main-component-container31">
                        <span className="main-component-text20">
                          {props.text27}
                        </span>
                        <div className="main-component-container32">
                          <div className="main-component-container33">
                            <span className="main-component-text21">
                              {props.text58}
                            </span>
                          </div>
                          <div className="main-component-container34">
                            <span className="main-component-text22">
                              {props.text59}
                            </span>
                          </div>
                          <div className="main-component-container35">
                            <span className="main-component-text23">
                              {props.text60}
                            </span>
                          </div>
                          <div className="main-component-container36">
                            <span className="main-component-text24">
                              {props.text61}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="main-component-container37">
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
                  <div className="main-component-container38">
                    <div className="main-component-container39">
                      <div className="main-component-container40">
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
                    <div className="main-component-container41"></div>
                    <div className="main-component-container42">
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
              <div className="main-component-container43">
                <div className="main-component-container44">
                  <div className="main-component-container45">
                    <img
                      alt={props.image_alt1}
                      src={props.image_src1}
                      className="main-component-image1"
                    />
                    <div className="main-component-container46"></div>
                  </div>
                  <div className="main-component-container47">
                    <div className="main-component-container48">
                      <span className="main-component-text32">
                        Deivisson Almeida de Souza
                      </span>
                      <div className="main-component-container49">
                        <div className="main-component-container50">
                          <span className="main-component-text33">Scanned</span>
                        </div>
                        <div className="main-component-container51">
                          <span className="main-component-text34">
                            {props.text63}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="main-component-container52">
                      <span className="main-component-text35">
                        HeyData GmbH
                      </span>
                      <span className="main-component-text36">
                        Software Developer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="main-component-container53">
                  <div className="main-component-container54">
                    <div className="main-component-container55">
                      <span className="main-component-text37">
                        {props.text33}
                      </span>
                      <span className="main-component-text38">
                        {props.text34}
                      </span>
                    </div>
                    <span className="main-component-text39">
                      {props.text21}
                    </span>
                  </div>
                  <div className="main-component-container56"></div>
                  <div className="main-component-container57">
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
}

export default MainComponent
