import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <div id="footer-body">
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <h1>Contact</h1>
            <h3>Join our conversation here. If you have any
              question
              from the
              event, you can ask it here as well.</h3>
          </div>
        </div>
        <div>
          <a
            href="https://sunwaytechclub.slack.com/messages/GDQPSM737/convo/GDQPSM737-1545030725.001400/">
            <img src="assets/slack.png" alt=""
              className="footer-image" />
          </a>
          <a
            href="https://t.me/joinchat/IDjwGkH7Xu5PAwDu9bbzgw">
            <img src="assets/telegram.png" alt=""
              className="footer-image" />
          </a>
        </div>
      </div>
      <div id="footer-foot">
        <p>© 2019 Sunway Tech Club
          All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer