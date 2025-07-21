export interface ExchangeRates {
  rates: {
    [key: string]: number;
  };
}
import axios from "axios";

export async function getExchangeRate(currency: "USD" | "EUR"): Promise<number> {
  try {
    const res = await axios.get<ExchangeRates>(
      `https://api.exchangerate.host/latest?base=BRL&symbols=${currency}`
    );
    const rate = res.data.rates[currency];
    if (rate === undefined) throw new Error("Taxa não encontrada");
    return rate;
  } catch (err) {
    console.error("Erro ao buscar taxa de câmbio");
    return 0;
  }
}