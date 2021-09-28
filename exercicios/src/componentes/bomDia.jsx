import React, { Fragment } from "react";

// Componente com parâmetros

// const BomDia = props => <h1>Bom dia {props.nome}! </h1>;

// const BomDia = props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Como vai?</h2>
//     </div>

// const BomDia = props => [
//   <h1 key="h1">Bom dia {props.nome}!</h1>,
//   <h2 key="h2">Como vai?</h2>
// ];

// const BomDia = (props) => (
//   <React.Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Como vai?</h2>
//   </React.Fragment>
// );

const BomDia = (props) => (
  <Fragment>
    <h1>Bom dia {props.nome}!</h1>
    <h2>Como vai?</h2>
  </Fragment>
);

export default BomDia;
