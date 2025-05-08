import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Merge Sort.
 * 
 * - **Complexidade de tempo**: O(n log n) em todos os casos.
 * - **Complexidade de espaço**: O(n) devido ao array auxiliar.
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function mergeSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    mergeSortHelper(copiaVetor, 0, copiaVetor.length - 1, metricas);

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}

/**
 * Função auxiliar recursiva do Merge Sort.
 * 
 * @param {number[]} vetor - Array sendo ordenado.
 * @param {number} esquerda - Índice inicial.
 * @param {number} direita - Índice final.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas da ordenação.
 */
function mergeSortHelper(vetor: number[], esquerda: number, direita: number, metricas: MetricasOrdenacao): void {
    if (esquerda < direita) {
        const meio = Math.floor((esquerda + direita) / 2);
        mergeSortHelper(vetor, esquerda, meio, metricas);
        mergeSortHelper(vetor, meio + 1, direita, metricas);
        merge(vetor, esquerda, meio, direita, metricas);
    }
}

/**
 * Função que mescla dois subarrays ordenados.
 * 
 * @param {number[]} vetor - Array sendo ordenado.
 * @param {number} esquerda - Índice inicial.
 * @param {number} meio - Índice do meio.
 * @param {number} direita - Índice final.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas da ordenação.
 */
function merge(vetor: number[], esquerda: number, meio: number, direita: number, metricas: MetricasOrdenacao): void {
    const tamanhoEsquerda = meio - esquerda + 1;
    const tamanhoDireita = direita - meio;

    const esquerdaArray = new Array(tamanhoEsquerda);
    const direitaArray = new Array(tamanhoDireita);

    for (let i = 0; i < tamanhoEsquerda; i++) {
        esquerdaArray[i] = vetor[esquerda + i];
    }
    for (let j = 0; j < tamanhoDireita; j++) {
        direitaArray[j] = vetor[meio + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = esquerda;

    while (i < tamanhoEsquerda && j < tamanhoDireita) {
        metricas.comparacoes++;
        if (esquerdaArray[i] <= direitaArray[j]) {
            if (vetor[k] !== esquerdaArray[i]) {
                metricas.trocas++;
            }
            vetor[k++] = esquerdaArray[i++];
        } else {
            if (vetor[k] !== direitaArray[j]) {
                metricas.trocas++;
            }
            vetor[k++] = direitaArray[j++];
        }
    }

    while (i < tamanhoEsquerda) {
        if (vetor[k] !== esquerdaArray[i]) {
            metricas.trocas++;
        }
        vetor[k++] = esquerdaArray[i++];
    }

    while (j < tamanhoDireita) {
        if (vetor[k] !== direitaArray[j]) {
            metricas.trocas++;
        }
        vetor[k++] = direitaArray[j++];
    }
}