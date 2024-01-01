import React from 'react'
import {Link} from 'react-router-dom'

export default function Available() {
  return (
    <div>
        <h2>Available Time Slots</h2>
        <label>Time</label>
        <Link to="newslot">
        <button>Book</button>
        </Link>


    </div>
    
  )
}
