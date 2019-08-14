import React from 'react'
// import countdown from 'countdown'

function Header() {
  // Uncomment when date is confirmed
  // const [days, setDays] = useState()
  // const [hours, setHours] = useState()
  // const [minutes, setMinutes] = useState()
  // const [seconds, setSeconds] = useState()

  // function update_countdown() {
  //   // set date here at the new Date()
  //   let count = countdown(null, new Date("09/07/2019"), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

  //   setDays(count["days"])
  //   setHours(count["hours"])
  //   setMinutes(count["minutes"])
  //   setSeconds(count["seconds"])
  //   document.getElementById("seconds").classList.add("jumpy")
  // }
  // // setInterval(update_countdown, 1000);

  return (
    <div id="header">
      <img id="logo" src="assets/logo.svg" alt="STC Logo" />
      <div id="countdown">
        <span class="static"></span>
        <span class="static">Coming</span>
        <span class="static">Soon</span>
        <span></span>
        {/* Uncomment when date is confirmed */}
        {/* <span id="days">{days}</span>
        <span id="hours">{hours}</span>
        <span id="minutes">{minutes}</span>
        <span><p id="seconds">{seconds}</p></span>
        <span className="static">Days</span>
        <span className="static">Hours</span>
        <span className="static">Minutes</span>
        <span className="static">Seconds</span> */}
      </div>
      <div className="highlight-button">
        <a href="#join">Register</a>
      </div>
    </div>
  )
}

export default Header