import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Quick Sort.
 * 
 * - **Complexidade de tempo**: 
 *   - Caso médio: O(n log n)
 *   - Pior caso: O(n²) (quando o pivô é sempre o maior ou menor elemento).
 * - **Complexidade de espaço**: O(log n) devido à recursão.
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function quickSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    quickSortHelper(copiaVetor, 0, copiaVetor.length - 1, metricas);

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}

/**
 * Função auxiliar recursiva do Quick Sort.
 * 
 * @param {number[]} vetor - Array sendo ordenado.
 * @param {number} inicio - Índice inicial.
 * @param {number} fim - Índice final.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas da ordenação.
 */
function quickSortHelper(vetor: number[], inicio: number, fim: number, metricas: MetricasOrdenacao): void {
    while (inicio < fim) {
        const indicePivo = particionar(vetor, inicio, fim, metricas);

        // Ordena a parte menor primeiro para minimizar o uso da pilha
        if (indicePivo - inicio < fim - indicePivo) {
            quickSortHelper(vetor, inicio, indicePivo - 1, metricas);
            inicio = indicePivo + 1;
        } else {
            quickSortHelper(vetor, indicePivo + 1, fim, metricas);
            fim = indicePivo - 1;
        }
    }
}

/**
 * Particiona o array e retorna o índice do pivô.
 * 
 * @param {number[]} vetor - Array sendo ordenado.
 * @param {number} inicio - Índice inicial.
 * @param {number} fim - Índice final.
 * @param {MetricasOrdenacao} metricas - Objeto para armazenar métricas da ordenação.
 * @returns {number} Índice do pivô.
 */
function particionar(vetor: number[], inicio: number, fim: number, metricas: MetricasOrdenacao): number {
    const meio = Math.floor((inicio + fim) / 2);
    const pivo = vetor[meio];

    // Move o pivô para o final
    trocar(vetor, meio, fim);
    metricas.trocas++;

    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        metricas.comparacoes++;
        if (vetor[j] < pivo) {
            i++;
            if (i !== j) {
                trocar(vetor, i, j);
                metricas.trocas++;
            }
        }
    }

    // Move o pivô para sua posição final
    trocar(vetor, i + 1, fim);
    metricas.trocas++;

    return i + 1;
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