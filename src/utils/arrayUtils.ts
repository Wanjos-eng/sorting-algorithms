export function criarArrayAleatorio(tamanho: number): number[] {
    return Array.from({ length: tamanho }, () => Math.floor(Math.random() * tamanho * 10));
}

export function criarArrayOrdenado(tamanho: number): number[] {
    return Array.from({ length: tamanho }, (_, i) => i);
}

export function criarArrayOrdenadoReverso(tamanho: number): number[] {
    return Array.from({ length: tamanho }, (_, i) => tamanho - i);
}
