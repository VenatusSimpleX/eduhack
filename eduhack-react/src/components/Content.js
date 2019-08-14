import React from 'react'

function Content() {
  return (
    <div id="content">
      <div className="content-wrapper">
        <ul>
          <li>
            <h1 style={{
              textAlign: "center",
              marginBottom: 40
            }}>
              Event Details
            </h1>
          </li>
          <li style={{textAlign: "center"}}>
            <u>Prizes</u>
          </li>
          <li style={{textAlign: "center"}}> <span>First Prize</span>:
            RM 1000</li>
          <li style={{textAlign: "center"}}>
            <span>First Runner-Up</span> : RM600
          </li>
          <li style={{textAlign: "center"}}>
            <span>Second Runner-Up</span> : RM400
          </li>
          <br />
          <li>
            <span>Theme</span> : Enhancing the Quality of
            Education
            through
            Technology and Entrepreneurship
          </li>
          <li>
            <span>Date</span> : 7th-8th September 2019 (Saturday
            to
            Sunday)
          </li>
          <li>
            <span>Venue</span> : Sunway iLabs, Menara Sunway
          </li>
          <li>
            <span>Participating Universities</span> : All
            Universities
          </li>
          <li>
            <span>Eligibility</span> : Participants must be
            active undergraduate students
          </li>
          <li>
            <span>Team Composition</span> : 3-5 individuals per
            group
          </li>
          <li>
            <span>Registration Fees</span> : RM100 per team
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Content