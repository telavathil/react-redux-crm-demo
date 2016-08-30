import React from 'react'
import { connect } from 'react-redux'

import NewLead from './NewLead'
import { addLead, deleteTodo } from '../actions'

const Leads = ({leads, dispatch}) => (
  <div>
    <h1>Leads</h1>
    <NewLead onSubmit={e => {
      e.preventDefault();
      //store form data in temp variables
      var name = e.target.children[0].value
      var phone = e.target.children[1].value

      //clear form
      e.target.children[0].value = ''
      e.target.children[1].value = ''
      dispatch(addLead([name,phone]))
    }}/>
    {leads.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      dispatch(deleteTodo(index))
    }}>X</button></p>)}
  </div>
)

function mapStateToProps(leads) {
  return {
    leads
  }
}

export default connect(mapStateToProps)(Leads)
