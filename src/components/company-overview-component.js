import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './company-overview-component.css'

const CompanyOverviewComponent = (props) => {
  const [menu_2, setMenu_2] = useState(false)
  const [menu_1, setMenu_1] = useState(true)
  const [menu_3, setMenu_3] = useState(false)
  const [menu_4, setMenu_4] = useState(false)
  return (
    <div className="company-overview-component-company-overview-component">
      <div className="company-overview-component-container">
        <div className="company-overview-component-container001 border-bottom-1px">
          <span className="company-overview-component-text">{props.text}</span>
        </div>
        <div className="company-overview-component-container002">
          <div className="company-overview-component-container003">
            <div className="company-overview-component-container004">
              <img
                alt={props.image_alt}
                src="https://images.provenexpert.com/95/72/0ed7fe6a44060487c196832cc53f/heydata-gmbh_full_1683553649.jpg"
                loading="lazy"
                className="company-overview-component-image"
              />
              <div className="company-overview-component-container005"></div>
            </div>
            <div className="company-overview-component-container006 border-right-1px">
              <div className="company-overview-component-container007">
                <div className="company-overview-component-container008">
                  <span className="company-overview-component-text001">
                    {props.text20}
                  </span>
                  <span className="company-overview-component-text002">
                    {props.text21}
                  </span>
                  <div className="company-overview-component-container009">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-component-icon"
                    >
                      <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
                    </svg>
                    <span className="company-overview-component-text003">
                      {props.text38}
                    </span>
                  </div>
                </div>
                <div className="company-overview-component-container010"></div>
              </div>
              <div className="company-overview-component-container011">
                <div className="company-overview-component-container012 clickable">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="company-overview-component-icon02"
                  >
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                  <span>{props.text22}</span>
                </div>
                <div className="company-overview-component-container013 clickable">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="company-overview-component-icon04"
                  >
                    <path d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                  <span>{props.text23}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="company-overview-component-container014">
            <div className="company-overview-component-container015">
              <div className="company-overview-component-container016">
                <span className="company-overview-component-text006">
                  {props.text7}
                </span>
              </div>
              <div className="company-overview-component-container017">
                <span className="company-overview-component-text007">
                  {props.text8}
                </span>
              </div>
              <div className="company-overview-component-container018">
                <span className="company-overview-component-text008">
                  {props.text9}
                </span>
              </div>
              <div className="company-overview-component-container019">
                <span className="company-overview-component-text009">
                  {props.text10}
                </span>
              </div>
            </div>
            <div className="company-overview-component-container020">
              <div className="company-overview-component-container021">
                <span className="company-overview-component-text010 txt-opacity">
                  {props.text11}
                </span>
              </div>
              <div className="company-overview-component-container022">
                <span className="company-overview-component-text011 txt-opacity">
                  {props.text12}
                </span>
              </div>
              <div className="company-overview-component-container023">
                <span className="company-overview-component-text012 txt-opacity">
                  {props.text13}
                </span>
              </div>
              <div className="company-overview-component-container024">
                <span className="company-overview-component-text013 txt-opacity">
                  {props.text14}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-overview-component-container025">
        <div className="company-overview-component-container026">
          {menu_1 && (
            <div className="company-overview-component-container027 profile_menu_btn_enable border-bottom-1px">
              <span>{props.text1}</span>
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
              className="company-overview-component-container028 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.text110}</span>
            </div>
          )}
          {menu_2 && (
            <div className="company-overview-component-container029 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.text2}</span>
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
              className="company-overview-component-container030 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.text210}</span>
            </div>
          )}
          {menu_3 && (
            <div className="company-overview-component-container031 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.text3}</span>
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
              className="company-overview-component-container032 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.text310}</span>
            </div>
          )}
          {menu_4 && (
            <div className="company-overview-component-container033 profile_menu_btn_enable border-bottom-1px clickable">
              <span>{props.text4}</span>
            </div>
          )}
          {!menu_4 && (
            <div
              onClick={() => {
                setMenu_1(false)
                setMenu_4(true)
                setMenu_2(false)
                setMenu_3(false)
              }}
              className="company-overview-component-container034 profile_menu_btn_disable border-bottom-1px clickable"
            >
              <span>{props.text410}</span>
            </div>
          )}
          <div className="company-overview-component-container035 border-bottom-1px"></div>
        </div>
        {menu_1 && (
          <div className="company-overview-component-details-component">
            <div className="company-overview-component-container036">
              <div className="company-overview-component-container037 content-box">
                <div className="company-overview-component-container038 border-bottom-1px">
                  <span className="company-overview-component-text022 txt-opacity">
                    {props.text15}
                  </span>
                </div>
                <div className="company-overview-component-container039">
                  <div className="company-overview-component-container040">
                    <span className="company-overview-component-text023 txt-opacity">
                      {props.text24}
                    </span>
                    <span className="company-overview-component-text024">
                      {props.text25}
                    </span>
                  </div>
                  <div className="company-overview-component-container041">
                    <span className="company-overview-component-text025 txt-opacity">
                      {props.text26}
                    </span>
                    <span className="company-overview-component-text026">
                      {props.text27}
                    </span>
                  </div>
                  <div className="company-overview-component-container042">
                    <span className="company-overview-component-text027 txt-opacity">
                      {props.text28}
                    </span>
                    <span className="company-overview-component-text028">
                      {props.text29}
                    </span>
                  </div>
                </div>
              </div>
              <div className="company-overview-component-container043 content-box">
                <div className="company-overview-component-container044 border-bottom-1px">
                  <span className="company-overview-component-text029 txt-opacity">
                    {props.text16}
                  </span>
                </div>
              </div>
            </div>
            <div className="company-overview-component-container045 content-box">
              <div className="company-overview-component-container046 border-bottom-1px">
                <span className="company-overview-component-text030">
                  {props.text5}
                </span>
              </div>
              <div className="company-overview-component-container047">
                <div className="company-overview-component-container048">
                  <span className="company-overview-component-text031 txt-opacity">
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
                <div className="company-overview-component-container049"></div>
                <div className="company-overview-component-container050">
                  <span className="company-overview-component-text041">
                    {props.text17}
                  </span>
                  <div className="company-overview-component-container051">
                    <div className="company-overview-component-container052">
                      <span className="company-overview-component-text042">
                        {props.text39}
                      </span>
                    </div>
                    <div className="company-overview-component-container053">
                      <span className="company-overview-component-text043">
                        {props.text40}
                      </span>
                    </div>
                    <div className="company-overview-component-container054">
                      <span className="company-overview-component-text044">
                        {props.text41}
                      </span>
                    </div>
                    <div className="company-overview-component-container055">
                      <span className="company-overview-component-text045">
                        {props.text42}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-container056"></div>
                <div className="company-overview-component-container057">
                  <span className="company-overview-component-text046">
                    {props.text18}
                  </span>
                  <div className="company-overview-component-container058">
                    <div className="company-overview-component-container059">
                      <span className="company-overview-component-text047">
                        {props.text43}
                      </span>
                    </div>
                    <div className="company-overview-component-container060">
                      <span className="company-overview-component-text048">
                        {props.text44}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-overview-component-container061 content-box">
              <div className="company-overview-component-container062 grad-bg border-bottom-1px shadow-bottom">
                <span className="company-overview-component-text049">
                  {props.text6}
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-overview-component-icon06 clickable"
                >
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </div>
              <div className="company-overview-component-container063">
                <div className="company-overview-component-container064">
                  <div className="company-overview-component-container065">
                    <img
                      alt={props.image_alt1}
                      src={props.image_src1}
                      className="company-overview-component-image1"
                    />
                  </div>
                  <div className="company-overview-component-container066">
                    <span className="company-overview-component-text050">
                      {props.text30}
                    </span>
                    <div className="company-overview-component-container067">
                      <span className="company-overview-component-text051">
                        {props.text31}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="underline"></div>
                <div className="company-overview-component-container069">
                  <div className="company-overview-component-container070">
                    <div className="company-overview-component-container071">
                      <span className="company-overview-component-text052 txt-opacity">
                        {props.text32}
                      </span>
                      <span>{props.text33}</span>
                    </div>
                    <div className="company-overview-component-container072">
                      <span className="company-overview-component-text054 txt-opacity">
                        {props.text34}
                      </span>
                      <span>{props.text35}</span>
                    </div>
                    <div className="company-overview-component-container073">
                      <span className="company-overview-component-text056 txt-opacity">
                        {props.text36}
                      </span>
                      <span>{props.text37}</span>
                    </div>
                  </div>
                  <div className="company-overview-component-container074 clickable">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="company-overview-component-icon08"
                    >
                      <path d="M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"></path>
                    </svg>
                    <span className="company-overview-component-text058">
                      {props.text19}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_4 && (
          <div className="company-overview-component-settings-component">
            <div className="company-overview-component-container075 content-box">
              <div className="company-overview-component-container076 border-bottom-1px">
                <span className="company-overview-component-text059">
                  Preference
                </span>
              </div>
              <div className="company-overview-component-container077">
                <div className="company-overview-component-container078">
                  <span className="company-overview-component-text060 txt-opacity">
                    Heare you can change the email address
                  </span>
                  <div className="company-overview-component-container079">
                    <span className="company-overview-component-text061">
                      Email Address
                    </span>
                    <div className="company-overview-component-container080">
                      <input
                        type="text"
                        value="info@heydata.eu"
                        placeholder={props.textinput_placeholder}
                        className="company-overview-component-textinput input"
                      />
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-container081"></div>
                <div className="company-overview-component-container082">
                  <span className="company-overview-component-text062">
                    {props.text171}
                  </span>
                  <div className="company-overview-component-container083">
                    <div className="company-overview-component-container084">
                      <span className="company-overview-component-text063">
                        {props.text391}
                      </span>
                    </div>
                    <div className="company-overview-component-container085">
                      <span className="company-overview-component-text064">
                        {props.text401}
                      </span>
                    </div>
                    <div className="company-overview-component-container086">
                      <span className="company-overview-component-text065">
                        {props.text411}
                      </span>
                    </div>
                    <div className="company-overview-component-container087">
                      <span className="company-overview-component-text066">
                        {props.text421}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-container088"></div>
                <div className="company-overview-component-container089">
                  <span className="company-overview-component-text067">
                    {props.text181}
                  </span>
                  <div className="company-overview-component-container090">
                    <div className="company-overview-component-container091">
                      <span className="company-overview-component-text068">
                        {props.text431}
                      </span>
                    </div>
                    <div className="company-overview-component-container092">
                      <span className="company-overview-component-text069">
                        {props.text441}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-overview-component-container093 content-box">
              <div className="company-overview-component-container094 grad-bg border-bottom-1px shadow-bottom">
                <span className="company-overview-component-text070">
                  {props.text62}
                </span>
              </div>
              <div className="company-overview-component-container095">
                <div className="company-overview-component-container096">
                  <div className="company-overview-component-container097">
                    <img
                      alt={props.image_alt11}
                      src={props.image_src11}
                      className="company-overview-component-image2"
                    />
                  </div>
                  <div className="company-overview-component-container098">
                    <span className="company-overview-component-text071">
                      {props.text301}
                    </span>
                    <span className="company-overview-component-text072 txt-opacity">
                      {props.text311}
                    </span>
                  </div>
                </div>
                <div className="underline"></div>
                <div className="company-overview-component-container100">
                  <div className="company-overview-component-container101">
                    <span className="company-overview-component-text073 txt-opacity">
                      {props.text321}
                    </span>
                    <span>{props.text331}</span>
                  </div>
                  <div className="company-overview-component-container102">
                    <span className="company-overview-component-text075 txt-opacity">
                      {props.text341}
                    </span>
                    <span>{props.text351}</span>
                  </div>
                  <div className="company-overview-component-container103">
                    <span className="company-overview-component-text077 txt-opacity">
                      {props.text361}
                    </span>
                    <span>{props.text371}</span>
                  </div>
                </div>
                <div className="company-overview-component-container104 clickable">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="company-overview-component-icon10"
                  >
                    <path d="M686.286 448c80.571 23.429 191.429 102.857 191.429 362.857 0 117.714-87.429 213.143-194.857 213.143h-488c-107.429 0-194.857-95.429-194.857-213.143 0-260 110.857-339.429 191.429-362.857-28.571-45.143-45.143-98.286-45.143-155.429 0-161.143 131.429-292.571 292.571-292.571s292.571 131.429 292.571 292.571c0 57.143-16.571 110.286-45.143 155.429zM438.857 73.143c-121.143 0-219.429 98.286-219.429 219.429s98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429-98.286-219.429-219.429-219.429zM682.857 950.857c66.857 0 121.714-62.286 121.714-140 0-180-60.571-292.571-173.714-298.286-51.429 45.143-118.286 72.571-192 72.571s-140.571-27.429-192-72.571c-113.143 5.714-173.714 118.286-173.714 298.286 0 77.714 54.857 140 121.714 140h488z"></path>
                  </svg>
                  <span className="company-overview-component-text079">
                    {props.text191}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {menu_2 && (
          <div className="company-overview-component-deals-component">
            <div className="company-overview-component-container105">
              <div className="company-overview-component-container106">
                <div className="company-overview-component-dropdown">
                  <div className="company-overview-component-container107 border-right-1px">
                    <span className="company-overview-component-text080">
                      {props.text65}
                    </span>
                  </div>
                  <div className="company-overview-component-container108">
                    <div
                      data-thq="thq-dropdown"
                      className="company-overview-component-thq-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-overview-component-dropdown-toggle"
                      >
                        <span className="company-overview-component-text081">
                          {props.text68}
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-overview-component-dropdown-arrow"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-overview-component-icon12"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-overview-component-dropdown-list"
                      >
                        <li data-thq="thq-dropdown">
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-overview-component-dropdown-toggle1"
                          >
                            <span className="company-overview-component-text082">
                              Employees
                            </span>
                          </div>
                        </li>
                        <li data-thq="thq-dropdown">
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-overview-component-dropdown-toggle2"
                          >
                            <span className="company-overview-component-text083">
                              Status
                            </span>
                          </div>
                        </li>
                        <li data-thq="thq-dropdown">
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-overview-component-dropdown-toggle3"
                          >
                            <span className="company-overview-component-text084">
                              Monitoring
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-dropdown1 list-item company-overview-component-dropdown1">
                  <div className="company-overview-component-container109 border-right-1px">
                    <span className="company-overview-component-text085">
                      {props.text66}
                    </span>
                  </div>
                  <div className="company-overview-component-container110">
                    <div
                      data-thq="thq-dropdown"
                      className="company-overview-component-thq-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-overview-component-dropdown-toggle4"
                      >
                        <span className="company-overview-component-text086">
                          {props.text69}
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-overview-component-dropdown-arrow1"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-overview-component-icon14"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-overview-component-dropdown-list1"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-overview-component-dropdown2 list-item company-overview-component-dropdown2 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-overview-component-dropdown-toggle5"
                          >
                            <span className="company-overview-component-text087">
                              {props.text711}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-dropdown3 list-item company-overview-component-dropdown3">
                  <div className="company-overview-component-container111 border-right-1px">
                    <span className="company-overview-component-text088">
                      {props.text67}
                    </span>
                  </div>
                  <div className="company-overview-component-container112">
                    <div
                      data-thq="thq-dropdown"
                      className="company-overview-component-thq-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="company-overview-component-dropdown-toggle6"
                      >
                        <span className="company-overview-component-text089">
                          {props.text70}
                        </span>
                        <div
                          data-thq="thq-dropdown-arrow"
                          className="company-overview-component-dropdown-arrow2"
                        >
                          <svg
                            viewBox="0 0 1024 1024"
                            className="company-overview-component-icon16"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      </div>
                      <ul
                        data-thq="thq-dropdown-list"
                        className="company-overview-component-dropdown-list2"
                      >
                        <li
                          data-thq="thq-dropdown"
                          className="company-overview-component-dropdown4 list-item"
                        >
                          <div
                            data-thq="thq-dropdown-toggle"
                            className="company-overview-component-dropdown-toggle7"
                          >
                            <span className="company-overview-component-text090">
                              {props.text712}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="company-overview-component-container113 clickable">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-overview-component-icon18"
                >
                  <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
                </svg>
                <span>Download CSV</span>
              </div>
            </div>
            <div className="company-overview-component-container114">
              <ul className="list">
                <li className="company-overview-component-li list-item">
                  <div className="company-overview-component-container115">
                    <div className="company-overview-component-container116">
                      <div className="company-overview-component-container117">
                        <img
                          alt={props.image_alt4}
                          src={props.image_src4}
                          className="company-overview-component-image3"
                        />
                        <div className="company-overview-component-container118"></div>
                      </div>
                      <div className="company-overview-component-container119">
                        <div className="company-overview-component-container120">
                          <span className="company-overview-component-text092">
                            {props.text272}
                          </span>
                          <div className="company-overview-component-container121">
                            <div className="company-overview-component-container122">
                              <span className="company-overview-component-text093">
                                {props.text581}
                              </span>
                            </div>
                            <div className="company-overview-component-container123">
                              <span className="company-overview-component-text094">
                                {props.text591}
                              </span>
                            </div>
                            <div className="company-overview-component-container124">
                              <span className="company-overview-component-text095">
                                {props.text601}
                              </span>
                            </div>
                            <div className="company-overview-component-container125">
                              <span className="company-overview-component-text096">
                                {props.text611}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-overview-component-container126">
                          <span className="company-overview-component-text097">
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
                          <span className="company-overview-component-text100">
                            under observation
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-overview-component-container127">
                      <div className="company-overview-component-container128">
                        <div className="company-overview-component-container129">
                          <span className="company-overview-component-text101">
                            {props.text292}
                          </span>
                          <span className="company-overview-component-text102">
                            {props.text302}
                          </span>
                        </div>
                        <div className="company-overview-component-container130">
                          <span className="company-overview-component-text103">
                            Last scan
                          </span>
                          <span className="company-overview-component-text104">
                            {props.text2011}
                          </span>
                        </div>
                      </div>
                      <div className="company-overview-component-container131"></div>
                      <div className="company-overview-component-container132">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-overview-component-icon20"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="company-overview-component-li1 list-item">
                  <div className="company-overview-component-container133">
                    <div className="company-overview-component-container134">
                      <div className="company-overview-component-container135">
                        <img
                          alt={props.image_alt12}
                          src={props.image_src12}
                          className="company-overview-component-image4"
                        />
                        <div className="company-overview-component-container136"></div>
                      </div>
                      <div className="company-overview-component-container137">
                        <div className="company-overview-component-container138">
                          <span className="company-overview-component-text105">
                            Deivisson Almeida de Souza
                          </span>
                          <div className="company-overview-component-container139">
                            <div className="company-overview-component-container140">
                              <span className="company-overview-component-text106">
                                Scanned
                              </span>
                            </div>
                            <div className="company-overview-component-container141">
                              <span className="company-overview-component-text107">
                                {props.text631}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="company-overview-component-container142">
                          <span className="company-overview-component-text108">
                            HeyData GmbH
                          </span>
                          <span className="company-overview-component-text109">
                            Software Developer
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-overview-component-container143">
                      <div className="company-overview-component-container144">
                        <div className="company-overview-component-container145">
                          <span className="company-overview-component-text110">
                            {props.text332}
                          </span>
                          <span className="company-overview-component-text111">
                            {props.text342}
                          </span>
                        </div>
                        <span className="company-overview-component-text112">
                          {props.text211}
                        </span>
                      </div>
                      <div className="company-overview-component-container146"></div>
                      <div className="company-overview-component-container147">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="company-overview-component-icon22"
                        >
                          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="company-overview-component-container148">
          <ul className="list">
            <li className="company-overview-component-li2 list-item">
              <div className="company-overview-component-container149">
                <div className="company-overview-component-container150">
                  <div className="company-overview-component-container151">
                    <img
                      alt={props.image_alt2}
                      src={props.image_src2}
                      className="company-overview-component-image5"
                    />
                    <div className="company-overview-component-container152"></div>
                  </div>
                  <div className="company-overview-component-container153">
                    <div className="company-overview-component-container154">
                      <span className="company-overview-component-text113">
                        {props.text47}
                      </span>
                      <div className="company-overview-component-container155">
                        <div className="company-overview-component-container156">
                          <span className="company-overview-component-text114">
                            {props.text56}
                          </span>
                        </div>
                        <div className="company-overview-component-container157">
                          <span className="company-overview-component-text115">
                            {props.text57}
                          </span>
                        </div>
                        <div className="company-overview-component-container158">
                          <span className="company-overview-component-text116">
                            {props.text58}
                          </span>
                        </div>
                        <div className="company-overview-component-container159">
                          <span className="company-overview-component-text117">
                            {props.text59}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-overview-component-container160">
                      <span className="company-overview-component-text118">
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
                      <span className="company-overview-component-text121">
                        {props.text48}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-container161">
                  <div className="company-overview-component-container162">
                    <div className="company-overview-component-container163">
                      <span className="company-overview-component-text122">
                        {props.text49}
                      </span>
                      <span className="company-overview-component-text123">
                        {props.text50}
                      </span>
                    </div>
                    <span className="company-overview-component-text124">
                      {props.text45}
                    </span>
                  </div>
                  <div className="company-overview-component-container164"></div>
                  <div className="company-overview-component-container165">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-component-icon24"
                    >
                      <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className="company-overview-component-li3 list-item">
              <div className="company-overview-component-container166">
                <div className="company-overview-component-container167">
                  <div className="company-overview-component-container168">
                    <img
                      alt={props.image_alt3}
                      src={props.image_src3}
                      className="company-overview-component-image6"
                    />
                    <div className="company-overview-component-container169"></div>
                  </div>
                  <div className="company-overview-component-container170">
                    <div className="company-overview-component-container171">
                      <span className="company-overview-component-text125">
                        {props.text51}
                      </span>
                      <div className="company-overview-component-container172">
                        <div className="company-overview-component-container173">
                          <span className="company-overview-component-text126">
                            {props.text60}
                          </span>
                        </div>
                        <div className="company-overview-component-container174">
                          <span className="company-overview-component-text127">
                            {props.text61}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-overview-component-container175">
                      <span className="company-overview-component-text128">
                        {props.text52}
                      </span>
                      <span className="company-overview-component-text129">
                        {props.text53}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-overview-component-container176">
                  <div className="company-overview-component-container177">
                    <div className="company-overview-component-container178">
                      <span className="company-overview-component-text130">
                        {props.text54}
                      </span>
                      <span className="company-overview-component-text131">
                        {props.text55}
                      </span>
                    </div>
                    <span className="company-overview-component-text132">
                      {props.text46}
                    </span>
                  </div>
                  <div className="company-overview-component-container179"></div>
                  <div className="company-overview-component-container180">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-component-icon26"
                    >
                      <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
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

CompanyOverviewComponent.defaultProps = {
  text48: 'under observation',
  text342: 'Employees',
  text43: 'English',
  text11: '01 Feb 2023',
  text411: 'Finance',
  text28: 'Number of monitors',
  text18: 'Language',
  text191: ' Profile',
  text361: 'In the company since',
  text53: 'Software Developer',
  text20: 'HeyData GmbH',
  text61: 'Leads',
  text171: 'Preference',
  text421: 'HR',
  image_alt3: 'image',
  image_alt12: 'image',
  text10: 'Phone',
  text26: 'Under observation',
  text62: 'Responsible contact',
  text23: 'Scan now',
  text29: '13',
  text341: 'Email address',
  image_src1:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg2MjUxMjc0fDA&ixlib=rb-4.0.3&w=200',
  text181: 'Language',
  text2: 'Deals',
  text1: 'Details',
  text331: '030 3876523',
  text4: 'Settings',
  text631: 'Leads',
  text59: 'Extension',
  text65: 'Sort by',
  text37: '1 Year, 6 Month',
  text: 'Company overview',
  text24: 'Total contacts',
  text44: 'Germany',
  text39: 'Sales',
  text431: 'English',
  text301: 'Christian Reichwald',
  text22: 'Add Customer',
  text21: 'IT and services',
  text7: 'Last Scan',
  text8: 'Location',
  image_alt1: 'image',
  text272: 'HeyData GmbH',
  text14: '030 3876523',
  text110: 'Details',
  text410: 'Settings',
  text351: 'christia@heydata.eu',
  text35: 'christia@heydata.eu',
  text311: 'Co-Founder',
  text401: 'Marketing',
  image_alt: 'image',
  text211: '15 days ago',
  text68: 'Date',
  textinput_placeholder: 'placeholder',
  text49: '386',
  text67: 'Status',
  text69: 'Date',
  text15: 'Details',
  text66: 'Group',
  text12: 'Berlin, Deutschland',
  text54: '386',
  text51: 'Deivisson Almeida de Souza',
  text3: 'Logs',
  text611: 'Extension',
  text38: 'Berlin, Deutschland',
  text6: 'Responsible contact',
  text591: 'Onboarding',
  text2011: '15 days ago\n',
  image_src3:
    'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&ixlib=rb-4.0.3&w=200',
  text56: 'Scanned',
  text332: '386',
  text31: 'Co-Founder',
  text601: 'Cookie',
  text711: 'Sub-menu Item',
  text391: 'Sales',
  text16: 'Activity',
  text45: '15 days ago\n',
  text34: 'Email address',
  text17: 'Preference',
  image_src2:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text32: 'Phone number',
  text33: '030 3876523',
  image_src11:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg2MjUxMjc0fDA&ixlib=rb-4.0.3&w=200',
  text581: 'Scanned',
  text46: '15 days ago',
  text70: 'Date',
  text41: 'Finance',
  text9: 'Email',
  text302: 'Employees',
  image_alt11: 'image',
  text50: 'Employees',
  image_alt2: 'image',
  text292: '386',
  text52: 'HeyData GmbH',
  text60: 'Scanned',
  text5: 'Overview',
  text42: 'HR',
  text47: 'HeyData GmbH',
  text57: 'Onboarding',
  text58: 'Cookie',
  text40: 'Marketing',
  image_alt4: 'image',
  text441: 'Germany',
  text13: 'info@heydata.eu',
  text36: 'In the company since',
  text19: ' Profile',
  image_src4:
    'https://images.unsplash.com/photo-1569399078436-da10fbd60f12?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxMb2dvfGVufDB8fHx8MTY4NjAyOTc1Mnww&ixlib=rb-4.0.3&w=200',
  text27: '153',
  text712: 'Sub-menu Item',
  image_src12:
    'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQwfHxwcm9maWx8ZW58MHx8fHwxNjg2MTQ2OTU1fDA&ixlib=rb-4.0.3&w=200',
  text321: 'Phone number',
  text371: '1 Year, 6 Month',
  text55: 'Employees',
  text310: 'Logs',
  text30: 'Christian Reichwald',
  text210: 'Deals',
  text25: '3879',
}

CompanyOverviewComponent.propTypes = {
  text48: PropTypes.string,
  text342: PropTypes.string,
  text43: PropTypes.string,
  text11: PropTypes.string,
  text411: PropTypes.string,
  text28: PropTypes.string,
  text18: PropTypes.string,
  text191: PropTypes.string,
  text361: PropTypes.string,
  text53: PropTypes.string,
  text20: PropTypes.string,
  text61: PropTypes.string,
  text171: PropTypes.string,
  text421: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt12: PropTypes.string,
  text10: PropTypes.string,
  text26: PropTypes.string,
  text62: PropTypes.string,
  text23: PropTypes.string,
  text29: PropTypes.string,
  text341: PropTypes.string,
  image_src1: PropTypes.string,
  text181: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text331: PropTypes.string,
  text4: PropTypes.string,
  text631: PropTypes.string,
  text59: PropTypes.string,
  text65: PropTypes.string,
  text37: PropTypes.string,
  text: PropTypes.string,
  text24: PropTypes.string,
  text44: PropTypes.string,
  text39: PropTypes.string,
  text431: PropTypes.string,
  text301: PropTypes.string,
  text22: PropTypes.string,
  text21: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  image_alt1: PropTypes.string,
  text272: PropTypes.string,
  text14: PropTypes.string,
  text110: PropTypes.string,
  text410: PropTypes.string,
  text351: PropTypes.string,
  text35: PropTypes.string,
  text311: PropTypes.string,
  text401: PropTypes.string,
  image_alt: PropTypes.string,
  text211: PropTypes.string,
  text68: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text49: PropTypes.string,
  text67: PropTypes.string,
  text69: PropTypes.string,
  text15: PropTypes.string,
  text66: PropTypes.string,
  text12: PropTypes.string,
  text54: PropTypes.string,
  text51: PropTypes.string,
  text3: PropTypes.string,
  text611: PropTypes.string,
  text38: PropTypes.string,
  text6: PropTypes.string,
  text591: PropTypes.string,
  text2011: PropTypes.string,
  image_src3: PropTypes.string,
  text56: PropTypes.string,
  text332: PropTypes.string,
  text31: PropTypes.string,
  text601: PropTypes.string,
  text711: PropTypes.string,
  text391: PropTypes.string,
  text16: PropTypes.string,
  text45: PropTypes.string,
  text34: PropTypes.string,
  text17: PropTypes.string,
  image_src2: PropTypes.string,
  text32: PropTypes.string,
  text33: PropTypes.string,
  image_src11: PropTypes.string,
  text581: PropTypes.string,
  text46: PropTypes.string,
  text70: PropTypes.string,
  text41: PropTypes.string,
  text9: PropTypes.string,
  text302: PropTypes.string,
  image_alt11: PropTypes.string,
  text50: PropTypes.string,
  image_alt2: PropTypes.string,
  text292: PropTypes.string,
  text52: PropTypes.string,
  text60: PropTypes.string,
  text5: PropTypes.string,
  text42: PropTypes.string,
  text47: PropTypes.string,
  text57: PropTypes.string,
  text58: PropTypes.string,
  text40: PropTypes.string,
  image_alt4: PropTypes.string,
  text441: PropTypes.string,
  text13: PropTypes.string,
  text36: PropTypes.string,
  text19: PropTypes.string,
  image_src4: PropTypes.string,
  text27: PropTypes.string,
  text712: PropTypes.string,
  image_src12: PropTypes.string,
  text321: PropTypes.string,
  text371: PropTypes.string,
  text55: PropTypes.string,
  text310: PropTypes.string,
  text30: PropTypes.string,
  text210: PropTypes.string,
  text25: PropTypes.string,
}

export default CompanyOverviewComponent
