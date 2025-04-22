/**
 * Gera um array com números aleatórios
 * @param size Tamanho do array desejado
 * @returns Array com números aleatórios entre 0 e 999
 */
export function generateRandomArray(size: number): number[] {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
}

/**
 * Gera um array já ordenado
 * @param size Tamanho do array desejado
 * @returns Array ordenado de 0 até size-1
 */
export function generateSortedArray(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i);
}

/**
 * Gera um array em ordem reversa
 * @param size Tamanho do array desejado
 * @returns Array ordenado de size-1 até 0
 */
export function generateReversedArray(size: number): number[] {
    return Array.from({ length: size }, (_, i) => size - i);
} 