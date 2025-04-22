import { generateRandomArray } from "../utils/arrayGenerators";
import { bubbleSort } from '../../algorithms/bubbleSort';
import { insertionSort } from '../../algorithms/insertionSort';
import { selectionSort } from '../../algorithms/selectionSort';
import { quickSort } from '../../algorithms/quickSort';
import { mergeSort } from '../../algorithms/mergeSort';
import { heapSort } from '../../algorithms/heapSort';

describe('Comparação de Algoritmos', () => {
    const arrays = {
        small: generateRandomArray(100),
        medium: generateRandomArray(1000),
        large: generateRandomArray(10000)
    };

    test('todos os algoritmos devem produzir o mesmo resultado', () => {
        // Comparar resultados de todos os algoritmos
    });

    test('deve manter a integridade dos dados originais', () => {
        // Verificar se os arrays originais não são modificados
    });
});

// Função auxiliar para verificar se um array está ordenado
function isArraySorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

// Função para criar uma cópia do array para teste
function createArrayCopy(arr: number[]): number[] {
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
    large: Array.from({length: 1000}, () => Math.floor(Math.random() * 1000))
};

// Testes para cada algoritmo
describe('Algoritmos de Ordenação', () => {
    describe('Bubble Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                bubbleSort(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });

    describe('Insertion Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                insertionSort(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });

    describe('Selection Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                selectionSort(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });

    describe('Quick Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                quickSort(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });

    describe('Merge Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                const sorted = mergeSort(copy); // mergeSort retorna um novo array
                expect(isArraySorted(sorted)).toBe(true);
                expect(sorted.length).toBe(arr.length);
            });
        });
    });

    describe('Heap Sort', () => {
        test('deve ordenar arrays corretamente', () => {
            Object.entries(testCases).forEach(([name, arr]) => {
                const copy = createArrayCopy(arr);
                heapSort(copy);
                expect(isArraySorted(copy)).toBe(true);
                expect(copy.length).toBe(arr.length);
            });
        });
    });

    // Teste de comparação de resultados
    test('todos os algoritmos devem produzir o mesmo resultado', () => {
        const arr = testCases.mixed;
        
        const bubbleSorted = createArrayCopy(arr);
        bubbleSort(bubbleSorted);

        const insertionSorted = createArrayCopy(arr);
        insertionSort(insertionSorted);

        const selectionSorted = createArrayCopy(arr);
        selectionSort(selectionSorted);

        const quickSorted = createArrayCopy(arr);
        quickSort(quickSorted);

        const mergeSorted = mergeSort(createArrayCopy(arr));

        const heapSorted = createArrayCopy(arr);
        heapSort(heapSorted);

        // Compara os resultados de todos os algoritmos
        expect(bubbleSorted).toEqual(insertionSorted);
        expect(insertionSorted).toEqual(selectionSorted);
        expect(selectionSorted).toEqual(quickSorted);
        expect(quickSorted).toEqual(mergeSorted);
        expect(mergeSorted).toEqual(heapSorted);
    });
}); 