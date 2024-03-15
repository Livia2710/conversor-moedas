import { useState } from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {

    //Estado das moedas
    const [rates, setRates] = useState(null);

    //Estado para armazenar a moeda de origem
    const [fromCurrency, setFromCurrency] = useState("USD");

    //Estado para armazenar a moeda de destino
    const [toCurrency, setToCurrency] = useState("EUR");

    //Estado para armazenar o valor a ser convertido
    const [amount, setAmount] = useState("1");

    //Estado para armazenar o valor  convertido
    const [convertedAmount, setConvertedAmount] = useState(null);
  





  return (
    <div className="converter">
        <h2>Conversor de moedas</h2>

        <input type="number" placeholder="Digite o valor..." />
        <span>Selecione as moedas</span>

        <select>
            <option value="BRL">BRL</option>
        </select>

        <span>para</span>

        <select>
            <option value="USD">USD</option>
        </select>

        <h3>BRL USD</h3>
        <p>20 BRL valem 5 USD</p>



    </div>
  )
}

export default CurrencyConverter