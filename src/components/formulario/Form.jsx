import React, { useState } from "react"

const initial_value = { id: 1, name: "", idade: 0 }

const Form = () => {
  const [values, setValues] = useState(initial_value)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const showValues = () => {
    console.log(values)
  }

  return (
    <form action="" className="container my-5">
      <label htmlFor="name"></label>
      <input id="name" name="name" type="text" onChange={onChange} />

      <label htmlFor="idade"></label>
      <input id="idade" name="idade" type="number" onChange={onChange} />

      <button type="button" className="btn btn-md btn-danger" onClick={showValues}>
        Visualizar
      </button>
    </form>
  )
}

export default Form