export class Invoice {
    // readonly client: string; access modifiers on class properties
    // private details: string;
    // public amount: number;
    constructor(client, // define properties in arguments when you specify modifier
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
