import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    // readonly client: string; access modifiers on class properties
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string, // define properties in arguments when you specify modifier
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
