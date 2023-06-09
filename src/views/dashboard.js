import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Up2Data-Admin</title>
        <meta property="og:title" content="Dashboard - Up2Data-Admin" />
      </Helmet>
      <div className="dashboard-container01">
        <div className="dashboard-container02 border-right-1px">
          <div className="dashboard-logo gradBg">
            <div className="dashboard-container03">
              <img
                alt="image"
                src="/external/up2datalogo%20%5B1%5D-200h-200h.png"
                className="dashboard-image"
              />
            </div>
            <div className="dashboard-container04">
              <span className="dashboard-text">Up2Data</span>
              <span className="dashboard-text01">Dashboard</span>
            </div>
          </div>
          <div className="dashboard-container05">
            <div className="dashboard-container06">
              <span className="dashboard-text02">Dashboard</span>
              <div className="dashboard-container07"></div>
            </div>
            <div className="dashboard-container08">
              <div className="dashboard-container09">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                  <path d="M292.571 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM292.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM292.571 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM1024 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857z"></path>
                </svg>
                <span>Text</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-container10">
          <div className="dashboard-container11 border-bottom-1px">
            <div className="dashboard-container12">
              <Link to="/" className="dashboard-navlink">
                <div className="dashboard-container13">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon02">
                    <path d="M292.571 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM292.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM292.571 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM1024 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857z"></path>
                  </svg>
                  <span className="dashboard-text04">List Overview</span>
                </div>
              </Link>
            </div>
            <div className="dashboard-container14">
              <div className="dashboard-container15">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon04">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="dashboard-textinput"
                />
              </div>
              <div className="dashboard-container16">
                <svg viewBox="0 0 1024 1024">
                  <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
                </svg>
                <div className="dashboard-container17"></div>
              </div>
            </div>
          </div>
          <div className="dashboard-container18 border-bottom-1px">
            <div className="dashboard-container19">
              <span className="dashboard-text05">123</span>
              <span>Companies</span>
            </div>
            <div className="dashboard-container20 clickable">
              <div className="dashboard-container21">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
                  <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                </svg>
                <span>Companies</span>
              </div>
              <div className="dashboard-container22">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="dashboard-icon10"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
                <span>Employees</span>
              </div>
            </div>
            <div className="dashboard-container23">
              <div className="dashboard-container24">
                <span>Add Customers</span>
              </div>
            </div>
          </div>
          <div className="dashboard-container25">
            <div className="dashboard-container26">
              <div className="dashboard-container27">
                <div className="dashboard-dropdown">
                  <div className="dashboard-container28 border-right-1px">
                    <span className="dashboard-text10">Sort by</span>
                  </div>
                  <div className="dashboard-container29">
                    <div
                      data-thq="thq-dropdown"
                      className="dashboard-thq-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="dashboard-dropdown-toggle"
                      >
                        <span className="dashboard-text11">Date</span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="dashboard-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="dashboard-icon12"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="dashboard-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown01 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle01"
                          >
                            <span className="dashboard-text12">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown02 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle02"
                          >
                            <span className="dashboard-text13">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown03 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle03"
                          >
                            <span className="dashboard-text14">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="dashboard-dropdown04">
                  <div className="dashboard-container30 border-right-1px">
                    <span className="dashboard-text15">Groups</span>
                  </div>
                  <div className="dashboard-container31">
                    <div
                      data-thq="thq-dropdown"
                      className="dashboard-thq-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="dashboard-dropdown-toggle04"
                      >
                        <span className="dashboard-text16">Date</span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="dashboard-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="dashboard-icon14"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="dashboard-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown05 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle05"
                          >
                            <span className="dashboard-text17">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown06 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle06"
                          >
                            <span className="dashboard-text18">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown07 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle07"
                          >
                            <span className="dashboard-text19">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="dashboard-dropdown08">
                  <div className="dashboard-container32 border-right-1px">
                    <span className="dashboard-text20">Status</span>
                  </div>
                  <div className="dashboard-container33">
                    <div
                      data-thq="thq-dropdown"
                      className="dashboard-thq-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="dashboard-dropdown-toggle08"
                      >
                        <span className="dashboard-text21">Date</span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="dashboard-dropdown-arrow2"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="dashboard-icon16"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="dashboard-dropdown-list2"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown09 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle09"
                          >
                            <span className="dashboard-text22">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown10 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle10"
                          >
                            <span className="dashboard-text23">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="dashboard-dropdown11 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="dashboard-dropdown-toggle11"
                          >
                            <span className="dashboard-text24">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-container34">
                <div className="dashboard-container35">
                  <span>Export to CSV</span>
                </div>
              </div>
            </div>
            <div className="dashboard-container36">
              <div className="dashboard-container37 border-bottom-1px">
                <div className="dashboard-container38 border-right-1px">
                  <div className="dashboard-container39"></div>
                  <div className="dashboard-container40">
                    <span>Company name</span>
                    <span className="dashboard-text27">Address</span>
                  </div>
                </div>
                <div className="dashboard-container41 border-right-1px">
                  <span>
                    Contact
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="dashboard-container42 border-right-1px">
                  <span>Location</span>
                </div>
                <div className="dashboard-container43 border-right-1px">
                  <span>Size</span>
                </div>
                <div className="dashboard-container44 border-right-1px">
                  <span>Monitor</span>
                </div>
                <div className="dashboard-container45 border-right-1px">
                  <span>Last scan</span>
                </div>
                <div className="dashboard-container46 border-right-1px">
                  <span>Next scan</span>
                </div>
                <div className="dashboard-container47">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon18">
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </div>
              </div>
              <div className="dashboard-container48">
                <ul className="list">
                  <li className="dashboard-li list-item">
                    <div className="dashboard-container49 border-bottom-1px border-top-1px">
                      <div className="dashboard-container50 border-right-1px">
                        <div className="dashboard-container51"></div>
                        <div className="dashboard-container52">
                          <span>HeyData GmbH</span>
                          <span className="dashboard-text35">Tech-Company</span>
                        </div>
                      </div>
                      <div className="dashboard-container53 border-right-1px">
                        <div className="dashboard-container54">
                          <span>Daniel</span>
                          <span className="dashboard-text37">Deutsch</span>
                        </div>
                      </div>
                      <div className="dashboard-container55 border-right-1px">
                        <span>Germany</span>
                      </div>
                      <div className="dashboard-container56 border-right-1px">
                        <div className="dashboard-container57">
                          <span>83</span>
                          <span className="dashboard-text40">Employees</span>
                        </div>
                      </div>
                      <div className="dashboard-container58 border-right-1px">
                        <div className="dashboard-container59">
                          <span>83</span>
                          <span className="dashboard-text42">Observed</span>
                        </div>
                      </div>
                      <div className="dashboard-container60 border-right-1px">
                        <div className="dashboard-container61">
                          <span>01 Mai</span>
                          <span className="dashboard-text44">2023</span>
                        </div>
                      </div>
                      <div className="dashboard-container62 border-right-1px">
                        <div className="dashboard-container63">
                          <span>02 Feb</span>
                          <span className="dashboard-text46">2023</span>
                        </div>
                      </div>
                      <div className="dashboard-container64">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="dashboard-icon20"
                        >
                          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
