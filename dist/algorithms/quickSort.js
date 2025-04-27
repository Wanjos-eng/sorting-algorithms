"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = quickSort;
/**
 * Implementação do algoritmo Quick Sort
 * Complexidade de tempo: O(n log n) no caso médio, O(n²) no pior caso
 * Complexidade de espaço: O(log n) devido à recursão
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
function quickSort(arr) {
    const startTime = performance.now();
    const metrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };
    const arrayCopy = [...arr];
    quickSortHelper(arrayCopy, 0, arrayCopy.length - 1, metrics);
    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}
/**
 * Função auxiliar recursiva do Quick Sort
 * @param arr Array sendo ordenado
 * @param low Índice inicial
 * @param high Índice final
 * @param metrics Objeto para armazenar métricas
 */
function quickSortHelper(arr, low, high, metrics) {
    // Usa um loop em vez de recursão para evitar estouro de pilha
    while (low < high) {
        const pivotIndex = partition(arr, low, high, metrics);
        // Ordena a parte menor primeiro para minimizar o uso da pilha
        if (pivotIndex - low < high - pivotIndex) {
            quickSortHelper(arr, low, pivotIndex - 1, metrics);
            low = pivotIndex + 1;
        }
        else {
            quickSortHelper(arr, pivotIndex + 1, high, metrics);
            high = pivotIndex - 1;
        }
    }
}
/**
 * Particiona o array e retorna o índice do pivô
 * @param arr Array sendo ordenado
 * @param low Índice inicial
 * @param high Índice final
 * @param metrics Objeto para armazenar métricas
 * @returns Índice do pivô
 */
function partition(arr, low, high, metrics) {
    // Escolhe o pivô como o elemento do meio para melhor performance
    const mid = Math.floor((low + high) / 2);
    const pivot = arr[mid];
    // Move o pivô para o final
    swap(arr, mid, high);
    metrics.swaps++;
    let i = low - 1;
    for (let j = low; j < high; j++) {
        metrics.comparisons++;
        if (arr[j] < pivot) {
            i++;
            if (i !== j) {
                swap(arr, i, j);
                metrics.swaps++;
            }
        }
    }
    // Move o pivô para sua posição final
    swap(arr, i + 1, high);
    metrics.swaps++;
    return i + 1;
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
