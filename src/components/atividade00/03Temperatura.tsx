function cToF(c: number) {
  return (9 * c) / 5 + 32;
}

function fToC(f: number) {
  return ((f - 32) * 5) / 9;
}

function kelvinToCF(k: number) {
  return {
    c: k - 273.15,
    f: (9 * k - 2297) / 5,
  };
}

const Temperatura = () => {
  const k = kelvinToCF(100);
  return (
    <div>
      <h1>Temperatura</h1>
      <h2>32ºC = {cToF(32)}ºF</h2>
      <h2>0ºF = {fToC(0)}ºF</h2>
      <h2>100ºK = {k.c}ºC</h2>
      <h2>100ºK = {k.f}ºF</h2>
    </div>
  );
};

export default Temperatura;
