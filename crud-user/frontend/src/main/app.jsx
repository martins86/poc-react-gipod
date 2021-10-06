import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./app.css";

// Usa Url sem o # porem pode ocorrer problemas em prod
import { BrowserRouter } from "react-router-dom";
// Usa o # na Url
// import { HashRouter } from "react-router-dom";
import Routes from "./routes";

import Logo from "../components/template/logo";
import Nav from "../components/template/nav";
import Footer from "../components/template/footer";

const App = (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
