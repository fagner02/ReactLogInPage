const MeusDados = (props: any) => {
  var { nome, uni, curso } = props;
  return (
    <div>
      <h1>{nome}</h1>
      <h1>{uni}</h1>
      <h1>{curso}</h1>
    </div>
  );
};

export default MeusDados;
