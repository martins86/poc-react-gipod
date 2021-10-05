import React from "react";

import Content from "../template/content";

const Home = (props) => (
  <Content
    icon="home"
    title="Inicio"
    subtitle="Projeto Crud de Usuários com React."
  >
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">Sistema de Gestão de Usuários com React.</p>
  </Content>
);

export default Home;
