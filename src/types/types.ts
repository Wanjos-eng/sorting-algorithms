export interface SortingMetrics {
    comparacoes: number;
    trocas: number;
    tempo: number;
}

export type SortingAlgorithm = (arr: number[]) => { metricas: SortingMetrics };

export interface Resultados {
    tamanho: number[];
    comparacoes_aleatorio: number[];
    comparacoes_ordenado: number[];
    comparacoes_reverso: number[];
    trocas_aleatorio: number[];
    trocas_ordenado: number[];
    trocas_reverso: number[];
    tempo_aleatorio: number[];
    tempo_ordenado: number[];
    tempo_reverso: number[];
}
