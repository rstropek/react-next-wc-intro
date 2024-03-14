import { NameForm } from './form';

customElements.define('name-form', NameForm);

const printNameButton = document.querySelector('#print-name') as HTMLButtonElement;
printNameButton.addEventListener('click', () => {
    const form = document.querySelector('name-form') as NameForm;
    console.log(`Hello, ${form.firstName} ${form.lastName}`);
});

const changeNameButton = document.querySelector('#change-name') as HTMLButtonElement;
changeNameButton.addEventListener('click', () => {
    const form = document.querySelector('name-form') as NameForm;
    form.setAttribute('first-name', 'John');
    form.setAttribute('last-name', 'Doe');
});
