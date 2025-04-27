"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heapSort = heapSort;
/**
 * Implementação do algoritmo Heap Sort
 * Complexidade de tempo: O(n log n) em todos os casos
 * Complexidade de espaço: O(1)
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
function heapSort(arr) {
    const startTime = performance.now();
    const metrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };
    const arrayCopy = [...arr];
    const n = arrayCopy.length;
    // Construir max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arrayCopy, n, i, metrics);
    }
    // Extrair elementos do heap um por um
    for (let i = n - 1; i > 0; i--) {
        swap(arrayCopy, 0, i);
        metrics.swaps++;
        heapify(arrayCopy, i, 0, metrics);
    }
    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}
/**
 * Função auxiliar para manter a propriedade de max-heap
 * @param arr Array sendo ordenado
 * @param n Tamanho do heap
 * @param i Índice do nó atual
 * @param metrics Objeto para armazenar métricas
 */
function heapify(arr, n, i, metrics) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n) {
        metrics.comparisons++;
        if (arr[left] > arr[largest]) {
            largest = left;
        }
    }
    if (right < n) {
        metrics.comparisons++;
        if (arr[right] > arr[largest]) {
            largest = right;
        }
    }
    if (largest !== i) {
        swap(arr, i, largest);
        metrics.swaps++;
        heapify(arr, n, largest, metrics);
    }
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
