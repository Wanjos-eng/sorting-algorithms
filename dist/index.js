"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./algorithms/bubbleSort");
const selectionSort_1 = require("./algorithms/selectionSort");
const insertionSort_1 = require("./algorithms/insertionSort");
const quickSort_1 = require("./algorithms/quickSort");
const heapSort_1 = require("./algorithms/heapSort");
const mergeSort_1 = require("./algorithms/mergeSort");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Funções para gerar arrays
function criarArrayAleatorio(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n * 10));
}
function criarArrayOrdenado(n) {
    return Array.from({ length: n }, (_, i) => i);
}
function criarArrayOrdenadoReverso(n) {
    return Array.from({ length: n }, (_, i) => n - i);
}
// Configuração dos testes
const inicio = 10;
const fim = 1000;
const passo = 10;
// Algoritmos de ordenação
const algoritmos = {
    'Selection Sort': selectionSort_1.selectionSort,
    'Bubble Sort': bubbleSort_1.bubbleSort,
    'Insertion Sort': insertionSort_1.insertionSort,
    'Quick Sort': quickSort_1.quickSort,
    'Heap Sort': heapSort_1.heapSort,
    'Merge Sort': mergeSort_1.mergeSort
};
// Estrutura para armazenar os resultados
const resultados = {
    'Selection Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    },
    'Bubble Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    },
    'Insertion Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    },
    'Quick Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    },
    'Heap Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    },
    'Merge Sort': {
        n: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    }
};
// Função para testar um algoritmo
function testAlgorithm(algorithm, arr) {
    return algorithm([...arr]);
}
// Executar testes
for (let n = inicio; n <= fim; n += passo) {
    const vetorAleatorio = criarArrayAleatorio(n);
    const vetorOrdenado = criarArrayOrdenado(n);
    const vetorReverso = criarArrayOrdenadoReverso(n);
    for (const [nomeAlgoritmo, algoritmo] of Object.entries(algoritmos)) {
        const dados = resultados[nomeAlgoritmo];
        dados.n.push(n);
        // Teste com array aleatório
        const resultadoAleatorio = testAlgorithm(algoritmo, vetorAleatorio);
        dados.comparacoes_aleatorio.push(resultadoAleatorio.metrics.comparisons);
        dados.trocas_aleatorio.push(resultadoAleatorio.metrics.swaps);
        dados.tempo_aleatorio.push(resultadoAleatorio.metrics.time);
        // Teste com array ordenado
        const resultadoOrdenado = testAlgorithm(algoritmo, vetorOrdenado);
        dados.comparacoes_ordenado.push(resultadoOrdenado.metrics.comparisons);
        dados.trocas_ordenado.push(resultadoOrdenado.metrics.swaps);
        dados.tempo_ordenado.push(resultadoOrdenado.metrics.time);
        // Teste com array reverso
        const resultadoReverso = testAlgorithm(algoritmo, vetorReverso);
        dados.comparacoes_reverso.push(resultadoReverso.metrics.comparisons);
        dados.trocas_reverso.push(resultadoReverso.metrics.swaps);
        dados.tempo_reverso.push(resultadoReverso.metrics.time);
    }
}
// Imprimir resultados
console.log('\n=== Resultados Detalhados ===\n');
for (const [algoritmo, dados] of Object.entries(resultados)) {
    console.log(`\n=== ${algoritmo} ===`);
    console.log('n\tComparações (Aleatório)\tComparações (Ordenado)\tComparações (Reverso)\tTrocas (Aleatório)\tTrocas (Ordenado)\tTrocas (Reverso)\tTempo (Aleatório)\tTempo (Ordenado)\tTempo (Reverso)');
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    for (let i = 0; i < dados.n.length; i++) {
        console.log(`${dados.n[i]}\t${dados.comparacoes_aleatorio[i]}\t${dados.comparacoes_ordenado[i]}\t${dados.comparacoes_reverso[i]}\t` +
            `${dados.trocas_aleatorio[i]}\t${dados.trocas_ordenado[i]}\t${dados.trocas_reverso[i]}\t` +
            `${dados.tempo_aleatorio[i].toFixed(2)}\t${dados.tempo_ordenado[i].toFixed(2)}\t${dados.tempo_reverso[i].toFixed(2)}`);
    }
}
// Função para gerar CSV
function gerarCSV(resultados) {
    let csv = 'Algoritmo,n,Comparações (Aleatório),Comparações (Ordenado),Comparações (Reverso),Trocas (Aleatório),Trocas (Ordenado),Trocas (Reverso),Tempo (Aleatório),Tempo (Ordenado),Tempo (Reverso)\n';
    for (const [algoritmo, dados] of Object.entries(resultados)) {
        for (let i = 0; i < dados.n.length; i++) {
            csv += `${algoritmo},${dados.n[i]},${dados.comparacoes_aleatorio[i]},${dados.comparacoes_ordenado[i]},${dados.comparacoes_reverso[i]},`;
            csv += `${dados.trocas_aleatorio[i]},${dados.trocas_ordenado[i]},${dados.trocas_reverso[i]},`;
            csv += `${dados.tempo_aleatorio[i].toFixed(2)},${dados.tempo_ordenado[i].toFixed(2)},${dados.tempo_reverso[i].toFixed(2)}\n`;
        }
    }
    fs.writeFileSync(path.join(__dirname, 'resultados.csv'), csv, 'utf8');
    console.log('Arquivo CSV gerado: resultados.csv');
}
// Função para gerar HTML
function gerarHTML(resultados) {
    let html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultados dos Algoritmos de Ordenação</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                background-color: #f5f5f5;
            }
            h1 {
                color: #333;
                text-align: center;
            }
            .algoritmo {
                margin-bottom: 30px;
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h2 {
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
            th, td {
                padding: 12px;
                text-align: center;
                border: 1px solid #ddd;
            }
            th {
                background-color: #3498db;
                color: white;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            tr:hover {
                background-color: #e9e9e9;
            }
        </style>
    </head>
    <body>
        <h1>Resultados dos Algoritmos de Ordenação</h1>
    `;
    for (const [algoritmo, dados] of Object.entries(resultados)) {
        html += `
        <div class="algoritmo">
            <h2>${algoritmo}</h2>
            <table>
                <tr>
                    <th>n</th>
                    <th>Comparações (Aleatório)</th>
                    <th>Comparações (Ordenado)</th>
                    <th>Comparações (Reverso)</th>
                    <th>Trocas (Aleatório)</th>
                    <th>Trocas (Ordenado)</th>
                    <th>Trocas (Reverso)</th>
                    <th>Tempo (Aleatório)</th>
                    <th>Tempo (Ordenado)</th>
                    <th>Tempo (Reverso)</th>
                </tr>
        `;
        for (let i = 0; i < dados.n.length; i++) {
            html += `
                <tr>
                    <td>${dados.n[i]}</td>
                    <td>${dados.comparacoes_aleatorio[i]}</td>
                    <td>${dados.comparacoes_ordenado[i]}</td>
                    <td>${dados.comparacoes_reverso[i]}</td>
                    <td>${dados.trocas_aleatorio[i]}</td>
                    <td>${dados.trocas_ordenado[i]}</td>
                    <td>${dados.trocas_reverso[i]}</td>
                    <td>${dados.tempo_aleatorio[i].toFixed(2)}</td>
                    <td>${dados.tempo_ordenado[i].toFixed(2)}</td>
                    <td>${dados.tempo_reverso[i].toFixed(2)}</td>
                </tr>
            `;
        }
        html += `
            </table>
        </div>
        `;
    }
    html += `
    </body>
    </html>
    `;
    fs.writeFileSync(path.join(__dirname, 'resultados.html'), html, 'utf8');
    console.log('Arquivo HTML gerado: resultados.html');
}
// Após executar os testes, gerar os arquivos
gerarCSV(resultados);
gerarHTML(resultados);
