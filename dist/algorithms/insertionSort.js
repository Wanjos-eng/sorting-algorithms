"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = insertionSort;
/**
 * Implementação do algoritmo Insertion Sort
 * Complexidade de tempo: O(n²) no pior caso, O(n) no melhor caso
 * Complexidade de espaço: O(1)
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
function insertionSort(arr) {
    const startTime = performance.now();
    const metrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };
    const arrayCopy = [...arr];
    const n = arrayCopy.length;
    // Começa do segundo elemento
    for (let i = 1; i < n; i++) {
        const key = arrayCopy[i];
        let j = i - 1;
        // Move elementos maiores que key para a direita
        while (j >= 0 && arrayCopy[j] > key) {
            metrics.comparisons++;
            arrayCopy[j + 1] = arrayCopy[j];
            metrics.swaps++;
            j--;
        }
        metrics.comparisons++; // Conta a última comparação que falhou
        arrayCopy[j + 1] = key;
    }
    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}
