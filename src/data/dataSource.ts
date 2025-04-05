import { generateRandomArray } from '../utils/arrayUtils';

export class DataSource {
    private data: number[];
    
    constructor() {
        this.data = [];
    }
    
    getData(): number[] {
        return this.data;
    }
} 