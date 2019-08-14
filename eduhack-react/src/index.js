import React, { setGlobal } from 'reactn'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as firebase from 'firebase/app'

require('dotenv').config({path: '../.env'})

setGlobal({
  team: "",
  paymentMethod: "",
  members: [
    {
      fullName: "",
      ic: "",
      gender: "",
      mobile: "",
      email: "",
      university: "",
      programme: "",
      tShirtSize: "",
      vegetarian: false,
      emergency: {
        name: "",
        mobile: ""
      }
    },
    {
      fullName: "",
      ic: "",
      gender: "",
      mobile: "",
      email: "",
      university: "",
      programme: "",
      tShirtSize: "",
      vegetarian: false,
      emergency: {
        name: "",
        mobile: ""
      }
    },
    {
      fullName: "",
      ic: "",
      gender: "",
      mobile: "",
      email: "",
      university: "",
      programme: "",
      tShirtSize: "",
      vegetarian: false,
      emergency: {
        name: "",
        mobile: ""
      }
    }
  ]
})

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appID: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));
