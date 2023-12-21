import React, { useState } from "react"
import AppointmentForm from "../Howto/AppointmentForm"

const ContactUsBtn = ({ className }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setShowForm(true)}
      >
        <span className="">Contact Us</span>
      </button>
      {showForm && <AppointmentForm setShowForm={setShowForm} />}
    </>
  )
}

export default ContactUsBtn
