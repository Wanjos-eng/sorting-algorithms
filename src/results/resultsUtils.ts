import * as fs from 'fs';
import * as path from 'path';
import { Resultados } from '../types/types';

export function gerarCSV(resultados: { [chave: string]: Resultados }): void {
    let csv = 'Algoritmo,Tamanho,Comparações (Aleatório),Comparações (Ordenado),Comparações (Reverso),Trocas (Aleatório),Trocas (Ordenado),Trocas (Reverso),Tempo (Aleatório),Tempo (Ordenado),Tempo (Reverso)\n';

    for (const [algoritmo, dados] of Object.entries(resultados)) {
        for (let i = 0; i < dados.tamanho.length; i++) {
            csv += `${algoritmo},${dados.tamanho[i]},${dados.comparacoes_aleatorio[i]},${dados.comparacoes_ordenado[i]},${dados.comparacoes_reverso[i]},`;
            csv += `${dados.trocas_aleatorio[i]},${dados.trocas_ordenado[i]},${dados.trocas_reverso[i]},`;
            csv += `${dados.tempo_aleatorio[i].toFixed(2)},${dados.tempo_ordenado[i].toFixed(2)},${dados.tempo_reverso[i].toFixed(2)}\n`;
        }
    }

    fs.writeFileSync(path.join(__dirname, 'resultados.csv'), csv, 'utf8');
    console.log('Arquivo CSV gerado: resultados.csv');
}

export function gerarHTML(resultados: { [chave: string]: Resultados }): void {
    let html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sorting Algorithms Results</title>
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
            .algorithm {
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
        <h1>Sorting Algorithms Results</h1>
    `;

    for (const [algorithmName, data] of Object.entries(resultados)) {
        const chartId = `chart-${algorithmName.toLowerCase().replace(/\s+/g, '-')}`;
        html += `
        <div class="algorithm">
            <h2>${algorithmName}</h2>
            <div class="chart-container">
                <canvas id="${chartId}"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="swaps-${chartId}"></canvas>
            </div>
            <table>
                <tr>
                    <th>Size</th>
                    <th>Comparisons (Random)</th>
                    <th>Comparisons (Sorted)</th>
                    <th>Comparisons (Reversed)</th>
                    <th>Swaps (Random)</th>
                    <th>Swaps (Sorted)</th>
                    <th>Swaps (Reversed)</th>
                    <th>Time (Random)</th>
                    <th>Time (Sorted)</th>
                    <th>Time (Reversed)</th>
                </tr>
        `;

        for (let i = 0; i < data.tamanho.length; i++) {
            html += `
                <tr>
                    <td>${data.tamanho[i]}</td>
                    <td>${data.comparacoes_aleatorio[i]}</td>
                    <td>${data.comparacoes_ordenado[i]}</td>
                    <td>${data.comparacoes_reverso[i]}</td>
                    <td>${data.trocas_aleatorio[i]}</td>
                    <td>${data.trocas_ordenado[i]}</td>
                    <td>${data.trocas_reverso[i]}</td>
                    <td>${data.tempo_aleatorio[i].toFixed(2)}</td>
                    <td>${data.tempo_ordenado[i].toFixed(2)}</td>
                    <td>${data.tempo_reverso[i].toFixed(2)}</td>
                </tr>
            `;
        }

        html += `
            </table>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Gráfico de comparações
                const ctx = document.getElementById('${chartId}').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ${JSON.stringify(data.tamanho)},
                        datasets: [
                            {
                                label: 'Array Aleatório',
                                data: ${JSON.stringify(data.comparacoes_aleatorio)},
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Ordenado',
                                data: ${JSON.stringify(data.comparacoes_ordenado)},
                                borderColor: 'rgb(255, 99, 132)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Reverso',
                                data: ${JSON.stringify(data.comparacoes_reverso)},
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
                                text: 'Número de Comparações - ${algorithmName}',
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

                // Gráfico de trocas
                const swapsCtx = document.getElementById('swaps-${chartId}').getContext('2d');
                new Chart(swapsCtx, {
                    type: 'line',
                    data: {
                        labels: ${JSON.stringify(data.tamanho)},
                        datasets: [
                            {
                                label: 'Array Aleatório',
                                data: ${JSON.stringify(data.trocas_aleatorio)},
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Ordenado',
                                data: ${JSON.stringify(data.trocas_ordenado)},
                                borderColor: 'rgb(255, 99, 132)',
                                tension: 0.1
                            },
                            {
                                label: 'Array Reverso',
                                data: ${JSON.stringify(data.trocas_reverso)},
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
                                text: 'Número de Trocas - ${algorithmName}',
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
                                    text: 'Número de Trocas'
                                }
                            }
                        }
                    }
                });
            });
        </script>
        `;
    }

    // Adiciona os gráficos comparativos gerais
    const algorithmColors = [
        'rgb(255, 99, 132)', // Red
        'rgb(54, 162, 235)', // Blue
        'rgb(75, 192, 192)', // Teal
        'rgb(255, 206, 86)', // Yellow
        'rgb(153, 102, 255)', // Purple
        'rgb(255, 159, 64)'  // Orange
    ];

    html += `
    <div class="chart-container">
        <canvas id="grafico-comparacoes-geral"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="grafico-trocas-geral"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="grafico-comparacoes-ordenado"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="grafico-trocas-ordenado"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="grafico-comparacoes-inverso"></canvas>
    </div>
    <div class="chart-container">
        <canvas id="grafico-trocas-inverso"></canvas>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const labels = ${JSON.stringify(resultados['Bubble Sort'].tamanho)}; // todos têm o mesmo tamanho

            const datasetsComparacoes = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.comparacoes_aleatorio)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            const datasetsTrocas = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.trocas_aleatorio)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            const datasetsComparacoesOrdenado = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.comparacoes_ordenado)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            const datasetsTrocasOrdenado = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.trocas_ordenado)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            const datasetsComparacoesInverso = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.comparacoes_reverso)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            const datasetsTrocasInverso = [
                ${Object.entries(resultados).map(([alg, dados], index) => `{
                    label: "${alg}",
                    data: ${JSON.stringify(dados.trocas_reverso)},
                    fill: false,
                    tension: 0.1,
                    borderColor: "${algorithmColors[index % algorithmColors.length]}"
                }`).join(',')}
            ];

            new Chart(document.getElementById('grafico-comparacoes-geral').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsComparacoes
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparações - Arrays Aleatórios'
                        }
                    }
                }
            });

            new Chart(document.getElementById('grafico-trocas-geral').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsTrocas
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Trocas - Arrays Aleatórios'
                        }
                    }
                }
            });

            new Chart(document.getElementById('grafico-comparacoes-ordenado').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsComparacoesOrdenado
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparações - Arrays Ordenados'
                        }
                    }
                }
            });

            new Chart(document.getElementById('grafico-trocas-ordenado').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsTrocasOrdenado
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Trocas - Arrays Ordenados'
                        }
                    }
                }
            });

            new Chart(document.getElementById('grafico-comparacoes-inverso').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsComparacoesInverso
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparações - Arrays Inversos'
                        }
                    }
                }
            });

            new Chart(document.getElementById('grafico-trocas-inverso').getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: datasetsTrocasInverso
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Trocas - Arrays Inversos'
                        }
                    }
                }
            });
        });
    </script>
    `;

    html += `
    </body>
    </html>
    `;

    fs.writeFileSync(path.join(__dirname, 'resultados.html'), html, 'utf8');
    console.log('HTML file generated: resultados.html');
}
