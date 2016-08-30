export function addLead(lead){
  return {
    type: 'addLead',
    lead
  }
}

export function deletelead(index){
  return {
    type: 'deletelead',
    index
  }
}
