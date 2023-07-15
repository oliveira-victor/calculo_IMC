import { useState } from "react"


function App() {

  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);



  function calculate() {

    let meters = height / 100;
    const imc = (weight / (meters * meters).toFixed(1));
    return `O seu IMC é ${imc}`
  }


  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <form>
        <input required type="number" placeholder="Altura em cm" onChange={(e) => setHeight(e.target.value)} />
        <input required type="number" placeholder="Peso em kg" onChange={(e) => setWeight(e.target.value)} />
        <button onClick={calculate}>Calcular IMC</button>
      </form>
      {calculate()}
    </div>
  )
}

export default App
