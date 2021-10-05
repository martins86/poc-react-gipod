import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./app.css";

import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Content from "../components/template/content";
import Footer from "../components/template/footer";

const App = (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Content
      icon="home"
      title="Inicio"
      subtitle="Projeto Crud de Usuários com React."
    />
    <Footer />
  </div>
);

export default App;
