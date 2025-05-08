import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Selection Sort.
 * 
 * - **Complexidade de tempo**: O(n²)
 * - **Complexidade de espaço**: O(1)
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function selectionSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    const tamanho = copiaVetor.length;
    
    // Percorre o array
    for (let i = 0; i < tamanho - 1; i++) {
        // Encontra o menor elemento no resto do array
        const indiceMenor = encontrarIndiceMenor(copiaVetor, i, metricas);
        
        // Se o menor elemento não for o atual, faz a troca
        if (indiceMenor !== i) {
            trocar(copiaVetor, i, indiceMenor);
            metricas.trocas++;
        }
    }

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}

/**
 * Encontra o índice do menor elemento a partir de um índice inicial.
 * 
 * @param {number[]} vetor - Array para buscar.
 * @param {number} indiceInicial - Índice inicial da busca.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas.
 * @returns {number} Índice do menor elemento encontrado.
 */
function encontrarIndiceMenor(vetor: number[], indiceInicial: number, metricas: MetricasOrdenacao): number {
    let indiceMenor = indiceInicial;
    
    // Procura o menor elemento no resto do array
    for (let j = indiceInicial + 1; j < vetor.length; j++) {
        metricas.comparacoes++;
        if (vetor[j] < vetor[indiceMenor]) {
            indiceMenor = j;
        }
    }
    
    return indiceMenor;
}

/**
 * Troca dois elementos de posição em um array.
 * 
 * @param {number[]} vetor - Array contendo os elementos.
 * @param {number} i - Índice do primeiro elemento.
 * @param {number} j - Índice do segundo elemento.
 */
function trocar(vetor: number[], i: number, j: number): void {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
}