import React from "react";

import "./app.css";

import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Content from "../components/template/content";
import Footer from "../components/template/footer";

const App = (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Content />
    <Footer />
  </div>
);

export default App;
