import React from 'react'
import { connect } from 'react-redux'

const NewLead = ({onSubmit}) => (
  <div>
    <h3>New Lead</h3>
    <form className='leadForm' onSubmit={onSubmit}>
      <input type="text" placeholder='Lead Name' />
      <input type="text" placeholder='Lead Phone Number' />
      <input type="Submit" />
    </form>
  </div>
)

export default NewLead
