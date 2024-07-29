
const Square = ({value}) => {
  const valor = value ?? "-";
  return (
  <button className="square">
    {valor}
  </button>);
}

const App = () => {
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

export default App
