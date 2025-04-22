/**
 * Classe utilitária para geração de arrays para testes de algoritmos de ordenação
 */
export class ArrayGenerator {
    /**
     * Gera um array com números aleatórios
     * @param size Tamanho do array
     * @param min Valor mínimo (default: 0)
     * @param max Valor máximo (default: 1000)
     */
    static random(size: number, min: number = 0, max: number = 1000): number[] {
        return Array.from(
            { length: size }, 
            () => Math.floor(Math.random() * (max - min + 1)) + min
        );
    }

    /**
     * Gera um array ordenado
     * @param size Tamanho do array
     */
    static sorted(size: number): number[] {
        return Array.from({ length: size }, (_, i) => i);
    }

    /**
     * Gera um array em ordem reversa
     * @param size Tamanho do array
     */
    static reversed(size: number): number[] {
        return Array.from({ length: size }, (_, i) => size - i - 1);
    }

    /**
     * Gera um array quase ordenado (95% ordenado)
     * @param size Tamanho do array
     * @param disorder Percentual de desordem (default: 5)
     */
    static nearlySorted(size: number, disorder: number = 5): number[] {
        const arr = this.sorted(size);
        const swaps = Math.floor((size * disorder) / 100);
        
        for (let i = 0; i < swaps; i++) {
            const idx1 = Math.floor(Math.random() * size);
            const idx2 = Math.floor(Math.random() * size);
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }
        
        return arr;
    }

    /**
     * Gera um array com muitos elementos duplicados
     * @param size Tamanho do array
     * @param uniquePercentage Percentual de elementos únicos (default: 20)
     */
    static withDuplicates(size: number, uniquePercentage: number = 20): number[] {
        const uniqueCount = Math.floor((size * uniquePercentage) / 100);
        const baseValues = Array.from({ length: uniqueCount }, (_, i) => i);
        
        return Array.from({ length: size }, () => {
            return baseValues[Math.floor(Math.random() * uniqueCount)];
        });
    }

    /**
     * Gera arrays de teste com diferentes tamanhos
     * @returns Objeto com arrays de diferentes tamanhos
     */
    static generateTestSets(): TestArrays {
        return {
            small: {
                random: this.random(100),
                sorted: this.sorted(100),
                reversed: this.reversed(100),
                nearlySorted: this.nearlySorted(100),
                withDuplicates: this.withDuplicates(100)
            },
            medium: {
                random: this.random(1000),
                sorted: this.sorted(1000),
                reversed: this.reversed(1000),
                nearlySorted: this.nearlySorted(1000),
                withDuplicates: this.withDuplicates(1000)
            },
            large: {
                random: this.random(10000),
                sorted: this.sorted(10000),
                reversed: this.reversed(10000),
                nearlySorted: this.nearlySorted(10000),
                withDuplicates: this.withDuplicates(10000)
            },
            extraLarge: {
                random: this.random(100000),
                sorted: this.sorted(100000),
                reversed: this.reversed(100000),
                nearlySorted: this.nearlySorted(100000),
                withDuplicates: this.withDuplicates(100000)
            }
        };
    }
}

/**
 * Interface para definir os conjuntos de teste
 */
interface ArraySet {
    random: number[];
    sorted: number[];
    reversed: number[];
    nearlySorted: number[];
    withDuplicates: number[];
}

interface TestArrays {
    small: ArraySet;
    medium: ArraySet;
    large: ArraySet;
    extraLarge: ArraySet;
} 