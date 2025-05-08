import { ResultadoOrdenacaoDetalhado, MetricasOrdenacao } from '../types/sorting';

/**
 * Implementação do algoritmo Insertion Sort.
 * 
 * - **Complexidade de tempo**:
 *   - Pior caso: O(n²) (quando o array está em ordem inversa).
 *   - Melhor caso: O(n) (quando o array já está ordenado).
 * - **Complexidade de espaço**: O(1).
 * 
 * @param {number[]} vetor - Array a ser ordenado.
 * @returns {ResultadoOrdenacaoDetalhado} Resultado da ordenação com métricas.
 */
export function insertionSort(vetor: number[]): ResultadoOrdenacaoDetalhado {
    const tempoInicial = performance.now();
    const metricas: MetricasOrdenacao = {
        comparacoes: 0,
        trocas: 0,
        tempo: 0
    };

    const copiaVetor = [...vetor];
    const tamanho = copiaVetor.length;

    // Começa do segundo elemento
    for (let i = 1; i < tamanho; i++) {
        const chave = copiaVetor[i];
        let j = i - 1;

        // Move elementos maiores que a chave para a direita
        while (j >= 0 && copiaVetor[j] > chave) {
            metricas.comparacoes++;
            copiaVetor[j + 1] = copiaVetor[j];
            metricas.trocas++;
            j--;
        }
        metricas.comparacoes++; // Conta a última comparação que falhou

        copiaVetor[j + 1] = chave;
    }

    metricas.tempo = performance.now() - tempoInicial;
    return {
        arrayOrdenado: copiaVetor,
        metricas
    };
}