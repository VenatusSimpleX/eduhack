import React, { useGlobal } from 'reactn'
import Participant from './Participant'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

function Join() {
  const [data, setData] = useGlobal()

  const [team, setTeam] = useGlobal("team")
  function handleOnChangeTeam(event) {
    setTeam(event.target.value)
  }

  const [paymentMethod, setPaymentMethod] = useGlobal("paymentMethod")
  function handleOnChangePaymentMethod(event) {
    setPaymentMethod(event.target.value)
  }

  const [members, setMembers] = useGlobal("members")

  function toggleAccordian(event) {
    event.target.classList.toggle("active")

    let panel = event.target.nextElementSibling

    if (panel.style.display === "grid") {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  function handleOnClickPlusParticipant(event) {
    setMembers([...members, {
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
    }])

    if(members.length >= 4) {
      event.target.style.display = "none"
    }
  }

  function validateData() {
    if(team.length === 0
      || paymentMethod === 'select')
      return false

    for(let member of members) {
      if(member.fullName.length === 0
        || member.ic.length === 0
        || member.gender === 'select'
        || member.gender.length === 0
        || member.mobile.length === 0
        || member.email.length === 0
        || member.university.length === 0
        || member.programme.length === 0
        || member.tShirtSize === 'select'
        || member.tShirtSize.length === 0
        || member.emergency.name.length === 0
        || member.emergency.mobile.length === 0)
        return false
    }

    return true
  }

  function handleOnSubmit() {
    // Check if any fields are empty
    if(validateData()) {
      alert('All fields are required')
      return
    }

    const db = firebase.firestore()
    db.collection('eduhack_signup')
      .add(data)
      .then(() => {
        setData({
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
        alert('Congratulations, you have successfully registered!')
        window.location.reload()
      })
  }

  let participantList = []
  for(let i = 1; i <= members.length; i++) {
    participantList.push(<Participant key={i} onClick={toggleAccordian} memberNo={i}/>)
  }

  return (
    <div id="join">
      <div id="form-accordian">
        <h1>Join Now</h1>
        {/* form here, action to payment gateway */}
        <form action="#" id="form">
          {/* <!-- group form --> */}
          {/* <!-- look at here uwu --> */}
          <div className="accordion" onClick={toggleAccordian}>Group Details</div>
          <div className="panel">
            <div>
              <label htmlFor="groupName">Group Name</label>
              <input type="text" name="groupName"
                placeholder="Group Name" onChange={handleOnChangeTeam} value={team} />
            </div>
            <div>
              <label htmlFor="payment_method">Payment method</label>
              <select name="payment_method" onChange={handleOnChangePaymentMethod} value={paymentMethod}>
                <option value="select" defaultValue>Select</option>
                <option value="onlinePay">Online payment</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>
          {participantList}
        </form>

        <div id="plusParticipant" onClick={handleOnClickPlusParticipant}/>
        <button id="submit-button" onClick={handleOnSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Join