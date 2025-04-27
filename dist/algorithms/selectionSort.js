"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = selectionSort;
/**
 * Implementação do algoritmo Selection Sort
 * Complexidade de tempo: O(n²)
 * Complexidade de espaço: O(1)
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
function selectionSort(arr) {
    const startTime = performance.now();
    const metrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };
    const arrayCopy = [...arr];
    const n = arrayCopy.length;
    // Percorre o array
    for (let i = 0; i < n - 1; i++) {
        // Encontra o menor elemento no resto do array
        const minIdx = findMinIndex(arrayCopy, i, metrics);
        // Se o menor elemento não for o atual, faz a troca
        if (minIdx !== i) {
            swap(arrayCopy, i, minIdx);
            metrics.swaps++;
        }
    }
    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}
/**
 * Encontra o índice do menor elemento a partir de um índice inicial
 * @param arr Array para buscar
 * @param startIndex Índice inicial da busca
 * @param metrics Objeto para armazenar métricas
 * @returns Índice do menor elemento encontrado
 */
function findMinIndex(arr, startIndex, metrics) {
    let minIdx = startIndex;
    // Procura o menor elemento no resto do array
    for (let j = startIndex + 1; j < arr.length; j++) {
        metrics.comparisons++;
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    return minIdx;
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
