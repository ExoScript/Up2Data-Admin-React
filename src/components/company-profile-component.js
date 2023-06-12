import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import InfoIcon from './info-icon'
import CheckBoxComponent from './check-box-component'
import CompanyCustomerItem from './company-customer-item'
import CompanyCookieItem from './company-cookie-item'
import './company-profile-component.css'

const CompanyProfileComponent = (props) => {
  const [menu_2, setMenu_2] = useState(false)
  const [extra_box_txt, setExtra_box_txt] = useState('txt')
  const [menu_1, setMenu_1] = useState(true)
  const [menu_3, setMenu_3] = useState(false)
  const [extra_box, setExtra_box] = useState(false)
  const [menu_4, setMenu_4] = useState(false)
  return (
    <div className="company-profile-component-company-overview-component">
      <div className="company-profile-component-container">
        <div className="content-box-topBar">
          <span>Company overview</span>
        </div>
        <div className="company-profile-component-container002">
          <div className="company-profile-component-container003">
            <div className="company-profile-component-container004">
              <img
                alt="image"
                src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                loading="lazy"
                className="company-profile-component-image"
              />
              <div className="company-profile-component-container005"></div>
            </div>
            <div className="company-profile-component-container006 border-right-1px">
              <div className="company-profile-component-container007">
                <div className="company-profile-component-container008">
                  <div className="company-profile-component-container009">
                    <span className="company-profile-component-text001">
                      {props.company}
                    </span>
                    <div className="company-profile-component-container010">
                      <div className="company-profile-component-container011">
                        <svg viewBox="0 0 1024 1024" className="btn-icon">
                          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
                        </svg>
                      </div>
                      <div className="company-profile-component-container012">
                        <svg viewBox="0 0 1024 1024" className="btn-icon">
                          <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"></path>
                        </svg>
                      </div>
                      <div className="company-profile-component-container013">
                        <svg viewBox="0 0 1024 1024" className="btn-icon">
                          <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="company-profile-component-text002">
                    IT and services
                  </span>
                  <div className="company-profile-component-container014">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon06 btn-icon"
                    >
                      <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
                    </svg>
                    <span className="company-profile-component-text003">
                      Berlin, Deutschland
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container015"></div>
              </div>
              <div className="company-profile-component-container016">
                <Link
                  to="/messages"
                  className="company-profile-component-navlink"
                >
                  <div className="company-profile-component-container017 btn-lila">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
                    </svg>
                    <span>Message</span>
                  </div>
                </Link>
                <div className="btn-white">
                  <svg viewBox="0 0 1024 1024" className="btn-icon">
                    <path d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                  <span>Scan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="company-profile-component-container019">
            <div className="company-profile-component-container020">
              <div className="company-profile-component-container021">
                <span className="company-profile-component-text006">
                  Last Scan
                </span>
              </div>
              <div className="company-profile-component-container022">
                <span className="company-profile-component-text007">
                  Locality
                </span>
              </div>
              <div className="company-profile-component-container023">
                <span className="company-profile-component-text008">Email</span>
              </div>
              <div className="company-profile-component-container024">
                <span className="company-profile-component-text009">Phone</span>
              </div>
            </div>
            <div className="company-profile-component-container025">
              <div className="company-profile-component-container026">
                <span className="company-profile-component-text010 txt-opacity">
                  01 Feb 2023
                </span>
              </div>
              <div className="company-profile-component-container027">
                <span className="company-profile-component-text011 txt-opacity">
                  Berlin, Deutschland
                </span>
              </div>
              <div className="company-profile-component-container028">
                <span className="company-profile-component-text012 txt-opacity">
                  info@heydata.eu
                </span>
              </div>
              <div className="company-profile-component-container029">
                <span className="company-profile-component-text013 txt-opacity">
                  030 3876523
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-profile-component-container030">
        <div className="company-profile-component-container031">
          {menu_1 && (
            <div className="company-profile-component-container032 profile_menu_btn_enable border-bottom-1px">
              <span>{props.menu_1}</span>
            </div>
          )}
          {!menu_1 && (
            <div
              onClick={() => {
                setMenu_1(true)
                setMenu_2(false)
                setMenu_3(false)
                setMenu_4(false)
              }}
              className="company-profile-component-container033 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.menu_1}</span>
            </div>
          )}
          {menu_2 && (
            <div className="company-profile-component-container034 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.menu_2}</span>
            </div>
          )}
          {!menu_2 && (
            <div
              onClick={() => {
                setMenu_1(false)
                setMenu_2(true)
                setMenu_4(false)
                setMenu_3(false)
              }}
              className="company-profile-component-container035 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.menu_2}</span>
            </div>
          )}
          {menu_3 && (
            <div className="company-profile-component-container036 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.menu_3}</span>
            </div>
          )}
          {!menu_3 && (
            <div
              onClick={() => {
                setMenu_3(true)
                setMenu_4(false)
                setMenu_2(false)
                setMenu_1(false)
              }}
              className="company-profile-component-container037 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.menu_3}</span>
            </div>
          )}
          {menu_4 && (
            <div className="company-profile-component-container038 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.menu_4}</span>
            </div>
          )}
          <div className="company-profile-component-container039 border-bottom-1px"></div>
        </div>
        {menu_1 && (
          <div className="company-profile-component-details-component">
            <div className="company-profile-component-container040">
              <div className="company-profile-component-container041 content-box">
                <div className="company-profile-component-container042 border-bottom-1px">
                  <span className="company-profile-component-text021 txt-opacity">
                    Details
                  </span>
                </div>
                <div className="company-profile-component-container043">
                  <div className="company-profile-component-container044">
                    <span className="company-profile-component-text022 txt-opacity">
                      Total contacts
                    </span>
                    <span className="company-profile-component-text023">
                      3879
                    </span>
                  </div>
                  <div className="company-profile-component-container045">
                    <span className="company-profile-component-text024 txt-opacity">
                      Under observation
                    </span>
                    <span className="company-profile-component-text025">
                      153
                    </span>
                  </div>
                  <div className="company-profile-component-container046">
                    <span className="company-profile-component-text026 txt-opacity">
                      Number of monitors
                    </span>
                    <span className="company-profile-component-text027">
                      13
                    </span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container047 content-box">
                <div className="company-profile-component-container048 border-bottom-1px">
                  <span className="company-profile-component-text028 txt-opacity">
                    Activity
                  </span>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container049 content-box">
              <div className="content-box-topBar">
                <span>Overview</span>
              </div>
              <div className="company-profile-component-container051">
                <div className="company-profile-component-container052">
                  <span className="company-profile-component-text030 txt-opacity">
                    <span>
                      Driven by a purpose: heyData is a fast-growing
                      Berlin-based Compliance Software-as-a-Service company that
                      empowers SMBs around the globe to become GDPR compliant
                      digitally.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Founded in 2019, heyData helps thousands of businesses
                      fulfill their data protection duties by simplifying the
                      world of compliance with its technology.
                    </span>
                    <br></br>
                    <span>
                      heyData provides an end-to-end solution that combines a
                      smart GDPR management system supported by profound legal
                      knowledge from certified data protection attorneys, a
                      digital backbone that evaluates organizational data, and
                      provides compliance framework and legal knowledge to
                      processes that enable businesses to manage data and make
                      smarter decisions, faster.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Made to shield and help SMBs of any industry comply with
                      data protection laws and regulations worldwide - heyData
                      is focused on shaping the new data privacy experience.
                    </span>
                  </span>
                </div>
                <div className="company-profile-component-container053"></div>
                <div className="company-profile-component-container054">
                  <div className="company-profile-component-container055">
                    <span className="company-profile-component-text040">
                      Preference
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon12 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container056">
                    <InfoIcon></InfoIcon>
                    <InfoIcon txt="Marketing"></InfoIcon>
                    <InfoIcon txt="Finance"></InfoIcon>
                    <InfoIcon txt="HR"></InfoIcon>
                  </div>
                </div>
                <div className="company-profile-component-container057"></div>
                <div className="company-profile-component-container058">
                  <div className="company-profile-component-container059">
                    <span className="company-profile-component-text041">
                      Language
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon14 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container060">
                    <InfoIcon txt="English"></InfoIcon>
                    <InfoIcon txt="Germany"></InfoIcon>
                  </div>
                </div>
                <div className="company-profile-component-container061"></div>
                <div className="company-profile-component-container062">
                  <div className="company-profile-component-container063">
                    <span className="company-profile-component-text042">
                      Web presentation
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon16 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container064">
                    <InfoIcon txt="Website"></InfoIcon>
                    <InfoIcon txt="LinkedIn"></InfoIcon>
                    <InfoIcon txt="Instagram"></InfoIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container065 content-box">
              <div className="company-profile-component-container066 grad-bg border-bottom-1px shadow-bottom">
                <span>Responsible contact</span>
                <div className="company-profile-component-container067">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="company-profile-component-icon18 btn-icon"
                  >
                    <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                  </svg>
                </div>
              </div>
              <div className="company-profile-component-container068">
                <div className="company-profile-component-container069">
                  <div className="company-profile-component-container070">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg2MjUxMjc0fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="company-profile-component-image1"
                    />
                  </div>
                  <div className="company-profile-component-container071">
                    <span className="company-profile-component-text044">
                      Christian Reichwald
                    </span>
                    <div className="company-profile-component-container072">
                      <span className="company-profile-component-text045">
                        Co-Founder
                      </span>
                    </div>
                  </div>
                </div>
                <div className="underline"></div>
                <div className="company-profile-component-container074">
                  <div className="company-profile-component-container075">
                    <div className="company-profile-component-container076 border-bottom-1px">
                      <span className="company-profile-component-text046 txt-opacity">
                        Phone number
                      </span>
                      <span>030 3876523</span>
                    </div>
                    <div className="company-profile-component-container077 border-bottom-1px">
                      <span className="company-profile-component-text048 txt-opacity">
                        Email address
                      </span>
                      <span>christia@heydata.eu</span>
                    </div>
                    <div className="company-profile-component-container078">
                      <span className="company-profile-component-text050 txt-opacity">
                        In the company since
                      </span>
                      <span>1 Year, 6 Month</span>
                    </div>
                  </div>
                  <div className="company-profile-component-container079">
                    <div className="btn-lila">
                      <svg viewBox="0 0 1024 1024" className="btn-icon">
                        <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
                      </svg>
                      <span>Contact</span>
                    </div>
                    <div className="btn-white">
                      <svg
                        viewBox="0 0 731.4285714285713 1024"
                        className="btn-icon"
                      >
                        <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
                      </svg>
                      <span>Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_4 && (
          <div className="company-profile-component-settings-component">
            <div className="company-profile-component-container081 content-box">
              <div className="company-profile-component-container082 border-bottom-1px">
                <span className="company-profile-component-text054">
                  Preference
                </span>
              </div>
              <div className="company-profile-component-container083">
                <div className="company-profile-component-container084">
                  <span className="company-profile-component-text055 txt-opacity">
                    Heare you can change the email address
                  </span>
                  <div className="company-profile-component-container085">
                    <span className="company-profile-component-text056">
                      Email Address
                    </span>
                    <div className="company-profile-component-container086">
                      <input
                        type="text"
                        value="info@heydata.eu"
                        placeholder="placeholder"
                        className="company-profile-component-textinput input"
                      />
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-container087"></div>
                <div className="company-profile-component-container088">
                  <span className="company-profile-component-text057">
                    Preference
                  </span>
                  <div className="company-profile-component-container089">
                    <div className="company-profile-component-container090">
                      <span className="company-profile-component-text058">
                        Sales
                      </span>
                    </div>
                    <div className="company-profile-component-container091">
                      <span className="company-profile-component-text059">
                        Marketing
                      </span>
                    </div>
                    <div className="company-profile-component-container092">
                      <span className="company-profile-component-text060">
                        Finance
                      </span>
                    </div>
                    <div className="company-profile-component-container093">
                      <span className="company-profile-component-text061">
                        HR
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-container094"></div>
                <div className="company-profile-component-container095">
                  <span className="company-profile-component-text062">
                    Language
                  </span>
                  <div className="company-profile-component-container096">
                    <div className="company-profile-component-container097">
                      <span className="company-profile-component-text063">
                        English
                      </span>
                    </div>
                    <div className="company-profile-component-container098">
                      <span className="company-profile-component-text064">
                        Germany
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container099 content-box">
              <div className="company-profile-component-container100 grad-bg border-bottom-1px shadow-bottom">
                <span className="company-profile-component-text065">
                  Responsible contact
                </span>
              </div>
              <div className="company-profile-component-container101">
                <div className="company-profile-component-container102">
                  <div className="company-profile-component-container103">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg2MjUxMjc0fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="company-profile-component-image2"
                    />
                  </div>
                  <div className="company-profile-component-container104">
                    <span className="company-profile-component-text066">
                      Christian Reichwald
                    </span>
                    <span className="company-profile-component-text067 txt-opacity">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <div className="underline"></div>
                <div className="company-profile-component-container106">
                  <div className="company-profile-component-container107">
                    <span className="company-profile-component-text068 txt-opacity">
                      Phone number
                    </span>
                    <span>030 3876523</span>
                  </div>
                  <div className="company-profile-component-container108">
                    <span className="company-profile-component-text070 txt-opacity">
                      Email address
                    </span>
                    <span>christia@heydata.eu</span>
                  </div>
                  <div className="company-profile-component-container109">
                    <span className="company-profile-component-text072 txt-opacity">
                      In the company since
                    </span>
                    <span>1 Year, 6 Month</span>
                  </div>
                </div>
                <div className="company-profile-component-container110 clickable">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="company-profile-component-icon24"
                  >
                    <path d="M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"></path>
                  </svg>
                  <span className="company-profile-component-text074">
                    {' '}
                    Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_2 && (
          <div className="company-profile-component-menu2">
            <div className="company-profile-component-container111">
              <div className="company-profile-component-container112">
                <div className="company-profile-component-dropdown">
                  <div className="company-profile-component-container113 border-right-1px">
                    <span className="company-profile-component-text075">
                      Sort by
                    </span>
                  </div>
                  <div className="company-profile-component-container114">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle"
                      >
                        <span className="company-profile-component-text076">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon26"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-profile-component-dropdown-list"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown1 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle01"
                          >
                            <span className="company-profile-component-text077">
                              Employees
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown2 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle02"
                          >
                            <span className="company-profile-component-text078">
                              Status
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown3 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle03"
                          >
                            <span className="company-profile-component-text079">
                              Monitoring
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown01">
                  <div className="company-profile-component-container115 border-right-1px">
                    <span className="company-profile-component-text080">
                      Group
                    </span>
                  </div>
                  <div className="company-profile-component-container116">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle04"
                      >
                        <span className="company-profile-component-text081">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon28"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-profile-component-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown02 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle05"
                          >
                            <span className="company-profile-component-text082">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown03">
                  <div className="company-profile-component-container117 border-right-1px">
                    <span className="company-profile-component-text083">
                      Status
                    </span>
                  </div>
                  <div className="company-profile-component-container118">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle06"
                      >
                        <span className="company-profile-component-text084">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow2"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon30"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-profile-component-dropdown-list2"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown04 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle07"
                          >
                            <span className="company-profile-component-text085">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container119 clickable">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-profile-component-icon32"
                >
                  <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
                </svg>
                <span>Download CSV</span>
              </div>
            </div>
            <div className="company-profile-component-container120">
              <ul className="list">
                <li className="company-profile-component-li list-item">
                  <div className="company-profile-component-container121">
                    <div className="company-profile-component-container122">
                      <div className="company-profile-component-container123">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image3"
                        />
                        <div className="company-profile-component-container124"></div>
                      </div>
                      <div className="company-profile-component-container125">
                        <div className="company-profile-component-container126">
                          <span className="company-profile-component-text087">
                            HeyData GmbH
                          </span>
                          <div className="company-profile-component-container127">
                            <div className="company-profile-component-container128">
                              <span className="company-profile-component-text088">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container129">
                              <span className="company-profile-component-text089">
                                Onboarding
                              </span>
                            </div>
                            <div className="company-profile-component-container130">
                              <span className="company-profile-component-text090">
                                Cookie
                              </span>
                            </div>
                            <div className="company-profile-component-container131">
                              <span className="company-profile-component-text091">
                                Extension
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container132">
                          <span className="company-profile-component-text092">
                            <span>
                              87
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                          </span>
                          <span className="company-profile-component-text095">
                            under observation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container133">
                      <div className="company-profile-component-container134">
                        <div className="company-profile-component-container135">
                          <span className="company-profile-component-text096">
                            386
                          </span>
                          <span className="company-profile-component-text097">
                            Employees
                          </span>
                        </div>
                        <div className="company-profile-component-container136">
                          <span className="company-profile-component-text098">
                            Last scan
                          </span>
                          <span className="company-profile-component-text099">
                            15 days ago
                          </span>
                        </div>
                      </div>
                      <div className="company-profile-component-container137"></div>
                      <div className="company-profile-component-container138">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon34"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="company-profile-component-li01 list-item">
                  <div className="company-profile-component-container139">
                    <div className="company-profile-component-container140">
                      <div className="company-profile-component-container141">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image4"
                        />
                        <div className="company-profile-component-container142"></div>
                      </div>
                      <div className="company-profile-component-container143">
                        <div className="company-profile-component-container144">
                          <span className="company-profile-component-text100">
                            Deivisson Almeida de Souza
                          </span>
                          <div className="company-profile-component-container145">
                            <div className="company-profile-component-container146">
                              <span className="company-profile-component-text101">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container147">
                              <span className="company-profile-component-text102">
                                Leads
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container148">
                          <span className="company-profile-component-text103">
                            HeyData GmbH
                          </span>
                          <span className="company-profile-component-text104">
                            Software Developer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container149">
                      <div className="company-profile-component-container150">
                        <div className="company-profile-component-container151">
                          <span className="company-profile-component-text105">
                            386
                          </span>
                          <span className="company-profile-component-text106">
                            Employees
                          </span>
                        </div>
                        <span className="company-profile-component-text107">
                          15 days ago
                        </span>
                      </div>
                      <div className="company-profile-component-container152"></div>
                      <div className="company-profile-component-container153">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon36"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="company-profile-component-container154 content-box">
              <div className="company-profile-component-container155 border-bottom-1px">
                <div className="company-profile-component-container156">
                  <InfoIcon txt="CEO"></InfoIcon>
                  <InfoIcon txt="Software Engineer"></InfoIcon>
                  <InfoIcon></InfoIcon>
                  <InfoIcon txt="Germany"></InfoIcon>
                  <InfoIcon txt="Scanned"></InfoIcon>
                </div>
                <div className="company-profile-component-container157">
                  <div className="company-profile-component-container158">
                    <div className="btn-lila">
                      <svg
                        viewBox="0 0 804.5714285714286 1024"
                        className="btn-icon"
                      >
                        <path d="M801.714 168.571c5.714 13.714 2.857 29.714-8 40l-281.714 281.714v424c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714v-277.714l-281.714-281.714c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h731.429c14.857 0 28 9.143 33.714 22.286z"></path>
                      </svg>
                      <span>Apply filter</span>
                    </div>
                    <div className="company-profile-component-container160 btn-white-noTxt">
                      <svg viewBox="0 0 1024 1024" className="btn-icon">
                        <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                        <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container161">
                <div className="company-profile-component-container162 border-right-1px">
                  <CheckBoxComponent rootClassName="check-box-component-root-class-name"></CheckBoxComponent>
                  <span className="company-profile-component-text109">
                    Scanned only
                  </span>
                </div>
                <div className="company-profile-component-container163 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle08"
                    >
                      <span className="company-profile-component-text110">
                        Preference
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow3"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon43"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list3"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown05 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle09"
                        >
                          <span className="company-profile-component-text111">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown06 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle10"
                        >
                          <span className="company-profile-component-text114">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown07 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle11"
                        >
                          <span className="company-profile-component-text115">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown08 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle12"
                        >
                          <span className="company-profile-component-text116">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown09 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          onClick={() => {
                            setExtra_box_txt('Preference')
                            setExtra_box(true)
                          }}
                          className="company-profile-component-dropdown-toggle13"
                        >
                          <span className="company-profile-component-text117">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container164 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle14"
                    >
                      <span className="company-profile-component-text118">
                        Locality
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow4"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon45"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list4"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown10 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle15"
                        >
                          <span className="company-profile-component-text119">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown11 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle16"
                        >
                          <span className="company-profile-component-text122">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown12 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle17"
                        >
                          <span className="company-profile-component-text123">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown13 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle18"
                        >
                          <span className="company-profile-component-text124">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown14 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle19"
                        >
                          <span className="company-profile-component-text125">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container165 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown5 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle20"
                    >
                      <span className="company-profile-component-text126">
                        Status
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow5"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon47"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list5"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown15 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle21"
                        >
                          <span className="company-profile-component-text127">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown16 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle22"
                        >
                          <span className="company-profile-component-text130">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown17 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle23"
                        >
                          <span className="company-profile-component-text131">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown18 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle24"
                        >
                          <span className="company-profile-component-text132">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown19 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle25"
                        >
                          <span className="company-profile-component-text133">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container166 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown6 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle26"
                    >
                      <span className="company-profile-component-text134">
                        List
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow6"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon49"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list6"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown20 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle27"
                        >
                          <span className="company-profile-component-text135">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown21 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle28"
                        >
                          <span className="company-profile-component-text138">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown22 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle29"
                        >
                          <span className="company-profile-component-text139">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown23 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle30"
                        >
                          <span className="company-profile-component-text140">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown24 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle31"
                        >
                          <span className="company-profile-component-text141">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container167">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown7 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle32"
                    >
                      <span className="company-profile-component-text142">
                        Employees
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow7"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon51"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list7"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown25 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle33"
                        >
                          <span className="company-profile-component-text143">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown26 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle34"
                        >
                          <span className="company-profile-component-text146">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown27 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle35"
                        >
                          <span className="company-profile-component-text147">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown28 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle36"
                        >
                          <span className="company-profile-component-text148">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown29 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle37"
                        >
                          <span className="company-profile-component-text149">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container168">
              <div className="company-profile-component-container169">
                <div className="company-profile-component-container170">
                  <span className="company-profile-component-text150">
                    Customer list
                  </span>
                  <div className="company-profile-component-container171">
                    <span className="company-profile-component-text151">
                      We´ve found
                    </span>
                    <span className="company-profile-component-text152">
                      354
                    </span>
                    <span className="company-profile-component-text153">
                      Companies
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container172">
                  <div className="btn-white">
                    <span>Select all</span>
                  </div>
                  <div className="btn-white">
                    <span>Download CSV</span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container175 content-box">
                <div className="company-profile-component-container176 border-bottom-1px">
                  <div className="company-profile-component-container177 border-right-1px">
                    <CheckBoxComponent rootClassName="check-box-component-root-class-name76"></CheckBoxComponent>
                  </div>
                  <div className="company-profile-component-container178 border-right-1px">
                    <span className="company-profile-component-text156">
                      Name
                    </span>
                  </div>
                  <div className="company-profile-component-container179 border-right-1px">
                    <span>Locality</span>
                  </div>
                  <div className="company-profile-component-container180 border-right-1px">
                    <span>Employees</span>
                  </div>
                  <div className="company-profile-component-container181 border-right-1px">
                    <span>Triggered</span>
                  </div>
                  <div className="company-profile-component-container182 border-right-1px">
                    <span>List</span>
                  </div>
                  <div className="company-profile-component-container183">
                    <span>Scan status</span>
                  </div>
                  <div className="company-profile-component-container184"></div>
                </div>
                <div className="company-profile-component-container185">
                  <ul className="list">
                    <li className="list-item">
                      <CompanyCustomerItem></CompanyCustomerItem>
                    </li>
                    <li className="list-item">
                      <CompanyCustomerItem></CompanyCustomerItem>
                    </li>
                    <li className="list-item">
                      <CompanyCustomerItem></CompanyCustomerItem>
                    </li>
                    <li className="list-item">
                      <CompanyCustomerItem></CompanyCustomerItem>
                    </li>
                    <li className="list-item">
                      <CompanyCustomerItem></CompanyCustomerItem>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_3 && (
          <div className="company-profile-component-menu3">
            <div className="company-profile-component-container186">
              <div className="company-profile-component-container187">
                <div className="company-profile-component-container188">
                  <span className="company-profile-component-text162">
                    LinkedIn Session Cookie
                  </span>
                  <div className="company-profile-component-container189">
                    <span className="company-profile-component-text163">
                      We´ve found
                    </span>
                    <span className="company-profile-component-text164">
                      354
                    </span>
                    <span className="company-profile-component-text165">
                      Cookies
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container190">
                  <div className="btn-white">
                    <span>Select all</span>
                  </div>
                  <div className="btn-lila">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                    <span>Add Cookie</span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container193 content-box">
                <div className="company-profile-component-container194 border-bottom-1px">
                  <div className="company-profile-component-container195 border-right-1px">
                    <CheckBoxComponent rootClassName="check-box-component-root-class-name81"></CheckBoxComponent>
                  </div>
                  <div className="company-profile-component-container196 border-right-1px">
                    <span className="company-profile-component-text168">
                      Owner
                    </span>
                  </div>
                  <div className="company-profile-component-container197 border-right-1px">
                    <span>REQUEST</span>
                  </div>
                  <div className="company-profile-component-container198 border-right-1px">
                    <span>Scan status</span>
                  </div>
                  <div className="company-profile-component-container199 border-right-1px">
                    <span>Last use</span>
                  </div>
                  <div className="company-profile-component-container200 border-right-1px">
                    <span>LinkedIn Profile</span>
                  </div>
                  <div className="company-profile-component-container201 border-right-1px">
                    <span>Session Cookie</span>
                  </div>
                  <div className="company-profile-component-container202"></div>
                </div>
                <div className="company-profile-component-container203">
                  <ul className="list">
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                    <li className="list-item">
                      <CompanyCookieItem></CompanyCookieItem>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {extra_box && (
        <div className="company-profile-component-extra-box">
          <div className="company-profile-component-container204 content-box">
            <div className="content-box-topBar">
              <span>{extra_box_txt}</span>
              <div
                onClick={() => setExtra_box(false)}
                className="company-profile-component-container206"
              >
                <svg viewBox="0 0 1024 1024" className="btn-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="company-profile-component-container207">
              <div className="company-profile-component-container208">
                <ul className="list">
                  <li className="company-profile-component-li14 list-item border-bottom-1px">
                    <div className="company-profile-component-container209">
                      <span className="company-profile-component-text175">
                        Sales
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name16"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li15 list-item border-bottom-1px">
                    <div className="company-profile-component-container210">
                      <span className="company-profile-component-text176">
                        Marketing
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name22"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li16 list-item border-bottom-1px">
                    <div className="company-profile-component-container211">
                      <span className="company-profile-component-text177">
                        HR
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name21"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li17 list-item border-bottom-1px">
                    <div className="company-profile-component-container212">
                      <span className="company-profile-component-text178">
                        Legal
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name28"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li18 list-item border-bottom-1px">
                    <div className="company-profile-component-container213">
                      <span className="company-profile-component-text179">
                        Controlling
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name27"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li19 list-item border-bottom-1px">
                    <div className="company-profile-component-container214">
                      <span className="company-profile-component-text180">
                        Compliance
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name26"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li20 list-item border-bottom-1px">
                    <div className="company-profile-component-container215">
                      <span className="company-profile-component-text181">
                        BizDev
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name25"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li21 list-item border-bottom-1px">
                    <div className="company-profile-component-container216">
                      <span className="company-profile-component-text182">
                        Business Intelligence
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name24"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li22 list-item border-bottom-1px">
                    <div className="company-profile-component-container217">
                      <span className="company-profile-component-text183">
                        Customer Care
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name23"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li23 list-item border-bottom-1px">
                    <div className="company-profile-component-container218">
                      <span className="company-profile-component-text184">
                        Customer Office Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name29"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li24 list-item border-bottom-1px">
                    <div className="company-profile-component-container219">
                      <span className="company-profile-component-text185">
                        Operations
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name30"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li25 list-item border-bottom-1px">
                    <div className="company-profile-component-container220">
                      <span className="company-profile-component-text186">
                        Partnerships
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name31"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li26 list-item border-bottom-1px">
                    <div className="company-profile-component-container221">
                      <span className="company-profile-component-text187">
                        Account Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name32"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li27 list-item border-bottom-1px">
                    <div className="company-profile-component-container222">
                      <span className="company-profile-component-text188">
                        IT
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name33"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li28 list-item border-bottom-1px">
                    <div className="company-profile-component-container223">
                      <span className="company-profile-component-text189">
                        Supply Chain
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name37"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li29 list-item border-bottom-1px">
                    <div className="company-profile-component-container224">
                      <span className="company-profile-component-text190">
                        Project Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name36"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li30 list-item border-bottom-1px">
                    <div className="company-profile-component-container225">
                      <span className="company-profile-component-text191">
                        Procurement
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name35"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li31 list-item border-bottom-1px">
                    <div className="company-profile-component-container226">
                      <span className="company-profile-component-text192">
                        Product
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name34"></CheckBoxComponent>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="company-profile-component-container227 border-top-1px"></div>
          </div>
        </div>
      )}
    </div>
  )
}

CompanyProfileComponent.defaultProps = {
  menu_2: 'Customers',
  menu_1: 'Details',
  menu_3: 'Cookies',
  company: 'HeyData GmbH',
  menu_4: 'CRM',
  image_src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxwcm9maWxlfGVufDB8fHx8MTY4NjUyMDI0N3ww&ixlib=rb-4.0.3&w=200',
}

CompanyProfileComponent.propTypes = {
  menu_2: PropTypes.string,
  menu_1: PropTypes.string,
  menu_3: PropTypes.string,
  company: PropTypes.string,
  menu_4: PropTypes.string,
  image_src: PropTypes.string,
}

export default CompanyProfileComponent
