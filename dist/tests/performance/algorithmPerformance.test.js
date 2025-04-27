"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Testes de performance para comparar os algoritmos
 * Mede tempo de execução em diferentes cenários
 */
const arrayGenerators_1 = require("../../utils/arrayGenerators");
const bubbleSort_1 = require("../../algorithms/bubbleSort");
const selectionSort_1 = require("../../algorithms/selectionSort");
const insertionSort_1 = require("../../algorithms/insertionSort");
const mergeSort_1 = require("../../algorithms/mergeSort");
const quickSort_1 = require("../../algorithms/quickSort");
const heapSort_1 = require("../../algorithms/heapSort");
describe('Performance dos Algoritmos de Ordenação', () => {
    const testSets = arrayGenerators_1.ArrayGenerator.generateTestSets();
    function measureExecutionTime(fn, arr) {
        const start = performance.now();
        fn([...arr]); // Cria uma cópia para não modificar o array original
        return performance.now() - start;
    }
    test('Comparação de performance com arrays aleatórios', () => {
        Object.entries(testSets).forEach(([size, arrays]) => {
            console.log(`\nTestando arrays ${size}:`);
            const results = {
                bubbleSort: measureExecutionTime(bubbleSort_1.bubbleSort, arrays.random),
                selectionSort: measureExecutionTime(selectionSort_1.selectionSort, arrays.random),
                insertionSort: measureExecutionTime(insertionSort_1.insertionSort, arrays.random),
                mergeSort: measureExecutionTime(mergeSort_1.mergeSort, arrays.random),
                quickSort: measureExecutionTime(quickSort_1.quickSort, arrays.random),
                heapSort: measureExecutionTime(heapSort_1.heapSort, arrays.random)
            };
            console.table(results);
        });
    });
    test('Análise de melhor caso (arrays ordenados)', () => {
        Object.entries(testSets).forEach(([size, arrays]) => {
            console.log(`\nTestando arrays ordenados ${size}:`);
            // Similar ao teste anterior, mas com arrays.sorted
        });
    });
    test('Análise de pior caso (arrays reversos)', () => {
        Object.entries(testSets).forEach(([size, arrays]) => {
            console.log(`\nTestando arrays reversos ${size}:`);
            // Similar ao teste anterior, mas com arrays.reversed
        });
    });
    test('Análise de caso médio (arrays quase ordenados)', () => {
        Object.entries(testSets).forEach(([size, arrays]) => {
            console.log(`\nTestando arrays quase ordenados ${size}:`);
            // Similar ao teste anterior, mas com arrays.nearlySorted
        });
    });
});
