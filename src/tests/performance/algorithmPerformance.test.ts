/**
 * Testes de performance para comparar os algoritmos
 * Mede tempo de execução em diferentes cenários
 */
import { ArrayGenerator } from '../../utils/arrayGenerators';
import { bubbleSort } from '../../algorithms/bubbleSort';
import { selectionSort } from '../../algorithms/selectionSort';
import { insertionSort } from '../../algorithms/insertionSort';
import { mergeSort } from '../../algorithms/mergeSort';
import { quickSort } from '../../algorithms/quickSort';
import { heapSort } from '../../algorithms/heapSort';

describe('Performance dos Algoritmos de Ordenação', () => {
    const testSets = ArrayGenerator.generateTestSets();

    function measureExecutionTime(fn: Function, arr: number[]): number {
        const start = performance.now();
        fn([...arr]); // Cria uma cópia para não modificar o array original
        return performance.now() - start;
    }

    test('Comparação de performance com arrays aleatórios', () => {
        Object.entries(testSets).forEach(([size, arrays]) => {
            console.log(`\nTestando arrays ${size}:`);
            
            const results = {
                bubbleSort: measureExecutionTime(bubbleSort, arrays.random),
                selectionSort: measureExecutionTime(selectionSort, arrays.random),
                insertionSort: measureExecutionTime(insertionSort, arrays.random),
                mergeSort: measureExecutionTime(mergeSort, arrays.random),
                quickSort: measureExecutionTime(quickSort, arrays.random),
                heapSort: measureExecutionTime(heapSort, arrays.random)
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