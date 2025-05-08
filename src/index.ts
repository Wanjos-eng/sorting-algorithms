import { bubbleSort } from './algorithms/bubbleSort';
import { selectionSort } from './algorithms/selectionSort';
import { insertionSort } from './algorithms/insertionSort';
import { quickSort } from './algorithms/quickSort';
import { heapSort } from './algorithms/heapSort';
import { mergeSort } from './algorithms/mergeSort';
import { criarArrayAleatorio, criarArrayOrdenado, criarArrayOrdenadoReverso } from './utils/arrayUtils';
import { gerarCSV, gerarHTML } from './results/resultsUtils';
import { tamanhoInicial, tamanhoFinal, incremento } from './config/config';
import { SortingAlgorithm, Resultados, SortingMetrics } from './types/types';

// Algoritmos de ordenação
const algoritmos: { [name: string]: SortingAlgorithm } = {
    'Selection Sort': selectionSort,
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Quick Sort': quickSort,
    'Heap Sort': heapSort,
    'Merge Sort': mergeSort
};

// Estrutura para armazenar os resultados
const resultados: { [key: string]: Resultados } = Object.keys(algoritmos).reduce((acc, name) => {
    acc[name] = {
        tamanho: [],
        comparacoes_aleatorio: [],
        comparacoes_ordenado: [],
        comparacoes_reverso: [],
        trocas_aleatorio: [],
        trocas_ordenado: [],
        trocas_reverso: [],
        tempo_aleatorio: [],
        tempo_ordenado: [],
        tempo_reverso: []
    };
    return acc;
}, {} as { [key: string]: Resultados });

// Função para testar um algoritmo
function testarAlgoritmo(algoritmo: SortingAlgorithm, arr: number[]): { metricas: SortingMetrics } {
    return algoritmo([...arr]);
}

// Executar testes
for (let tamanho = tamanhoInicial; tamanho <= tamanhoFinal; tamanho += incremento) {
    const vetorAleatorio = criarArrayAleatorio(tamanho);
    const vetorOrdenado = criarArrayOrdenado(tamanho);
    const vetorReverso = criarArrayOrdenadoReverso(tamanho);

    for (const [algorithmName, algoritmo] of Object.entries(algoritmos)) {
        const dados = resultados[algorithmName];
        dados.tamanho.push(tamanho);

        // Teste com array aleatório
        const resultadoAleatorio = testarAlgoritmo(algoritmo, vetorAleatorio);
        dados.comparacoes_aleatorio.push(resultadoAleatorio.metricas.comparacoes);
        dados.trocas_aleatorio.push(resultadoAleatorio.metricas.trocas);
        dados.tempo_aleatorio.push(resultadoAleatorio.metricas.tempo);

        // Teste com array ordenado
        const resultadoOrdenado = testarAlgoritmo(algoritmo, vetorOrdenado);
        dados.comparacoes_ordenado.push(resultadoOrdenado.metricas.comparacoes);
        dados.trocas_ordenado.push(resultadoOrdenado.metricas.trocas);
        dados.tempo_ordenado.push(resultadoOrdenado.metricas.tempo);

        // Teste com array reverso
        const resultadoReverso = testarAlgoritmo(algoritmo, vetorReverso);
        dados.comparacoes_reverso.push(resultadoReverso.metricas.comparacoes);
        dados.trocas_reverso.push(resultadoReverso.metricas.trocas);
        dados.tempo_reverso.push(resultadoReverso.metricas.tempo);
    }
}

// Gerar arquivos de saída
gerarCSV(resultados);
gerarHTML(resultados);