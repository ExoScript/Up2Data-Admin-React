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
          {!menu_4 && (
            <div
              onClick={() => {
                setMenu_1(false)
                setMenu_2(false)
                setMenu_3(false)
                setMenu_4(true)
              }}
              className="company-profile-component-container038 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.menu_4}</span>
            </div>
          )}
          {menu_4 && (
            <div className="company-profile-component-container039 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.menu_4}</span>
            </div>
          )}
          <div className="company-profile-component-container040 border-bottom-1px"></div>
        </div>
        {menu_1 && (
          <div className="company-profile-component-details-component">
            <div className="company-profile-component-container041">
              <div className="company-profile-component-container042 content-box">
                <div className="company-profile-component-container043 border-bottom-1px">
                  <span className="company-profile-component-text022 txt-opacity">
                    Details
                  </span>
                </div>
                <div className="company-profile-component-container044">
                  <div className="company-profile-component-container045">
                    <span className="company-profile-component-text023 txt-opacity">
                      Total contacts
                    </span>
                    <span className="company-profile-component-text024">
                      3879
                    </span>
                  </div>
                  <div className="company-profile-component-container046">
                    <span className="company-profile-component-text025 txt-opacity">
                      Under observation
                    </span>
                    <span className="company-profile-component-text026">
                      153
                    </span>
                  </div>
                  <div className="company-profile-component-container047">
                    <span className="company-profile-component-text027 txt-opacity">
                      Number of monitors
                    </span>
                    <span className="company-profile-component-text028">
                      13
                    </span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container048 content-box">
                <div className="company-profile-component-container049 border-bottom-1px">
                  <span className="company-profile-component-text029 txt-opacity">
                    Activity
                  </span>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container050 content-box">
              <div className="content-box-topBar">
                <span>Overview</span>
              </div>
              <div className="company-profile-component-container052">
                <div className="company-profile-component-container053">
                  <span className="company-profile-component-text031 txt-opacity">
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
                <div className="company-profile-component-container054"></div>
                <div className="company-profile-component-container055">
                  <div className="company-profile-component-container056">
                    <span className="company-profile-component-text041">
                      Preference
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon12 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container057">
                    <InfoIcon></InfoIcon>
                    <InfoIcon txt="Marketing"></InfoIcon>
                    <InfoIcon txt="Finance"></InfoIcon>
                    <InfoIcon txt="HR"></InfoIcon>
                  </div>
                </div>
                <div className="company-profile-component-container058"></div>
                <div className="company-profile-component-container059">
                  <div className="company-profile-component-container060">
                    <span className="company-profile-component-text042">
                      Language
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon14 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container061">
                    <InfoIcon txt="English"></InfoIcon>
                    <InfoIcon txt="Germany"></InfoIcon>
                  </div>
                </div>
                <div className="company-profile-component-container062"></div>
                <div className="company-profile-component-container063">
                  <div className="company-profile-component-container064">
                    <span className="company-profile-component-text043">
                      Web presentation
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-component-icon16 btn-icon"
                    >
                      <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                    </svg>
                  </div>
                  <div className="company-profile-component-container065">
                    <InfoIcon txt="Website"></InfoIcon>
                    <InfoIcon txt="LinkedIn"></InfoIcon>
                    <InfoIcon txt="Instagram"></InfoIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container066 content-box">
              <div className="company-profile-component-container067 grad-bg border-bottom-1px shadow-bottom">
                <span>Responsible contact</span>
                <div className="company-profile-component-container068">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="company-profile-component-icon18 btn-icon"
                  >
                    <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                  </svg>
                </div>
              </div>
              <div className="company-profile-component-container069">
                <div className="company-profile-component-container070">
                  <div className="company-profile-component-container071">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg2MjUxMjc0fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="company-profile-component-image1"
                    />
                  </div>
                  <div className="company-profile-component-container072">
                    <span className="company-profile-component-text045">
                      Christian Reichwald
                    </span>
                    <div className="company-profile-component-container073">
                      <span className="company-profile-component-text046">
                        Co-Founder
                      </span>
                    </div>
                  </div>
                </div>
                <div className="underline"></div>
                <div className="company-profile-component-container075">
                  <div className="company-profile-component-container076">
                    <div className="company-profile-component-container077 border-bottom-1px">
                      <span className="company-profile-component-text047 txt-opacity">
                        Phone number
                      </span>
                      <span>030 3876523</span>
                    </div>
                    <div className="company-profile-component-container078 border-bottom-1px">
                      <span className="company-profile-component-text049 txt-opacity">
                        Email address
                      </span>
                      <span>christia@heydata.eu</span>
                    </div>
                    <div className="company-profile-component-container079">
                      <span className="company-profile-component-text051 txt-opacity">
                        In the company since
                      </span>
                      <span>1 Year, 6 Month</span>
                    </div>
                  </div>
                  <div className="company-profile-component-container080">
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
        {menu_2 && (
          <div className="company-profile-component-menu2">
            <div className="company-profile-component-container082">
              <div className="company-profile-component-container083">
                <div className="company-profile-component-dropdown">
                  <div className="company-profile-component-container084 border-right-1px">
                    <span className="company-profile-component-text055">
                      Sort by
                    </span>
                  </div>
                  <div className="company-profile-component-container085">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle"
                      >
                        <span className="company-profile-component-text056">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon24"
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
                            <span className="company-profile-component-text057">
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
                            <span className="company-profile-component-text058">
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
                            <span className="company-profile-component-text059">
                              Monitoring
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown01">
                  <div className="company-profile-component-container086 border-right-1px">
                    <span className="company-profile-component-text060">
                      Group
                    </span>
                  </div>
                  <div className="company-profile-component-container087">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle04"
                      >
                        <span className="company-profile-component-text061">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow01"
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
                        className="company-profile-component-dropdown-list01"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown02 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle05"
                          >
                            <span className="company-profile-component-text062">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown03">
                  <div className="company-profile-component-container088 border-right-1px">
                    <span className="company-profile-component-text063">
                      Status
                    </span>
                  </div>
                  <div className="company-profile-component-container089">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle06"
                      >
                        <span className="company-profile-component-text064">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow02"
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
                        className="company-profile-component-dropdown-list02"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown04 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle07"
                          >
                            <span className="company-profile-component-text065">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container090 clickable">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-profile-component-icon30"
                >
                  <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
                </svg>
                <span>Download CSV</span>
              </div>
            </div>
            <div className="company-profile-component-container091">
              <ul className="list">
                <li className="company-profile-component-li list-item">
                  <div className="company-profile-component-container092">
                    <div className="company-profile-component-container093">
                      <div className="company-profile-component-container094">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image2"
                        />
                        <div className="company-profile-component-container095"></div>
                      </div>
                      <div className="company-profile-component-container096">
                        <div className="company-profile-component-container097">
                          <span className="company-profile-component-text067">
                            HeyData GmbH
                          </span>
                          <div className="company-profile-component-container098">
                            <div className="company-profile-component-container099">
                              <span className="company-profile-component-text068">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container100">
                              <span className="company-profile-component-text069">
                                Onboarding
                              </span>
                            </div>
                            <div className="company-profile-component-container101">
                              <span className="company-profile-component-text070">
                                Cookie
                              </span>
                            </div>
                            <div className="company-profile-component-container102">
                              <span className="company-profile-component-text071">
                                Extension
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container103">
                          <span className="company-profile-component-text072">
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
                          <span className="company-profile-component-text075">
                            under observation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container104">
                      <div className="company-profile-component-container105">
                        <div className="company-profile-component-container106">
                          <span className="company-profile-component-text076">
                            386
                          </span>
                          <span className="company-profile-component-text077">
                            Employees
                          </span>
                        </div>
                        <div className="company-profile-component-container107">
                          <span className="company-profile-component-text078">
                            Last scan
                          </span>
                          <span className="company-profile-component-text079">
                            15 days ago
                          </span>
                        </div>
                      </div>
                      <div className="company-profile-component-container108"></div>
                      <div className="company-profile-component-container109">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon32"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="company-profile-component-li01 list-item">
                  <div className="company-profile-component-container110">
                    <div className="company-profile-component-container111">
                      <div className="company-profile-component-container112">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image3"
                        />
                        <div className="company-profile-component-container113"></div>
                      </div>
                      <div className="company-profile-component-container114">
                        <div className="company-profile-component-container115">
                          <span className="company-profile-component-text080">
                            Deivisson Almeida de Souza
                          </span>
                          <div className="company-profile-component-container116">
                            <div className="company-profile-component-container117">
                              <span className="company-profile-component-text081">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container118">
                              <span className="company-profile-component-text082">
                                Leads
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container119">
                          <span className="company-profile-component-text083">
                            HeyData GmbH
                          </span>
                          <span className="company-profile-component-text084">
                            Software Developer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container120">
                      <div className="company-profile-component-container121">
                        <div className="company-profile-component-container122">
                          <span className="company-profile-component-text085">
                            386
                          </span>
                          <span className="company-profile-component-text086">
                            Employees
                          </span>
                        </div>
                        <span className="company-profile-component-text087">
                          15 days ago
                        </span>
                      </div>
                      <div className="company-profile-component-container123"></div>
                      <div className="company-profile-component-container124">
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
              </ul>
            </div>
            <div className="company-profile-component-container125 content-box">
              <div className="company-profile-component-container126 border-bottom-1px">
                <div className="company-profile-component-container127">
                  <InfoIcon txt="CEO"></InfoIcon>
                  <InfoIcon txt="Software Engineer"></InfoIcon>
                  <InfoIcon></InfoIcon>
                  <InfoIcon txt="Germany"></InfoIcon>
                  <InfoIcon txt="Scanned"></InfoIcon>
                </div>
                <div className="company-profile-component-container128">
                  <div className="company-profile-component-container129">
                    <div className="btn-lila">
                      <svg
                        viewBox="0 0 804.5714285714286 1024"
                        className="btn-icon"
                      >
                        <path d="M801.714 168.571c5.714 13.714 2.857 29.714-8 40l-281.714 281.714v424c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714v-277.714l-281.714-281.714c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h731.429c14.857 0 28 9.143 33.714 22.286z"></path>
                      </svg>
                      <span>Apply filter</span>
                    </div>
                    <div className="company-profile-component-container131 btn-white-noTxt">
                      <svg viewBox="0 0 1024 1024" className="btn-icon">
                        <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                        <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container132">
                <div className="company-profile-component-container133 border-right-1px">
                  <CheckBoxComponent rootClassName="check-box-component-root-class-name"></CheckBoxComponent>
                  <span className="company-profile-component-text089">
                    Scanned only
                  </span>
                </div>
                <div className="company-profile-component-container134 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown03 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle08"
                    >
                      <span className="company-profile-component-text090">
                        Preference
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow03"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon41"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list03"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown05 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle09"
                        >
                          <span className="company-profile-component-text091">
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
                          <span className="company-profile-component-text094">
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
                          <span className="company-profile-component-text095">
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
                          <span className="company-profile-component-text096">
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
                          <span className="company-profile-component-text097">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container135 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle14"
                    >
                      <span className="company-profile-component-text098">
                        Locality
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow04"
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
                      className="company-profile-component-dropdown-list04"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown10 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle15"
                        >
                          <span className="company-profile-component-text099">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li data-thq="thq-dropdown">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle16"
                        >
                          <span className="company-profile-component-text102">
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
                          <span className="company-profile-component-text103">
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
                          <span className="company-profile-component-text104">
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
                          <span className="company-profile-component-text105">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container136 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown05 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle20"
                    >
                      <span className="company-profile-component-text106">
                        Status
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow05"
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
                      className="company-profile-component-dropdown-list05"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown15 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle21"
                        >
                          <span className="company-profile-component-text107">
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
                          <span className="company-profile-component-text110">
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
                          <span className="company-profile-component-text111">
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
                          <span className="company-profile-component-text112">
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
                          <span className="company-profile-component-text113">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container137 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown06 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle26"
                    >
                      <span className="company-profile-component-text114">
                        List
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow06"
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
                      className="company-profile-component-dropdown-list06"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown20 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle27"
                        >
                          <span className="company-profile-component-text115">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li data-thq="thq-dropdown">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle28"
                        >
                          <span className="company-profile-component-text118">
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
                          <span className="company-profile-component-text119">
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
                          <span className="company-profile-component-text120">
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
                          <span className="company-profile-component-text121">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container138">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle32"
                    >
                      <span className="company-profile-component-text122">
                        Employees
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow07"
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
                      className="company-profile-component-dropdown-list07"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown25 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle33"
                        >
                          <span className="company-profile-component-text123">
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
                          <span className="company-profile-component-text126">
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
                          <span className="company-profile-component-text127">
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
                          <span className="company-profile-component-text128">
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
                          <span className="company-profile-component-text129">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container139">
              <div className="company-profile-component-container140">
                <div className="company-profile-component-container141">
                  <span className="company-profile-component-text130">
                    Customer list
                  </span>
                  <div className="company-profile-component-container142">
                    <span className="company-profile-component-text131">
                      We´ve found
                    </span>
                    <span className="company-profile-component-text132">
                      354
                    </span>
                    <span className="company-profile-component-text133">
                      Companies
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container143">
                  <div className="btn-white">
                    <span>Select all</span>
                  </div>
                  <div className="btn-white">
                    <span>Download CSV</span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container146 content-box">
                <div className="company-profile-component-container147 border-bottom-1px">
                  <div className="company-profile-component-container148 border-right-1px">
                    <CheckBoxComponent rootClassName="check-box-component-root-class-name76"></CheckBoxComponent>
                  </div>
                  <div className="company-profile-component-container149 border-right-1px">
                    <span className="company-profile-component-text136">
                      Name
                    </span>
                  </div>
                  <div className="company-profile-component-container150 border-right-1px">
                    <span>Locality</span>
                  </div>
                  <div className="company-profile-component-container151 border-right-1px">
                    <span>Employees</span>
                  </div>
                  <div className="company-profile-component-container152 border-right-1px">
                    <span>Triggered</span>
                  </div>
                  <div className="company-profile-component-container153 border-right-1px">
                    <span>List</span>
                  </div>
                  <div className="company-profile-component-container154">
                    <span>Scan status</span>
                  </div>
                  <div className="company-profile-component-container155"></div>
                </div>
                <div className="company-profile-component-container156">
                  <ul className="list">
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
            <div className="company-profile-component-container157">
              <div className="company-profile-component-container158">
                <div className="company-profile-component-dropdown30">
                  <div className="company-profile-component-container159 border-right-1px">
                    <span className="company-profile-component-text142">
                      Sort by
                    </span>
                  </div>
                  <div className="company-profile-component-container160">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle38"
                      >
                        <span className="company-profile-component-text143">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow08"
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
                        className="company-profile-component-dropdown-list08"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown11 list-item company-profile-component-dropdown11 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle39"
                          >
                            <span className="company-profile-component-text144">
                              Employees
                            </span>
                          </div>
                        </li>
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown21 list-item company-profile-component-dropdown21 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle40"
                          >
                            <span className="company-profile-component-text145">
                              Status
                            </span>
                          </div>
                        </li>
                        <li data-thq="thq-dropdown">
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle41"
                          >
                            <span className="company-profile-component-text146">
                              Monitoring
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown31 list-item company-profile-component-dropdown31">
                  <div className="company-profile-component-container161 border-right-1px">
                    <span className="company-profile-component-text147">
                      Group
                    </span>
                  </div>
                  <div className="company-profile-component-container162">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle42"
                      >
                        <span className="company-profile-component-text148">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow09"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon53"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-profile-component-dropdown-list09"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown32 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle43"
                          >
                            <span className="company-profile-component-text149">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-profile-component-dropdown33">
                  <div className="company-profile-component-container163 border-right-1px">
                    <span className="company-profile-component-text150">
                      Status
                    </span>
                  </div>
                  <div className="company-profile-component-container164">
                    <div
                      data-thq="thq-dropdown"
                      className="company-profile-component-thq-dropdown10 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-profile-component-dropdown-toggle44"
                      >
                        <span className="company-profile-component-text151">
                          Date
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-profile-component-dropdown-arrow10"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-profile-component-icon55"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-profile-component-dropdown-list10"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-profile-component-dropdown34 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-profile-component-dropdown-toggle45"
                          >
                            <span className="company-profile-component-text152">
                              Sub-menu Item
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container165 clickable">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-profile-component-icon57"
                >
                  <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
                </svg>
                <span>Download CSV</span>
              </div>
            </div>
            <div className="company-profile-component-container166">
              <ul className="list">
                <li className="company-profile-component-li03 list-item">
                  <div className="company-profile-component-container167">
                    <div className="company-profile-component-container168">
                      <div className="company-profile-component-container169">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image4"
                        />
                        <div className="company-profile-component-container170"></div>
                      </div>
                      <div className="company-profile-component-container171">
                        <div className="company-profile-component-container172">
                          <span className="company-profile-component-text154">
                            HeyData GmbH
                          </span>
                          <div className="company-profile-component-container173">
                            <div className="company-profile-component-container174">
                              <span className="company-profile-component-text155">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container175">
                              <span className="company-profile-component-text156">
                                Onboarding
                              </span>
                            </div>
                            <div className="company-profile-component-container176">
                              <span className="company-profile-component-text157">
                                Cookie
                              </span>
                            </div>
                            <div className="company-profile-component-container177">
                              <span className="company-profile-component-text158">
                                Extension
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container178">
                          <span className="company-profile-component-text159">
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
                          <span className="company-profile-component-text162">
                            under observation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container179">
                      <div className="company-profile-component-container180">
                        <div className="company-profile-component-container181">
                          <span className="company-profile-component-text163">
                            386
                          </span>
                          <span className="company-profile-component-text164">
                            Employees
                          </span>
                        </div>
                        <div className="company-profile-component-container182">
                          <span className="company-profile-component-text165">
                            Last scan
                          </span>
                          <span className="company-profile-component-text166">
                            15 days ago
                          </span>
                        </div>
                      </div>
                      <div className="company-profile-component-container183"></div>
                      <div className="company-profile-component-container184">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon59"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="company-profile-component-li04 list-item">
                  <div className="company-profile-component-container185">
                    <div className="company-profile-component-container186">
                      <div className="company-profile-component-container187">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="company-profile-component-image5"
                        />
                        <div className="company-profile-component-container188"></div>
                      </div>
                      <div className="company-profile-component-container189">
                        <div className="company-profile-component-container190">
                          <span className="company-profile-component-text167">
                            Deivisson Almeida de Souza
                          </span>
                          <div className="company-profile-component-container191">
                            <div className="company-profile-component-container192">
                              <span className="company-profile-component-text168">
                                Scanned
                              </span>
                            </div>
                            <div className="company-profile-component-container193">
                              <span className="company-profile-component-text169">
                                Leads
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-profile-component-container194">
                          <span className="company-profile-component-text170">
                            HeyData GmbH
                          </span>
                          <span className="company-profile-component-text171">
                            Software Developer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-profile-component-container195">
                      <div className="company-profile-component-container196">
                        <div className="company-profile-component-container197">
                          <span className="company-profile-component-text172">
                            386
                          </span>
                          <span className="company-profile-component-text173">
                            Employees
                          </span>
                        </div>
                        <span className="company-profile-component-text174">
                          15 days ago
                        </span>
                      </div>
                      <div className="company-profile-component-container198"></div>
                      <div className="company-profile-component-container199">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon61"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="company-profile-component-container200 content-box">
              <div className="company-profile-component-container201 border-bottom-1px">
                <div className="company-profile-component-container202">
                  <InfoIcon txt="CEO"></InfoIcon>
                  <InfoIcon txt="Software Engineer"></InfoIcon>
                  <InfoIcon></InfoIcon>
                  <InfoIcon txt="Germany"></InfoIcon>
                  <InfoIcon txt="Scanned"></InfoIcon>
                </div>
                <div className="company-profile-component-container203">
                  <div className="company-profile-component-container204">
                    <div className="btn-lila">
                      <svg
                        viewBox="0 0 804.5714285714286 1024"
                        className="btn-icon"
                      >
                        <path d="M801.714 168.571c5.714 13.714 2.857 29.714-8 40l-281.714 281.714v424c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-146.286-146.286c-6.857-6.857-10.857-16-10.857-25.714v-277.714l-281.714-281.714c-10.857-10.286-13.714-26.286-8-40 5.714-13.143 18.857-22.286 33.714-22.286h731.429c14.857 0 28 9.143 33.714 22.286z"></path>
                      </svg>
                      <span>Apply filter</span>
                    </div>
                    <div className="company-profile-component-container206 btn-white-noTxt">
                      <svg viewBox="0 0 1024 1024" className="btn-icon">
                        <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                        <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container207">
                <div className="company-profile-component-container208 border-right-1px">
                  <CheckBoxComponent rootClassName="check-box-component-root-class-name83"></CheckBoxComponent>
                  <span className="company-profile-component-text176">
                    Scanned only
                  </span>
                </div>
                <div className="company-profile-component-container209 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle46"
                    >
                      <span className="company-profile-component-text177">
                        Preference
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow11"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon68"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list11"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown35 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle47"
                        >
                          <span className="company-profile-component-text178">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown36 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle48"
                        >
                          <span className="company-profile-component-text181">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown37 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle49"
                        >
                          <span className="company-profile-component-text182">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown38 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle50"
                        >
                          <span className="company-profile-component-text183">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown39 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle51"
                        >
                          <span className="company-profile-component-text184">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container210 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle52"
                    >
                      <span className="company-profile-component-text185">
                        Locality
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow12"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon70"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list12"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown40 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle53"
                        >
                          <span className="company-profile-component-text186">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown41 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle54"
                        >
                          <span className="company-profile-component-text189">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown42 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle55"
                        >
                          <span className="company-profile-component-text190">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown43 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle56"
                        >
                          <span className="company-profile-component-text191">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown44 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle57"
                        >
                          <span className="company-profile-component-text192">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container211 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle58"
                    >
                      <span className="company-profile-component-text193">
                        Status
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow13"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon72"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list13"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown45 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle59"
                        >
                          <span className="company-profile-component-text194">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown46 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle60"
                        >
                          <span className="company-profile-component-text197">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown47 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle61"
                        >
                          <span className="company-profile-component-text198">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown48 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle62"
                        >
                          <span className="company-profile-component-text199">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown49 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle63"
                        >
                          <span className="company-profile-component-text200">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container212 border-right-1px">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle64"
                    >
                      <span className="company-profile-component-text201">
                        List
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow14"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon74"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list14"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown50 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle65"
                        >
                          <span className="company-profile-component-text202">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown51 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle66"
                        >
                          <span className="company-profile-component-text205">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown52 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle67"
                        >
                          <span className="company-profile-component-text206">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown53 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle68"
                        >
                          <span className="company-profile-component-text207">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown54 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle69"
                        >
                          <span className="company-profile-component-text208">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company-profile-component-container213">
                  <div
                    data-thq="thq-dropdown"
                    className="company-profile-component-thq-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="company-profile-component-dropdown-toggle70"
                    >
                      <span className="company-profile-component-text209">
                        Triggered
                      </span>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="company-profile-component-dropdown-arrow15"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-profile-component-icon76"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="company-profile-component-dropdown-list15"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown55 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle71"
                        >
                          <span className="company-profile-component-text210">
                            <span>Sales</span>
                            <br></br>
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown56 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle72"
                        >
                          <span className="company-profile-component-text213">
                            Marketing
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown57 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle73"
                        >
                          <span className="company-profile-component-text214">
                            Finance
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown58 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle74"
                        >
                          <span className="company-profile-component-text215">
                            HR
                          </span>
                          <CheckBoxComponent></CheckBoxComponent>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="company-profile-component-dropdown59 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="company-profile-component-dropdown-toggle75"
                        >
                          <span className="company-profile-component-text216">
                            See all
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-profile-component-container214">
              <div className="company-profile-component-container215">
                <div className="company-profile-component-container216">
                  <span className="company-profile-component-text217">
                    Employee list
                  </span>
                  <div className="company-profile-component-container217">
                    <span className="company-profile-component-text218">
                      We´ve found
                    </span>
                    <span className="company-profile-component-text219">
                      354
                    </span>
                    <span className="company-profile-component-text220">
                      Employees
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container218">
                  <div className="btn-white">
                    <span>Select all</span>
                  </div>
                  <div className="btn-white">
                    <span>Download CSV</span>
                  </div>
                </div>
              </div>
              <div className="company-profile-component-container221 content-box">
                <div className="company-profile-component-container222 border-bottom-1px">
                  <div className="company-profile-component-container223 border-right-1px">
                    <CheckBoxComponent rootClassName="check-box-component-root-class-name84"></CheckBoxComponent>
                  </div>
                  <div className="company-profile-component-container224 border-right-1px">
                    <span className="company-profile-component-text223">
                      Name
                    </span>
                  </div>
                  <div className="company-profile-component-container225 border-right-1px">
                    <span>Locality</span>
                  </div>
                  <div className="company-profile-component-container226 border-right-1px">
                    <span>Position</span>
                  </div>
                  <div className="company-profile-component-container227 border-right-1px">
                    <span>Triggered</span>
                  </div>
                  <div className="company-profile-component-container228 border-right-1px">
                    <span>List</span>
                  </div>
                  <div className="company-profile-component-container229">
                    <span>Scan status</span>
                  </div>
                  <div className="company-profile-component-container230"></div>
                </div>
                <div className="company-profile-component-container231">
                  <ul className="list">
                    <li className="list-item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_4 && (
          <div className="company-profile-component-menu4">
            <div className="company-profile-component-container232">
              <div className="company-profile-component-container233">
                <div className="company-profile-component-container234">
                  <span className="company-profile-component-text229">
                    LinkedIn Session Cookie
                  </span>
                  <div className="company-profile-component-container235">
                    <span className="company-profile-component-text230">
                      We´ve found
                    </span>
                    <span className="company-profile-component-text231">
                      354
                    </span>
                    <span className="company-profile-component-text232">
                      Cookies
                    </span>
                  </div>
                </div>
                <div className="company-profile-component-container236">
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
              <div className="company-profile-component-container239 content-box">
                <div className="company-profile-component-container240 border-bottom-1px">
                  <div className="company-profile-component-container241 border-right-1px">
                    <CheckBoxComponent rootClassName="check-box-component-root-class-name81"></CheckBoxComponent>
                  </div>
                  <div className="company-profile-component-container242 border-right-1px">
                    <span className="company-profile-component-text235">
                      Owner
                    </span>
                  </div>
                  <div className="company-profile-component-container243 border-right-1px">
                    <span>Request</span>
                  </div>
                  <div className="company-profile-component-container244 border-right-1px">
                    <span>Status</span>
                  </div>
                  <div className="company-profile-component-container245 border-right-1px">
                    <span>Last use</span>
                  </div>
                  <div className="company-profile-component-container246 border-right-1px">
                    <span>
                      LinkedIn
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="company-profile-component-container247 border-right-1px">
                    <span>Session Cookie</span>
                  </div>
                  <div className="company-profile-component-container248"></div>
                </div>
                <div className="company-profile-component-container249">
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
          <div className="company-profile-component-container250 content-box">
            <div className="content-box-topBar">
              <span>{extra_box_txt}</span>
              <div
                onClick={() => setExtra_box(false)}
                className="company-profile-component-container252"
              >
                <svg viewBox="0 0 1024 1024" className="btn-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="company-profile-component-container253">
              <div className="company-profile-component-container254">
                <ul className="list">
                  <li className="company-profile-component-li13 list-item border-bottom-1px">
                    <div className="company-profile-component-container255">
                      <span className="company-profile-component-text242">
                        Sales
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name16"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li14 list-item border-bottom-1px">
                    <div className="company-profile-component-container256">
                      <span className="company-profile-component-text243">
                        Marketing
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name22"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li15 list-item border-bottom-1px">
                    <div className="company-profile-component-container257">
                      <span className="company-profile-component-text244">
                        HR
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name21"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li16 list-item border-bottom-1px">
                    <div className="company-profile-component-container258">
                      <span className="company-profile-component-text245">
                        Legal
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name28"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li17 list-item border-bottom-1px">
                    <div className="company-profile-component-container259">
                      <span className="company-profile-component-text246">
                        Controlling
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name27"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li18 list-item border-bottom-1px">
                    <div className="company-profile-component-container260">
                      <span className="company-profile-component-text247">
                        Compliance
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name26"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li19 list-item border-bottom-1px">
                    <div className="company-profile-component-container261">
                      <span className="company-profile-component-text248">
                        BizDev
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name25"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li20 list-item border-bottom-1px">
                    <div className="company-profile-component-container262">
                      <span className="company-profile-component-text249">
                        Business Intelligence
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name24"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li21 list-item border-bottom-1px">
                    <div className="company-profile-component-container263">
                      <span className="company-profile-component-text250">
                        Customer Care
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name23"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li22 list-item border-bottom-1px">
                    <div className="company-profile-component-container264">
                      <span className="company-profile-component-text251">
                        Customer Office Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name29"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li23 list-item border-bottom-1px">
                    <div className="company-profile-component-container265">
                      <span className="company-profile-component-text252">
                        Operations
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name30"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li24 list-item border-bottom-1px">
                    <div className="company-profile-component-container266">
                      <span className="company-profile-component-text253">
                        Partnerships
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name31"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li25 list-item border-bottom-1px">
                    <div className="company-profile-component-container267">
                      <span className="company-profile-component-text254">
                        Account Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name32"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li26 list-item border-bottom-1px">
                    <div className="company-profile-component-container268">
                      <span className="company-profile-component-text255">
                        IT
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name33"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li27 list-item border-bottom-1px">
                    <div className="company-profile-component-container269">
                      <span className="company-profile-component-text256">
                        Supply Chain
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name37"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li28 list-item border-bottom-1px">
                    <div className="company-profile-component-container270">
                      <span className="company-profile-component-text257">
                        Project Management
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name36"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li29 list-item border-bottom-1px">
                    <div className="company-profile-component-container271">
                      <span className="company-profile-component-text258">
                        Procurement
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name35"></CheckBoxComponent>
                    </div>
                  </li>
                  <li className="company-profile-component-li30 list-item border-bottom-1px">
                    <div className="company-profile-component-container272">
                      <span className="company-profile-component-text259">
                        Product
                      </span>
                      <CheckBoxComponent rootClassName="check-box-component-root-class-name34"></CheckBoxComponent>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="company-profile-component-container273 border-top-1px"></div>
          </div>
        </div>
      )}
    </div>
  )
}

CompanyProfileComponent.defaultProps = {
  menu_2: 'Customers',
  menu_1: 'Details',
  menu_3: 'Employees',
  company: 'HeyData GmbH',
  image_src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxwcm9maWxlfGVufDB8fHx8MTY4NjUyMDI0N3ww&ixlib=rb-4.0.3&w=200',
  menu_4: 'Cookie',
}

CompanyProfileComponent.propTypes = {
  menu_2: PropTypes.string,
  menu_1: PropTypes.string,
  menu_3: PropTypes.string,
  company: PropTypes.string,
  image_src: PropTypes.string,
  menu_4: PropTypes.string,
}

export default CompanyProfileComponent
