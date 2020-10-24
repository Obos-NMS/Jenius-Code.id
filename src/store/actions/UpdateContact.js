export function updateContact (id, newContact) {
  return (dispatch, getState) => {

    console.log(id);
    console.log(newContact, 'NEW CONT');
    // console.log(data, 'DATA<<<');
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "UPDATE_CONTACT",
        payload: data.data
      })
    })
  }
}
