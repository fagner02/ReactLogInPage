import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/Inter.ttf";
import "./App.css";
import TabPage from "./tabPage";
import MeusDados from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <MeusDados
        nome="Francisco Fagner Ferreira Mesquita"
        curso="Ciência da Computação"
        uni="Universidade Federal do Ceara"></MeusDados>
      <Temperatura></Temperatura> */}
      <TabPage></TabPage>
    </div>
  );
}

export default App;
