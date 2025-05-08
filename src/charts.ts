import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js/auto';
import { DadosAlgoritmo } from './types/sorting';

/**
 * Interface representando os dados de métricas para um algoritmo de ordenação.
 */
interface AlgorithmMetrics {
    n: number[];
    comparacoesAleatorio: number[];
    comparacoesOrdenado: number[];
    comparacoesReverso: number[];
}

/**
 * Cria uma configuração de gráfico para um algoritmo de ordenação específico.
 * 
 * @param {string} algorithmName - Nome do algoritmo de ordenação.
 * @param {AlgorithmMetrics} metrics - Dados de métricas do algoritmo.
 * @returns {ChartConfiguration<'line'>} Objeto de configuração do gráfico.
 */
export function createComparisonsChartConfig(
    algorithmName: string,
    metrics: AlgorithmMetrics
): ChartConfiguration<'line'> {
    const data: ChartData<'line'> = {
        labels: metrics.n,
        datasets: [
            {
                label: 'Aleatório',
                data: metrics.comparacoesAleatorio,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                tension: 0.1
            },
            {
                label: 'Ordenado',
                data: metrics.comparacoesOrdenado,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.1
            },
            {
                label: 'Reverso',
                data: metrics.comparacoesReverso,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.1
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `Comparações - ${algorithmName}`,
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Comparações'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Número de Elementos (n)'
                }
            }
        }
    };

    return {
        type: 'line',
        data,
        options
    };
}

/**
 * Renderiza um gráfico de comparações para um algoritmo de ordenação específico.
 * 
 * @param {string} canvasId - ID do elemento canvas.
 * @param {string} algorithmName - Nome do algoritmo de ordenação.
 * @param {AlgorithmMetrics} metrics - Dados de métricas do algoritmo.
 */
export function renderComparisonsChart(
    canvasId: string,
    algorithmName: string,
    metrics: AlgorithmMetrics
): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Elemento canvas com id ${canvasId} não encontrado`);
        return;
    }

    const config = createComparisonsChartConfig(algorithmName, metrics);
    new Chart(canvas, config);
}

/**
 * Cria e renderiza um gráfico de trocas para um algoritmo de ordenação específico.
 * 
 * @param {string} algorithmId - ID do algoritmo.
 * @param {DadosAlgoritmo[keyof DadosAlgoritmo]} data - Dados do algoritmo.
 */
export function createSwapsChart(
    algorithmId: string,
    data: DadosAlgoritmo[keyof DadosAlgoritmo]
): void {
    const ctx = document.getElementById(`swaps-chart-${algorithmId}`) as HTMLCanvasElement;
    if (!ctx) {
        console.error(`Elemento canvas com id swaps-chart-${algorithmId} não encontrado`);
        return;
    }

    const chartData: ChartData<'line'> = {
        labels: ['10', '50', '100', '500', '1000'],
        datasets: [
            {
                label: 'Aleatório',
                data: data.aleatorio,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Ordenado',
                data: data.ordenado,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            },
            {
                label: 'Inversamente Ordenado',
                data: data.reverso,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }
        ]
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Trocas x Número de Elementos'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Trocas'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Número de Elementos (N)'
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: options
    });
}

/**
 * Dados de trocas para diferentes algoritmos de ordenação.
 */
export const swapsData: DadosAlgoritmo = {
    'selection-sort': {
        aleatorio: [45, 1225, 4950, 124750, 499500],
        ordenado: [0, 0, 0, 0, 0],
        reverso: [45, 1225, 4950, 124750, 499500]
    },
    'bubble-sort': {
        aleatorio: [20, 625, 2500, 62500, 250000],
        ordenado: [0, 0, 0, 0, 0],
        reverso: [45, 1225, 4950, 124750, 499500]
    },
    'insertion-sort': {
        aleatorio: [15, 375, 1500, 37500, 150000],
        ordenado: [0, 0, 0, 0, 0],
        reverso: [45, 1225, 4950, 124750, 499500]
    },
    'quick-sort': {
        aleatorio: [8, 200, 800, 20000, 80000],
        ordenado: [9, 225, 900, 22500, 90000],
        reverso: [9, 225, 900, 22500, 90000]
    }
};