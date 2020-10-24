const arr = [
  {
    "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
    "firstName": "Bilbo",
    "lastName": "Baggins",
    "age": 111,
    "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
  },
  {
    "firstName": "Bilbo",
    "lastName": "Baggins",
    "age": 111,
    "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    "id": "48ee4f20-1462-11eb-bbd5-850ff6d8f61f"
  },
  {
    "firstName": "Legolas",
    "lastName": "Elf",
    "age": 199,
    "photo": "https://i.pinimg.com/564x/07/31/37/0731379032530492cec0984f06bf1318.jpg",
    "id": "42922380-1468-11eb-bbd5-850ff6d8f61f"
  },
  {
    "firstName": "Ronaldo",
    "lastName": "Goat",
    "age": 34,
    "photo": "https://i.pinimg.com/originals/78/e9/7c/78e97cdb7c856aa3d9d26bf3d7fa0709.jpg",
    "id": "ec0c3010-146b-11eb-bbd5-850ff6d8f61f"
  }
] 

arr.map(el => {
  console.log(el.firstName);
})