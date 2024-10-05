import React from 'react'
import './Journey.css'

const Journey = () => {
  return (
    <>
      <div className="hy">
        <div className="ever">
          <h1>
            <span className="grad">Our</span> <br></br>Journey
          </h1>
          <p>
            The Cybersearity Student Community (CYSCOM) was formed in 2022 and
            ever Since it has had one aim only. spreading awareness about cyber
            security and malware as welt as ransomware threats in society and
            circles of students and teaching them how to deploy counter measures
            through various events and undertakings.
          </p>
        </div>
        <div class="timeline">
          <div class="outer">
            <div class="card">
              <div class="info">
                <h3 class="title">January 10th, 2022</h3>
                <p>Cyscom is proposed for approval</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">January 15th, 2022</h3>
                <p>
                  The CYSCOM student community (CYSCOM) is officially formed
                </p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">February 1st, 2022</h3>
                <p>CYSCOM kicks into action!</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">April 19th-20th, 2022</h3>
                <p>
                  CYSCOM VIT hosts Cyber Defender, a 2-day technical and fun
                  event for all Cyber enthusiasts with a workshop and CTF event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Journey
