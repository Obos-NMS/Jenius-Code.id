export function fetchOneContact (id) {
  return (dispatch, getState) => {

    // console.log(id);
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      
      dispatch({
        type: "FETCH_CONTACT",
        payload: data.data
      })
    })
  }
}
