import { DataSource } from './data/dataSource';
import { bubbleSort } from './algorithms/bubbleSort';
import { selectionSort } from './algorithms/selectionSort';
import { insertionSort } from './algorithms/insertionSort';
import { mergeSort } from './algorithms/mergeSort';
import { heapSort } from './algorithms/heapSort';
import { quickSort } from './algorithms/quickSort';

async function main() {
    const dataSource = new DataSource();
    
    // Testes para cada algoritmo
    const arrays = {
        original: [],
        bubble: [],
        selection: [],
        insertion: [],
        merge: [],
        heap: [],
        quick: []
    };

    console.log('Array Original:', arrays.original);

    // Bubble Sort
    bubbleSort(arrays.bubble);
    console.log('Bubble Sort:', arrays.bubble);

    // Selection Sort
    selectionSort(arrays.selection);
    console.log('Selection Sort:', arrays.selection);

    // Insertion Sort
    insertionSort(arrays.insertion);
    console.log('Insertion Sort:', arrays.insertion);

    // Merge Sort
    const mergeSorted = mergeSort(arrays.merge);
    console.log('Merge Sort:', mergeSorted);

    // Heap Sort
    heapSort(arrays.heap);
    console.log('Heap Sort:', arrays.heap);

    // Quick Sort
    quickSort(arrays.quick);
    console.log('Quick Sort:', arrays.quick);
}

main(); 