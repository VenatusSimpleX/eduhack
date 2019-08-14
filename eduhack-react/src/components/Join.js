import React, { useGlobal } from 'reactn'
import Participant from './Participant'

function Join() {
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
                placeholder="Group Name" onChange={handleOnChangeTeam}/>
            </div>
            <div>
              <label htmlFor="payment_method">Payment method</label>
              <select name="payment_method" onChange={handleOnChangePaymentMethod}>
                <option defaultValue>Select</option>
                <option value="onlinePay">Online payment</option>
                <option value="cash">Cash</option>
              </select>
            </div>
          </div>
          {participantList}
        </form>

        <div id="plusParticipant" onClick={handleOnClickPlusParticipant}/>
        <button id="submit-button">Submit</button>
        </div>
    </div>
  )
}

export default Join