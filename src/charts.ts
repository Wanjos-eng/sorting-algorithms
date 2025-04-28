import { Chart, ChartConfiguration } from 'chart.js/auto';
import { AlgorithmData, ChartData, ChartOptions } from './types/sorting';

/**
 * Interface representing the metrics data for a sorting algorithm
 */
interface AlgorithmMetrics {
    n: number[];
    comparacoes_aleatorio: number[];
    comparacoes_ordenado: number[];
    comparacoes_reverso: number[];
}

/**
 * Creates a chart configuration for a specific sorting algorithm
 * @param algorithmName - Name of the sorting algorithm
 * @param metrics - Metrics data for the algorithm
 * @returns ChartConfiguration object
 */
export function createComparisonsChartConfig(
    algorithmName: string,
    metrics: AlgorithmMetrics
): ChartConfiguration {
    return {
        type: 'line',
        data: {
            labels: metrics.n,
            datasets: [
                {
                    label: 'Aleatório',
                    data: metrics.comparacoes_aleatorio,
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    tension: 0.1
                },
                {
                    label: 'Ordenado',
                    data: metrics.comparacoes_ordenado,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    tension: 0.1
                },
                {
                    label: 'Reverso',
                    data: metrics.comparacoes_reverso,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    tension: 0.1
                }
            ]
        },
        options: {
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
                    position: 'top' as const
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
        }
    };
}

/**
 * Creates and renders a chart for a specific sorting algorithm
 * @param canvasId - ID of the canvas element
 * @param algorithmName - Name of the sorting algorithm
 * @param metrics - Metrics data for the algorithm
 */
export function renderComparisonsChart(
    canvasId: string,
    algorithmName: string,
    metrics: AlgorithmMetrics
): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with id ${canvasId} not found`);
        return;
    }

    const config = createComparisonsChartConfig(algorithmName, metrics);
    new Chart(canvas, config);
}

export function createSwapsChart(algorithmId: string, data: AlgorithmData[keyof AlgorithmData]): void {
    const ctx = document.getElementById(`swaps-chart-${algorithmId}`) as HTMLCanvasElement;
    const chartData: ChartData = {
        labels: ['10', '50', '100', '500', '1000'],
        datasets: [{
            label: 'Aleatório',
            data: data.random,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'Ordenado',
            data: data.sorted,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }, {
            label: 'Inversamente Ordenado',
            data: data.reversed,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        }]
    };

    const options: ChartOptions = {
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

export const swapsData: AlgorithmData = {
    'selection-sort': {
        random: [45, 1225, 4950, 124750, 499500],
        sorted: [0, 0, 0, 0, 0],
        reversed: [45, 1225, 4950, 124750, 499500]
    },
    'bubble-sort': {
        random: [20, 625, 2500, 62500, 250000],
        sorted: [0, 0, 0, 0, 0],
        reversed: [45, 1225, 4950, 124750, 499500]
    },
    'insertion-sort': {
        random: [15, 375, 1500, 37500, 150000],
        sorted: [0, 0, 0, 0, 0],
        reversed: [45, 1225, 4950, 124750, 499500]
    },
    'quick-sort': {
        random: [8, 200, 800, 20000, 80000],
        sorted: [9, 225, 900, 22500, 90000],
        reversed: [9, 225, 900, 22500, 90000]
    }
}; 