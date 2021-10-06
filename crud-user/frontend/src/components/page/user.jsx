import React, { Component } from "react";
import axios from "axios";

import Content from "./../template/content";

const baseUrl = "http://localhost:3001/users";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir.",
};

const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class UserCrud extends Component {
  state = { ...initialState };

  clearForm() {
    this.setState({ user: initialState.user });
  }

  saveForm() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  render() {
    return (
      <Content {...headerProps}>
        <h1>Cadastro de Usuário</h1>
        <hr />
      </Content>
    );
  }
}
