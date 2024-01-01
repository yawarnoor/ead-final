import React from 'react'

export default function NewSlot() {
  return (
    <div>
        <h2>Book Time Slot</h2>
        <form>
      <label>Name</label> <br/>
      <input name='name' /><br/>
      <label>Email</label> <br/>
      <input name='email' /><br/>
      <button>Book Appointment</button>
    </form>
    </div>
  )
}
