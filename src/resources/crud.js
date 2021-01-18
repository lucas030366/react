import api from "./axios"

const create = async (data) => {
  const url = "/users"

  try {
    const response = await api.post(url, data)    
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

const read = async () => {
  const url = "/users"

  try {
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

const update = async (id) => {
  const url = `/users/${id}`

  try {
    const response = await api.update(url)
    return response.data
  } catch (error) {
    console.log(error.message)
  }

}

const remove = async (id) => {
  const url = `/users/${id}`

  try {
    const response = await api.delete(url)
    return response.data
  } catch (error) {
    console.log(error.message)
  }

}

export default {
  create,
  read,
  update,
  remove
}