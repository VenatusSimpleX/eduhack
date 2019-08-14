import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

ReactDOM.render(<App />, document.getElementById('root'));
