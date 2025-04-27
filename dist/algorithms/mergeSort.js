"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = mergeSort;
/**
 * Implementação do algoritmo Merge Sort
 * Complexidade de tempo: O(n log n) em todos os casos
 * Complexidade de espaço: O(n) devido ao array auxiliar
 * @param arr Array a ser ordenado
 * @returns Resultado da ordenação com métricas
 */
function mergeSort(arr) {
    const startTime = performance.now();
    const metrics = {
        comparisons: 0,
        swaps: 0,
        time: 0
    };
    const arrayCopy = [...arr];
    mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1, metrics);
    metrics.time = performance.now() - startTime;
    return {
        sortedArray: arrayCopy,
        metrics
    };
}
/**
 * Função auxiliar recursiva do Merge Sort
 * @param arr Array sendo ordenado
 * @param left Índice inicial
 * @param right Índice final
 * @param metrics Objeto para armazenar métricas
 */
function mergeSortHelper(arr, left, right, metrics) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSortHelper(arr, left, mid, metrics);
        mergeSortHelper(arr, mid + 1, right, metrics);
        merge(arr, left, mid, right, metrics);
    }
}
/**
 * Função que mescla dois subarrays ordenados
 * @param arr Array sendo ordenado
 * @param left Índice inicial
 * @param mid Índice do meio
 * @param right Índice final
 * @param metrics Objeto para armazenar métricas
 */
function merge(arr, left, mid, right, metrics) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = new Array(n1);
    const R = new Array(n2);
    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = left;
    while (i < n1 && j < n2) {
        metrics.comparisons++;
        if (L[i] <= R[j]) {
            if (arr[k] !== L[i]) {
                metrics.swaps++;
            }
            arr[k++] = L[i++];
        }
        else {
            if (arr[k] !== R[j]) {
                metrics.swaps++;
            }
            arr[k++] = R[j++];
        }
    }
    while (i < n1) {
        if (arr[k] !== L[i]) {
            metrics.swaps++;
        }
        arr[k++] = L[i++];
    }
    while (j < n2) {
        if (arr[k] !== R[j]) {
            metrics.swaps++;
        }
        arr[k++] = R[j++];
    }
}
