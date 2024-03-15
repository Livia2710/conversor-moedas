import { useEffect, useState } from "react";
import axios from "axios";
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

    // Efeito para buscar de câmbio da API
    useEffect(() => {
        axios
         .get("https://v6.exchangerate-api.com/v6/0be3026f55fe5606ac86b7aa/latest/USD")
         .then((response) => {
            setRates(response.data.conversion_rates);
         })
         .catch((error) => {
            console.log("Deu ruim ao obter os dados da API",error);
         });

    }, []);

    // Calcular o valor convertido e corrigir Delays (Atrasos)
    useEffect(() => {
        // Veriica se o objeto rates não é nulo ou indefinido
        if(rates) {
            //Obtém a taxa (moeda de origem) senão existir atribuir 0 
            const rateFrom = rates[fromCurrency] || 0;

            //Obtém a taxa (moeda de destino) senão existir atribuir 0
            const rateTo = rates[toCurrency] || 0;

            // Calcule o valor convertido, arredonda em 2 casas e
            //armazena no Estado "ConvertedAmount"
            setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
        }

    //Este efeito será executado empre que qualquer um dos itens
    //[amount, rates, fromCurrency, toCurrency]  for atualizado
    //Isso é conhecido como (Lista de depedências)
    },[amount, rates, fromCurrency, toCurrency]);

    //Exibe um loader enquanto as taxas não são carregadas
    // Se rates nulo renderiza(Carregando...)
    if(rates) {
        return<div>Carregando...</div>
    }
  





  return (
    <div className="converter">
        <h2>Conversor de moedas</h2>

        <input type="number" placeholder="Digite o valor..." value={amount} />
        <span>Selecione as moedas</span>

       {/* Dropdown  para selecionar a moeda de origem*/}
        <select value={fromCurrency}>
            {Object.keys(rates).map((currency)=> (
            <option key={currency} value={currency}>
                {currency}
            </option>
            ))}
        </select>

        <span>para</span>

        {/* Dropdown  para selecionar a moeda de destino*/}
        <select value={toCurrencyCurrency}>
            {Object.keys(rates).map((currency)=> (
            <option key={currency} value={currency}>
                {currency}
            </option>
            ))}
        </select>

        <h3>{convertedAmount} {toCurrency}</h3>
        <p>{amount} {fromCurrency} valem {convertedAmount} {toCurrency} </p>



    </div>
  )
}

export default CurrencyConverter