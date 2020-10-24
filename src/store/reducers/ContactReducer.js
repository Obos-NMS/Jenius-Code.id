const initState = {
  contacts: [],
  contact: [],
  updateContact: []
  
}

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS": 
      return {
        ...state,
        contacts: action.payload
      }
    case "FETCH_CONTACT":
      // console.log(action.payload);
      return {
        ...state,
        contact: action.payload
      }
    case "UPDATE_CONTACT":
      // console.log(action.payload);
      return {
        ...state,
        updateContact: action.payload
      }
    case "ADD_CONTACT ":
      return {
        ...state,
        addedContact: action.payload
      }
    default:
      return state
  }
}

export default contactReducer