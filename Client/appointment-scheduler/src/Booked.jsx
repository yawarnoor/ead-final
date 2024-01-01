import React from 'react'
import {Link} from 'react-router-dom'

export default function Booked({data}) {
  return (

    <div>
    <h2>Booked Appointments</h2>
    
    <h3>name</h3>
    <h4>Slot: time</h4>
    <h4>email</h4> <br/><br/>

    <Link to="/create">
    <button>
      Create Slot
    </button>
    </Link>
    <Link to="/available">
    <button>
      Available Slot
    </button></Link>
    </div>
  )
}
