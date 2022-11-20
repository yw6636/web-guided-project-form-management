import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({ petName: "", petType: ""})

  const change = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value})
  }
  
  const submit = (event) => {
    event.preventDefault();
    setPets(pets.concat({ petName: formValues.petName, petType: formValues.petType}))
    setFormValues({ petName:"", petType:""})
  }
// pets.concat --> Creates a new array entirely. It does not mutate the original array directly


  return (
  <div className="container">
    <h1>Simple Form App</h1>
    { pets.map((pet,index) => {
      return (
        <div key={index}>
          {pet.petName} is a {pet.petType}
        </div>
      )
    })}
    <form onSubmit={submit}>
      <input
      name="petName"
      type="text"
      value={formValues.petName}
      onChange={change} 
      />
      <input
      name="petType"
      type="text"
      value={formValues.petType}
      onChange={change} 
      />
      <input type="submit" value="Create a pet!" />
    </form>
  </div>
)}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
