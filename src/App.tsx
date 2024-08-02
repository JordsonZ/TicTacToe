import { useState } from "react";

const Square = ({value}) => {
  const [valor, mudarValor] = useState(value ?? "-");
  //const valor = value ?? "-";

  const EscutarClique =() => {
    console.info("clicado")
    mudarValor("X");
  }

  return (
  <button className="square" onClick={EscutarClique}> 
    {valor}
  </button>);
}

const Board = () => {
  return (
    <>
      <h1>Jogo da Ikareai</h1>
      <div className="board-row"> 
        <Square value="D" />
        <Square value="E"/>
        <Square value="U"/>
      </div>
      <div className="board-row">
        <Square value="V"/>
        <Square value="E"/>
        <Square value="L"/>
      </div>
      <div className="board-row">
        <Square value="H"/>
        <Square value="A"/>
        <Square value="!"/>
      </div>
    </>
  );
};
const App = () => {
  return <Board />
}

export default App
