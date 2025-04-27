import { bubbleSort } from './algorithms/bubbleSort';
import { selectionSort } from './algorithms/selectionSort';
import { insertionSort } from './algorithms/insertionSort';
import { quickSort } from './algorithms/quickSort';
import { heapSort } from './algorithms/heapSort';
import { mergeSort } from './algorithms/mergeSort';
import * as fs from 'fs';
import * as path from 'path';

// Funções para gerar arrays
function criarArrayAleatorio(n: number): number[] {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n * 10));
}

function criarArrayOrdenado(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
}

function criarArrayOrdenadoReverso(n: number): number[] {
    return Array.from({ length: n }, (_, i) => n - i);
}

// Configuração dos testes
const inicio = 10;
const fim = 1000;
const passo = 10;

// Algoritmos de ordenação
const algoritmos = {
    'Selection Sort': selectionSort,
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Quick Sort': quickSort,
    'Heap Sort': heapSort,
    'Merge Sort': mergeSort
};

// Estrutura para armazenar os resultados
const resultados: { [key: string]: any } = {
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
function testAlgorithm(algorithm: (arr: number[]) => any, arr: number[]): any {
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
        console.log(
            `${dados.n[i]}\t${dados.comparacoes_aleatorio[i]}\t${dados.comparacoes_ordenado[i]}\t${dados.comparacoes_reverso[i]}\t` +
            `${dados.trocas_aleatorio[i]}\t${dados.trocas_ordenado[i]}\t${dados.trocas_reverso[i]}\t` +
            `${dados.tempo_aleatorio[i].toFixed(2)}\t${dados.tempo_ordenado[i].toFixed(2)}\t${dados.tempo_reverso[i].toFixed(2)}`
        );
    }
}

// Função para gerar CSV
function gerarCSV(resultados: { [key: string]: any }) {
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
function gerarHTML(resultados: { [key: string]: any }) {
    let html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultados dos Algoritmos de Ordenação</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
            .chart-container {
                width: 100%;
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
        const chartId = `chart-${algoritmo.toLowerCase().replace(/\s+/g, '-')}`;
        html += `
        <div class="algoritmo">
            <h2>${algoritmo}</h2>
            <div class="chart-container">
                <canvas id="${chartId}"></canvas>
            </div>
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
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('${chartId}').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ${JSON.stringify(dados.n)},
                        datasets: [
                            {
                                label: 'Array Aleatório',
                                data: ${JSON.stringify(dados.comparacoes_aleatorio)},
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Ordenado',
                                data: ${JSON.stringify(dados.comparacoes_ordenado)},
                                borderColor: 'rgb(255, 99, 132)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Reverso',
                                data: ${JSON.stringify(dados.comparacoes_reverso)},
                                borderColor: 'rgb(54, 162, 235)',
                                tension: 0.1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Número de Comparações - ${algoritmo}',
                                font: {
                                    size: 16
                                }
                            },
                            legend: {
                                position: 'top'
                            }
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Número de Elementos (n)'
                                }
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Número de Comparações'
                                }
                            }
                        }
                    }
                });
            });
        </script>
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