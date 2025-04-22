export interface SortMetrics {
    comparisons: number;
    swaps: number;
    time: number;
}

export interface SortResult {
    sortedArray: number[];
    metrics: SortMetrics;
}

export interface AlgorithmTest {
    name: string;
    sort: (arr: number[]) => SortResult;
}

export interface TestSet {
    random: number[];
    sorted: number[];
    reversed: number[];
    nearlySorted: number[];
    withDuplicates: number[];
}

export interface TestArrays {
    small: TestSet;
    medium: TestSet;
    large: TestSet;
    extraLarge: TestSet;
} 