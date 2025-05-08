import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Heap Sort.
 * 
 * - **Complexidade de tempo**: O(n log n) em todos os casos.
 * - **Complexidade de espaço**: O(1).
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function heapSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    const tamanho = copiaVetor.length;

    // Construir max-heap
    for (let i = Math.floor(tamanho / 2) - 1; i >= 0; i--) {
        heapify(copiaVetor, tamanho, i, metricas);
    }

    // Extrair elementos do heap um por um
    for (let i = tamanho - 1; i > 0; i--) {
        trocar(copiaVetor, 0, i);
        metricas.trocas++;
        heapify(copiaVetor, i, 0, metricas);
    }

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}

/**
 * Função auxiliar para manter a propriedade de max-heap.
 * 
 * - Um max-heap é uma estrutura de dados onde o valor de cada nó é maior ou igual
 *   aos valores de seus filhos. Esta função ajusta o heap para garantir essa propriedade.
 * 
 * @param {number[]} vetor - Array sendo ordenado.
 * @param {number} tamanho - Tamanho do heap.
 * @param {number} i - Índice do nó atual.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas da ordenação.
 */
function heapify(vetor: number[], tamanho: number, i: number, metricas: MetricasOrdenacao): void {
    let maior = i;
    const esquerda = 2 * i + 1;
    const direita = 2 * i + 2;

    // Verifica se o filho da esquerda é maior que o nó atual
    if (esquerda < tamanho) {
        metricas.comparacoes++;
        if (vetor[esquerda] > vetor[maior]) {
            maior = esquerda;
        }
    }

    // Verifica se o filho da direita é maior que o maior nó encontrado até agora
    if (direita < tamanho) {
        metricas.comparacoes++;
        if (vetor[direita] > vetor[maior]) {
            maior = direita;
        }
    }

    // Se o maior não for o nó atual, troca os elementos e ajusta o heap recursivamente
    if (maior !== i) {
        trocar(vetor, i, maior);
        metricas.trocas++;
        heapify(vetor, tamanho, maior, metricas);
    }
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