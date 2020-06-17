import { Invoice } from './modules/Invoice.js';
import { Payment } from './modules/Payment.js';
import { ListTemplate } from './modules/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// grab inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice' ?
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) :
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
