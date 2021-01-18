import React, { Component } from "react";

import client from "../../resources/crud"


const data = {
  user: { name: "", email: "" },
  list: []
}

export default class Crud extends Component {

  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.clear = this.clear.bind(this)
    this.update = this.update.bind(this)
    this.atualizar = this.atualizar.bind(this)
    this.delete = this.delete.bind(this)
    this.getClients = this.getClients.bind(this)
  }

  state = { ...data }

  componentDidMount() {
    this.getClients()
  }

  async save() {
    const { user } = this.state

    try {
      const response = await client.create(user)
      const users_list = [...this.state.list]

      users_list.push(response)
      this.setState({ list: users_list })
      this.clear()
    } catch (error) {
      console.log(error.message)
    }
  }

  update(event) {
    const user = { ...this.state.user }
    const { name } = event?.target

    name == "nome" ? user.name = event.target.value : user.email = event.target.value

    this.setState({ user })
  }

  async delete(id) {
    const { list } = this.state

    const new_list = list.filter(el => el.id != id)

    try {
      await client.remove(id)

      this.setState({ list: new_list })
    } catch (error) {
      console.log(error.message)
    }
  }

  async getClients() {
    try {
      const response = await client.read()
      this.setState({ list: response })
    } catch (error) {
      console.log(error.message)
    }
  }

  atualizar(id) {
    const { list } = this.state

    const user = list.filter(el => el.id == id)
    this.setState({ user: user[0] })

  }

  clear() {
    this.setState({ user: data.user })
  }

  render() {
    return (
      <div className="container">
        <div className="p-3">
          {this.renderForm()}

          {this.renderTable()}
        </div>
      </div>
    )
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>email</th>
            <th>ações</th>
          </tr>
        </thead>

        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-danger" onClick={_ => this.delete(user.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-warning" onClick={_ => this.atualizar(user.id)}>
              <i className="fa fa-pencil"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">

          <div className="col-md">
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" className="form-control text-capitalize" value={this.state.user.name} onChange={this.update} />
          </div>

          <div className="col-md">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control" value={this.state.user.email} onChange={this.update} />
          </div>
        </div>

        <div className="text-right">
          <div className="btn-group mt-2">
            <button className="btn btn-md btn-primary font-weight-bold mx-2" onClick={this.save}>
              Salvar
            </button>

            <button className="btn btn-md btn-secondary font-weight-bold" onClick={this.clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }
}