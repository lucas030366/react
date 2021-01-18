import React, { useState, useEffect } from "react"

import axios from "axios"

export default _ => {
  const [repositories, setRepositories] = useState([])
  const [data, setData] = useState({nome: ""})

  useEffect(async () => {
    const url = "https://api.github.com/users/lucas030366/repos"

    try {
      const response = await axios.get(url)

      return setRepositories(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }, []) //[] vazio = chama uma vez, ao montar

  useEffect(async () => {
    const filter = repositories.filter(el => el.favorite)

    document.title = `${filter.length} favoritos`

  }, [repositories]) //[] não vazio = chama quando atualizar

  const handleFavorites = id => {
    const copy = repositories.map(el => el.id == id ? { ...el, favorite: !el.favorite } : el)

    return setRepositories(copy)
  }

  const updateName = (e) => {    
    const nome = {nome: e.target.value} 

    setData(nome)
  }

  return (
    <div className="container">
      <ul className="list-group mt-5">
        {
          repositories.map(el => {
            return (
              <li className="list-group-item" key={el.id}>
                {el.name}
                {el.favorite && <h4 className="">(favorito)</h4>}
                <button className="btn btn-md btn-success float-right m-4" onClick={() => handleFavorites(el.id)}>
                  Adicionar ao repositório
                </button>
              </li>

            )
          })
        }
      </ul>
      
      <h3>{data.nome}</h3>
      <input type="text" value={data.nome } onChange={e => updateName(e)}/>

    </div>
  )
}