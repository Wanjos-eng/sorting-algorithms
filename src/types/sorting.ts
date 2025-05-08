export interface ResultadoOrdenacao {
    aleatorio: number[];
    ordenado: number[];
    reverso: number[];
}

export interface DadosAlgoritmo {
    [chave: string]: ResultadoOrdenacao;
}

/**
 * Interface para os dados do gráfico compatível com Chart.js.
 */
export interface DadosGrafico {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor?: string;
        tension?: number; 
    }[];
}

/**
 * Interface para as opções do gráfico compatível com Chart.js.
 */
export interface OpcoesGrafico {
    responsive: boolean; 
    plugins?: {
        title?: {
            display: boolean; 
            text: string;
            font?: {
                size?: number;
            };
        };
        legend?: {
            position?: 'top' | 'left' | 'right' | 'bottom';
        };
    };
    scales?: {
        y?: {
            beginAtZero?: boolean; 
            title?: {
                display: boolean; 
                text: string;
            };
        };
        x?: {
            title?: {
                display: boolean;
                text: string;
            };
        };
    };
}

export interface MetricasOrdenacao {
    comparacoes: number;
    trocas: number;
    tempo: number;
}

export interface ResultadoOrdenacaoDetalhado {
    arrayOrdenado: number[];
    metricas: MetricasOrdenacao;
}