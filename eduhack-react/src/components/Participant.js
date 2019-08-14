import React, { useGlobal } from 'reactn'

function Participant(props) {
  const index = props.memberNo - 1
  const [members, setMembers] = useGlobal("members")
  // const [member, setMember] = [...members][index]
  console.log(members)

  function handleOnChange(event) {
    let newMembers = [...members]
    
    switch(event.target.name) {
      case 'par_name':
        newMembers[index].fullName = event.target.value
        break
      case 'par_ic':
        newMembers[index].ic = event.target.value
        break
      case 'par_gender':
        newMembers[index].gender = event.target.value
        break
      case 'par_mobilephone':
        newMembers[index].mobile = event.target.value
        break
      case 'par_email':
        newMembers[index].email = event.target.value
        break
      case 'par_university':
        newMembers[index].university = event.target.value
        break
      case 'par_programme':
        newMembers[index].programme = event.target.value
        break
      case 'par_tshirt':
        newMembers[index].tShirtSize = event.target.value
        break
      case 'par_vege':
        newMembers[index].vegetarian = event.target.checked
        break
      case 'par_emer_contact':
        newMembers[index].emergency.mobile = event.target.value
        break
      case 'par_emer_contact_name':
        newMembers[index].emergency.name = event.target.value
        break
    }

    setMembers(newMembers)
  }

  return (
    // Slight hack to remove stray background color for extra div
    <div style={{background: "none"}}>
      <div className="accordion" onClick={props.onClick}>Participant {props.memberNo}</div>
      <div className="panel">
        {/* <!-- person form --> */}
        {/* <!-- look at only this div uwu, the next few are just copypasted --> */}
        <div>
          <label htmlFor="par_name">Full Name</label>
          <input type="text" name="par_name" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_ic">IC/Passport Number</label>
          <input type="text" name="par_ic" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_gender">Gender</label>
          <select name="par_gender" onChange={handleOnChange}>
            <option defaultValue>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="pref_not">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label htmlFor="par_mobile">Mobile phone</label>
          <input type="text" name="par_mobilephone" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_email">Email</label>
          <input type="email" name="par_email" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_university">University</label>
          <input type="text" name="par_university" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_programme">Programme</label>
          <input type="text" name="par_programme" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_tshirt">T-shirt size</label>
          <select name="par_tshirt" onChange={handleOnChange}>
            <option defaultValue>Select</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div>
          <label htmlFor="par_vege">Vegetarian</label>
          <input type="checkbox" name="par_vege"
            id="vege"
            onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_emer_contact">Emergency contact
            number</label>
          <input type="text" name="par_emer_contact" onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="par_emer_contact_name">Emergency
            contact
            name</label>
          <input type="text"
            name="par_emer_contact_name" onChange={handleOnChange} />
        </div>
      </div>
    </div>
  )
}

export default Participant