export function fetchContacts () {
  return (dispatch, getState) => {

    fetch(`https://simple-contact-crud.herokuapp.com/contact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: "FETCH_CONTACTS",
        payload: data
      })
    })
  }
}
