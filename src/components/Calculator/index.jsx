import { useState } from "react";
import styles from './Calculator.module.css';

function Calculator() {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(0);
    let [classification, setClassification] = useState('');

    const calculate = (e) => {
        e.preventDefault();

        setHeight('');
        setWeight('');

        const meters = height / 100;
        const imc = (weight / (meters * meters)).toFixed(1);
        setResult(imc);

        if (imc < 18.5) {
            setClassification("Magreza");
        } else if (imc >=18.5 && imc <= 24.9) {
            setClassification("Normal");
        } else if (imc >= 25 && imc <= 29.9) {
            setClassification("Sobrepeso");
        } else if (imc >= 30 && imc <= 39.9) {
            setClassification("Obesidade");
        } else if (imc >= 40) {
            setClassification("Obesidade grave");
        }
    }

    return (
        <div className={styles.container}>
            <h1>Calculadora IMC</h1>
            <form onSubmit={calculate}>
                <div className={styles.inputContainer}>
                    <div>
                        <label htmlFor="height">Informe sua altura em Cm:</label>
                        <input required value={height} id="height" type="number" placeholder="Cm" onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="weight">Informe seu peso em Kg:</label>
                        <input required value={weight} id="weight" type="number" placeholder="Kg" onChange={(e) => setWeight(e.target.value)} />
                    </div>
                </div>
                <button type="submit">Calcular IMC</button>
            </form>
            <p className={styles.result}>Seu IMC é: {result}</p>
            <p className={styles.classification}>{classification}</p>
            <table className={styles.table}>
                <tr className={styles.tableHeader}>
                    <td>IMC</td>
                    <td>CLASSIFICAÇÃO</td>
                    <td>GRAU DE OBESIDADE</td>
                </tr>
                <tr>
                    <td>
                        Menor que 18,5
                    </td>
                    <td>
                        Magreza
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr className={styles.differentRow}>
                    <td>
                        Entre 18,5 e 24,9
                    </td>
                    <td>
                        Normal
                    </td>
                    <td>
                        0
                    </td>
                </tr>
                <tr>
                    <td>
                        Entre 25,0 e 29,9
                    </td>
                    <td>
                        Sobrepeso
                    </td>
                    <td>
                        I
                    </td>
                </tr>
                <tr className={styles.differentRow}>
                    <td>
                        Entre 30,0 e 39,9
                    </td>
                    <td>
                        Obesidade
                    </td>
                    <td>
                        II
                    </td>
                </tr>
                <tr>
                    <td>
                        Maior que 40,0
                    </td>
                    <td>
                        Obesidade grave
                    </td>
                    <td>
                        III
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Calculator