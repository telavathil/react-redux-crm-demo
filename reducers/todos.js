import Immutable from 'immutable'

export default (state = Immutable.List([]), action) => {
  switch(action.type) {
    case 'addLead':
      return state.unshift(action.lead)
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index)
    default:
      return state
  }
}
