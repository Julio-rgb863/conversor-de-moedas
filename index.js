"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExchangeRate = getExchangeRate;
const readline_1 = __importDefault(require("readline"));
function getExchangeRate(currency) {
    // implementação aqui (exemplo de valor fictício)
    return Promise.resolve(1); // Retorna 1 como taxa de câmbio fictícia
}
// Função que transforma rl.question em Promise
function perguntar(pergunta) {
    const rl = readline_1.default.createInterface({
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield perguntar("Digite o valor em BRL: ");
        const amount = parseFloat(resposta);
        if (isNaN(amount)) {
            console.log("❌ Valor inválido. Tente novamente com um número.");
            return;
        }
        try {
            const usdRate = yield getExchangeRate("USD");
            const eurRate = yield getExchangeRate("EUR");
            console.log(`\n💵 ${amount.toFixed(2)} BRL = ${(amount * usdRate).toFixed(2)} USD`);
            console.log(`💶 ${amount.toFixed(2)} BRL = ${(amount * eurRate).toFixed(2)} EUR\n`);
        }
        catch (error) {
            console.log("❌ Erro ao obter as taxas de câmbio.");
        }
    });
}
main();
