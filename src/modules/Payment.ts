import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {

    constructor(
        readonly recipient: string, // define properties in arguments when you specify modifier
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}