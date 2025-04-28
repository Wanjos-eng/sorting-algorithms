export interface SortingResult {
    random: number[];
    sorted: number[];
    reversed: number[];
}

export interface AlgorithmData {
    [key: string]: SortingResult;
}

export interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        tension: number;
    }[];
}

export interface ChartOptions {
    responsive: boolean;
    plugins: {
        title: {
            display: boolean;
            text: string;
        };
    };
    scales?: {
        y: {
            beginAtZero: boolean;
            title: {
                display: boolean;
                text: string;
            };
        };
        x: {
            title: {
                display: boolean;
                text: string;
            };
        };
    };
}

export interface SortMetrics {
    comparisons: number;
    swaps: number;
    time: number;
}

export interface SortResult {
    sortedArray: number[];
    metrics: SortMetrics;
} 