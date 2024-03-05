import React from 'react'
import './Content.css'

import contentImage from '../assets/lock_pass.png'

function Content() {
  return (
    <>
      <div className="content">
        <div className="content-image">
          <img src={contentImage} alt="lock_pass_icon" />
        </div>
        <div className="content-text">
          <div className="text-header">
            <b>
              Think before
              <br />
              you <span className="click">click</span>.
            </b>
          </div>
          <div className="text-content">
            Started with a few people having cyber safety in mind, the chapter
            now boasts a big gathering of members and associates alike. Join us
            on our mission to make cyberspace a safer place!
          </div>
          <div className="read-more-container">
            <a href="/" className="text-read-more-button">
              <b>Read More</b>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
