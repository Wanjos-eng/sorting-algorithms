import { Chart, ChartConfiguration } from 'chart.js/auto';

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