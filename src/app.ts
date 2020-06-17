import { Invoice } from './modules/Invoice.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.tagName)

// grab inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log('submitted',
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.format());
});