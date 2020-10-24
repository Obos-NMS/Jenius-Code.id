export function deleteContact (id) {
  return (dispatch, getState) => {

    console.log();
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      // dispatch({
      //   type: "FETCH_CONTACTS",
      //   payload: updatedContact
      // })
    })
    

  }
}