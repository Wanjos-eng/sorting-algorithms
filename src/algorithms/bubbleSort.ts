import { SortResult, SortMetrics } from '../types/sorting';

/**
 * Implementação do algoritmo Bubble Sort
 * Complexidade de tempo: O(n²)
 * Complexidade de espaço: O(1)
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
export function bubbleSort(arr: number[]): SortResult {
    const startTime = performance.now();
    const metrics: SortMetrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };

    const arrayCopy = [...arr];
    const n = arrayCopy.length;
    
    // Percorre o array n-1 vezes
    for (let i = 0; i < n - 1; i++) {
        // Para cada iteração, flutua o maior elemento até o final
        for (let j = 0; j < n - i - 1; j++) {
            metrics.comparisons++;
            // Compara elementos adjacentes
            if (arrayCopy[j] > arrayCopy[j + 1]) {
                swap(arrayCopy, j, j + 1);
                metrics.swaps++;
            }
        }
    }

    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}

/**
 * Função auxiliar para trocar dois elementos no array
 * @param arr Array contendo os elementos
 * @param i Índice do primeiro elemento
 * @param j Índice do segundo elemento
 */
function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}