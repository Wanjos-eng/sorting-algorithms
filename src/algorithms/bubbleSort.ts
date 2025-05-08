import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Bubble Sort.
 * 
 * - **Complexidade de tempo**: 
 *   - Pior caso: O(n²)
 *   - Melhor caso (array já ordenado): O(n)
 * - **Complexidade de espaço**: O(1)
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function bubbleSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    const tamanho = copiaVetor.length;
    
    // Percorre o array n-1 vezes
    for (let i = 0; i < tamanho - 1; i++) {
        let houveTrocas = false;
        // Para cada iteração, flutua o maior elemento até o final
        for (let j = 0; j < tamanho - i - 1; j++) {
            metricas.comparacoes++;
            // Compara elementos adjacentes
            if (copiaVetor[j] > copiaVetor[j + 1]) {
                trocarElementos(copiaVetor, j, j + 1);
                metricas.trocas++;
                houveTrocas = true;
            }
        }
        // Se não houve trocas nesta passagem, o array já está ordenado
        if (!houveTrocas) {
            break;
        }
    }

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}

/**
 * Troca dois elementos de posição em um array.
 * 
 * @param {number[]} vetor - Array contendo os elementos.
 * @param {number} i - Índice do primeiro elemento.
 * @param {number} j - Índice do segundo elemento.
 */
function trocarElementos(vetor: number[], i: number, j: number): void {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
}