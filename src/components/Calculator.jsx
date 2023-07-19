import { useState } from "react";

function Calculator() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = (e) => {
        e.preventDefault();

        const meters = height / 100;
        const imc = (weight / (meters * meters)).toFixed(1);
        setResult(imc)
    }

    return (
        <div className="container">
            <h1>Calculadora IMC</h1>
            <form onSubmit={calculate}>
                <label htmlFor="height">Informe sua altura em Cm:</label>
                <input required id="height" type="number" placeholder="Altura em cm" onChange={(e) => setHeight(e.target.value)} />
                <label htmlFor="weight">Informe seu peso em Kg:</label>
                <input required id="weight" type="number" placeholder="Peso em kg" onChange={(e) => setWeight(e.target.value)} />
                <button type="submit">Calcular IMC</button>
            </form>
            <p>{result}</p>
        </div>
    )
}

export default Calculator