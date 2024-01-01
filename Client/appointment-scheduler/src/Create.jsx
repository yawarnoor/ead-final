import React from 'react'

export default function Create() {
  return (
    <>
    <h2>Create Time Slot</h2>
    <form>
      <label>Start Time</label> <br/>
      <input name='startTime' /><br/>
      <label>End Time</label> <br/>
      <input name='endTime' /><br/>
      <button>Create Slot</button>
    </form>
    </>
    
  )
}
