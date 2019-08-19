import React from 'react'
import App from './App'
import HttpsRedirect from 'react-https-redirect'

function HttpsApp() {
  return (
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  )
}

export default HttpsApp