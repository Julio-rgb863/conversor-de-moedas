import readline from "readline";
export function getExchangeRate(currency: string): Promise<number> {
  // implementação aqui (exemplo de valor fictício)
  return Promise.resolve(1); // Retorna 1 como taxa de câmbio fictícia
}

// Função que transforma rl.question em Promise
function perguntar(pergunta: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
}

async function main() {
  const resposta = await perguntar("Digite o valor em BRL: ");
  const amount = parseFloat(resposta);

  if (isNaN(amount)) {
    console.log("❌ Valor inválido. Tente novamente com um número.");
    return;
  }

  try {
    const usdRate = await getExchangeRate("USD");
    const eurRate = await getExchangeRate("EUR");

    console.log(`\n💵 ${amount.toFixed(2)} BRL = ${(amount * usdRate).toFixed(2)} USD`);
    console.log(`💶 ${amount.toFixed(2)} BRL = ${(amount * eurRate).toFixed(2)} EUR\n`);
  } catch (error) {
    console.log("❌ Erro ao obter as taxas de câmbio.");
  }
}

main();

