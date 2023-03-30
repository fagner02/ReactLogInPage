import "./00.css";

// const MeusDados = () => (
//   <div>
//     <h1 className="tals">Francisco Fagner Ferreira Mesquita</h1>
//     <h1>Ciência da Computação</h1>
//     <h1>Universidade Federal do Ceara</h1>
//   </div>
// );

import React from "react";

// const MeusDados = () => {
//   return (
//     <div>
//       <h1 className="tals">Francisco Fagner Ferreira Mesquita</h1>
//       <h1>Ciência da Computação</h1>
//       <h1>Universidade Federal do Ceara</h1>
//     </div>
//   );
// }

class MeusDados extends React.Component {
  render() {
    return (
      <div>
        <h1 className="tals">Francisco Fagner Ferreira Mesquita</h1>
        <h1>Ciência da Computação</h1>
        <h1>Universidade Federal do Ceara</h1>
      </div>
    );
  }
}

// function MeusDados() {
//   return (
//     <div>
//       <h1 className="tals">Francisco Fagner Ferreira Mesquita</h1>
//       <h1>Ciência da Computação</h1>
//       <h1>Universidade Federal do Ceara</h1>
//     </div>
//   );
// }

export default MeusDados;
