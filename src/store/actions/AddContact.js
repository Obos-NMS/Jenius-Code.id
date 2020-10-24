export function addContact (data) {
  return (dispatch, getState) => {
    let pokemons = getState().contactReducer.pokemons
    fetch(`https://simple-contact-crud.herokuapp.com/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({
        type: "ADD_CONTACT",
        payload: data
      })
    })
    .catch((err) => console.log(err))
  }
}