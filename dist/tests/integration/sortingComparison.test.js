"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayGenerators_1 = require("../utils/arrayGenerators");
const bubbleSort_1 = require("../../algorithms/bubbleSort");
const insertionSort_1 = require("../../algorithms/insertionSort");
const selectionSort_1 = require("../../algorithms/selectionSort");
const quickSort_1 = require("../../algorithms/quickSort");
const mergeSort_1 = require("../../algorithms/mergeSort");
const heapSort_1 = require("../../algorithms/heapSort");
describe('Comparação de Algoritmos', () => {
    const arrays = {
        small: (0, arrayGenerators_1.generateRandomArray)(100),
        medium: (0, arrayGenerators_1.generateRandomArray)(1000),
        large: (0, arrayGenerators_1.generateRandomArray)(10000)
    };
    test('todos os algoritmos devem produzir o mesmo resultado', () => {
        // Comparar resultados de todos os algoritmos
    });
    test('deve manter a integridade dos dados originais', () => {
        // Verificar se os arrays originais não são modificados
    });
});
// Função auxiliar para verificar se um array está ordenado
function isArraySorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1])
            return false;
    }
    return true;
}
// Função para criar uma cópia do array para teste
function createArrayCopy(arr) {
    return [...arr];
}
// Arrays de teste
const testCases = {
    empty: [],
    oneElement: [1],
    twoElements: [2, 1],
    sorted: [1, 2, 3, 4, 5],
    reversed: [5, 4, 3, 2, 1],
    duplicates: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3],
    negative: [-5, -2, -8, -1, -9],
    mixed: [-3, 4, 0, -1, 8, 2],
    large: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
};
// Testes para cada algoritmo
describe('Algoritmos de Ordenação', () => {
    describe('Bubble Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                (0, bubbleSort_1.bubbleSort)(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });
    describe('Insertion Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                (0, insertionSort_1.insertionSort)(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });
    describe('Selection Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                (0, selectionSort_1.selectionSort)(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });
    describe('Quick Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                (0, quickSort_1.quickSort)(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });
    describe('Merge Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                const sorted = (0, mergeSort_1.mergeSort)(copy); // mergeSort retorna um novo array
                expect(isArraySorted(sorted)).toBe(true);
                expect(sorted.length).toBe(arr.length);
            });
        });
    });
    describe('Heap Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                (0, heapSort_1.heapSort)(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });
    // Teste de comparação de resultados
    test('todos os algoritmos devem produzir o mesmo resultado', () => {
        const arr = testCases.mixed;
        const bubbleSorted = createArrayCopy(arr);
        (0, bubbleSort_1.bubbleSort)(bubbleSorted);
        const insertionSorted = createArrayCopy(arr);
        (0, insertionSort_1.insertionSort)(insertionSorted);
        const selectionSorted = createArrayCopy(arr);
        (0, selectionSort_1.selectionSort)(selectionSorted);
        const quickSorted = createArrayCopy(arr);
        (0, quickSort_1.quickSort)(quickSorted);
        const mergeSorted = (0, mergeSort_1.mergeSort)(createArrayCopy(arr));
        const heapSorted = createArrayCopy(arr);
        (0, heapSort_1.heapSort)(heapSorted);
        // Compara os resultados de todos os algoritmos
        expect(bubbleSorted).toEqual(insertionSorted);
        expect(insertionSorted).toEqual(selectionSorted);
        expect(selectionSorted).toEqual(quickSorted);
        expect(quickSorted).toEqual(mergeSorted);
        expect(mergeSorted).toEqual(heapSorted);
    });
});
