import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./app.css";

import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Home from "../components/page/home";
import Footer from "../components/template/footer";

const App = (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>
);

export default App;
