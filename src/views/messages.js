import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Menu from '../components/menu'
import TopBar from '../components/top-bar'
import './messages.css'

const Messages = (props) => {
  return (
    <div className="messages-container">
      <Helmet>
        <title>Messages - Up2Data-Admin</title>
        <meta property="og:title" content="Messages - Up2Data-Admin" />
      </Helmet>
      <div className="messages-container01">
        <Menu></Menu>
        <div className="messages-content-component">
          <div className="messages-container02 shadow-bottom">
            <TopBar></TopBar>
          </div>
          <div className="messages-container03">
            <div className="messages-container04 border-right-1px">
              <div className="messages-container05">
                <span>Daniel@heydata.eu</span>
              </div>
              <div className="messages-container06">
                <div className="messages-container07">
                  <div className="messages-container08 menu-btn-disable">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <span className="messages-text01">Inbox</span>
                  </div>
                  <div className="messages-container09 menu-btn-disable">
                    <svg
                      viewBox="0 0 1025.1702857142857 1024"
                      className="btn-icon"
                    >
                      <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-258.857-105.714-138.286 168.571c-6.857 8.571-17.143 13.143-28 13.143-4 0-8.571-0.571-12.571-2.286-14.286-5.143-24-18.857-24-34.286v-199.429l493.714-605.143-610.857 528.571-225.714-92.571c-13.143-5.143-21.714-17.143-22.857-31.429-0.571-13.714 6.286-26.857 18.286-33.714l950.857-548.571c5.714-3.429 12-5.143 18.286-5.143 7.429 0 14.857 2.286 20.571 6.286z"></path>
                    </svg>
                    <span className="messages-text02">Send</span>
                  </div>
                  <div className="messages-container10 menu-btn-disable">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M784.341 184.235c-15.957-6.613-34.304-2.944-46.507 9.259-53.931 53.888-141.696 53.931-195.669 0-87.253-87.168-229.12-87.168-316.331 0-8.021 7.979-12.501 18.859-12.501 30.165v554.667c0 23.552 19.072 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-194.261c54.229-42.539 133.163-38.869 183.168 11.093 87.253 87.168 229.163 87.168 316.331 0 8.021-8.021 12.501-18.859 12.501-30.165v-341.333c0-17.28-10.411-32.811-26.325-39.424z"></path>
                    </svg>
                    <span className="messages-text03">Flagged</span>
                  </div>
                  <div className="messages-container11 menu-btn-disable">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                    </svg>
                    <span className="messages-text04">Starred</span>
                  </div>
                  <div className="messages-container12 menu-btn-disable">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
                    </svg>
                    <span className="messages-text05">Drafts</span>
                  </div>
                  <div className="messages-container13 menu-btn-disable">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="btn-icon"
                    >
                      <path d="M292.571 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM438.857 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM585.143 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                    <span className="messages-text06">Trash</span>
                  </div>
                </div>
              </div>
              <div className="messages-container14">
                <Link to="/messages" className="messages-navlink">
                  <div className="messages-container15 btn-lila">
                    <svg viewBox="0 0 1024 1024" className="btn-icon">
                      <path d="M938.667 640v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-597.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 10.923 4.181 21.845 12.501 30.165 16.683 16.683 43.691 16.683 60.331 0l158.165-158.165h494.336c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM853.333 640c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.443 4.779-30.165 12.501l-97.835 97.835v-579.669c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"></path>
                    </svg>
                    <span>Compose</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="messages-container16 border-right-1px">
              <div className="messages-container17 border-bottom-1px">
                <svg viewBox="0 0 1024 1024" className="messages-icon14">
                  <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                </svg>
                <div className="messages-container18">
                  <svg viewBox="0 0 1024 1024" className="messages-icon16">
                    <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                  </svg>
                  <span>1 - 10</span>
                  <svg viewBox="0 0 1024 1024" className="messages-icon18">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
                <svg viewBox="0 0 1024 1024" className="messages-icon20">
                  <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                  <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                </svg>
              </div>
              <div className="messages-container19 border-bottom-1px">
                <div className="messages-container20">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTY4NjUyMDI0MHww&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="messages-image"
                  />
                </div>
                <div className="messages-container21">
                  <div className="messages-container22">
                    <div className="messages-container23">
                      <div className="messages-container24">
                        <svg viewBox="0 0 1024 1024" className="btn-icon">
                          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                        </svg>
                        <span className="messages-text09">Tom Montenegro</span>
                        <div className="messages-container25"></div>
                      </div>
                      <span className="messages-text10">10:31</span>
                    </div>
                    <div className="messages-container26">
                      <span className="messages-text11">Great tool!</span>
                      <span className="messages-text12">3&gt;&gt;</span>
                    </div>
                  </div>
                  <div className="messages-container27">
                    <span className="messages-text13">
                      <span>Here is the bright example</span>
                      <br></br>
                      <span>with extremely good colour</span>
                      <br></br>
                      <span>scheme choice.</span>
                    </span>
                    <div className="messages-container28">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="messages-icon25 btn-icon"
                      >
                        <path d="M784.341 184.235c-15.957-6.613-34.304-2.944-46.507 9.259-53.931 53.888-141.696 53.931-195.669 0-87.253-87.168-229.12-87.168-316.331 0-8.021 7.979-12.501 18.859-12.501 30.165v554.667c0 23.552 19.072 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-194.261c54.229-42.539 133.163-38.869 183.168 11.093 87.253 87.168 229.163 87.168 316.331 0 8.021-8.021 12.501-18.859 12.501-30.165v-341.333c0-17.28-10.411-32.811-26.325-39.424z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="messages-icon27 btn-icon"
                      >
                        <path d="M704 256h64v490q0 98-68 167t-166 69-167-69-69-167v-532q0-70 51-121t121-51 120 51 50 121v448q0 44-31 75t-75 31-76-31-32-75v-406h64v406q0 18 13 30t31 12 30-12 12-30v-448q0-44-31-76t-75-32-76 32-32 76v532q0 70 51 121t121 51 120-51 50-121v-490z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-container29 border-bottom-1px">
                <div className="messages-container30">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fHVzZXJ8ZW58MHx8fHwxNjg2NTIwMjQwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="messages-image1"
                  />
                </div>
                <div className="messages-container31">
                  <div className="messages-container32">
                    <div className="messages-container33">
                      <div className="messages-container34">
                        <span className="messages-text19">Mellisa Rahul</span>
                      </div>
                      <span className="messages-text20">10:31</span>
                    </div>
                    <div className="messages-container35">
                      <span className="messages-text21">Great tool!</span>
                      <span className="messages-text22">3&gt;&gt;</span>
                    </div>
                  </div>
                  <div className="messages-container36">
                    <span className="messages-text23">
                      <span>Here is the bright example</span>
                      <br></br>
                      <span>with extremely good colour</span>
                      <br></br>
                      <span>scheme choice.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="messages-container37 border-right-1px">
              <div className="messages-container38 border-bottom-1px">
                <div className="messages-container39">
                  <div className="messages-container40">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTY4NjUyMDI0MHww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="messages-image2"
                    />
                  </div>
                  <div className="messages-container41">
                    <span className="messages-text29">Tom Montenegro</span>
                    <span className="messages-text30">
                      montenegro@flaschenpost.eu
                    </span>
                  </div>
                </div>
                <div className="messages-container42">
                  <span className="messages-text31">12.02.2023</span>
                  <span className="messages-text32">-</span>
                  <span className="messages-text33">10:31</span>
                </div>
              </div>
              <div className="messages-container43">
                <div className="messages-container44">
                  <span className="messages-text34">Great Tool!</span>
                  <div className="messages-container45">
                    <svg viewBox="0 0 384 1024" className="messages-icon29">
                      <path d="M358.286 310.857c0 4.571-2.286 9.714-5.714 13.143l-224.571 224.571 224.571 224.571c3.429 3.429 5.714 8.571 5.714 13.143s-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8 5.714 13.143z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="messages-icon31">
                      <path d="M499.499 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM798.165 695.168l-183.168-183.168 183.168-183.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="messages-icon33">
                      <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                    </svg>
                    <svg viewBox="0 0 1024 1024" className="messages-icon35">
                      <path d="M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667zM384 469.333v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 469.333v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <div className="messages-container46">
                  <span className="messages-text35">Hello Dominic,</span>
                  <span className="messages-text36">
                    <span>
                      At your request, I evaluated several recruiting tools to
                      determine which one we should
                    </span>
                    <br></br>
                    <span>
                      purchase for the office. I believe that the Recrutify,
                      when configured for office use, will best
                    </span>
                    <br></br>
                    <span>serve our needs at the price we budgeted.</span>
                    <br></br>
                    <br></br>
                    <span>
                      I have attached a detailed comparison to other systems, as
                      well as a list of criteria I used to
                    </span>
                    <br></br>
                    <span>arrive at my recommendation.</span>
                    <br></br>
                    <br></br>
                    <span>Kind Regards,</span>
                    <br></br>
                    <span>Tom Manitur</span>
                  </span>
                </div>
                <div className="messages-container47">
                  <div className="messages-container48">
                    <div className="messages-container49">
                      <span className="messages-text52">.pdf</span>
                    </div>
                    <div className="messages-container50">
                      <span>Contract.pdf</span>
                      <span className="messages-text54">1,48MB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-container51 border-top-1px">
                <input
                  type="text"
                  placeholder="Quick Search"
                  className="messages-textinput input"
                />
                <span>
                  <span className="messages-text56">Start typing you</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="messages-text58">response</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="messages-text60">or</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="messages-text62">forward</span>
                  <span> </span>
                  <span className="messages-text64">message...</span>
                  <span> </span>
                </span>
                <div className="messages-container52">
                  <svg viewBox="0 0 1024 1024" className="messages-icon37">
                    <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="messages-container53 border-top-1px"></div>
        </div>
      </div>
    </div>
  )
}

export default Messages
