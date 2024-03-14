export class NameForm extends HTMLElement {
    private _firstName: string = '';
    private _lastName: string = '';

    private _firstNameInput: HTMLInputElement;
    private _lastNameInput: HTMLInputElement;

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <form>
                <style>
                    p {
                        color: red;
                        font-size: small;
                    }

                    form {
                        display: grid;
                        gap: 10px;
                        grid-template-columns: auto 1fr;
                        margin-top: 20px;
                        max-width: 400px;
                    }
                </style>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name" />
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name" />
                <div></div>
                <button type="submit">Submit</button>
                <div></div>
                <p style="display: none;">Please enter first and last name</p>
            </form>
        `;
        this._firstNameInput = shadowRoot!.querySelector('#first-name') as HTMLInputElement;
        this._lastNameInput = shadowRoot!.querySelector('#last-name') as HTMLInputElement;
        shadowRoot!.querySelector('form')!.addEventListener('submit', this.onSubmit.bind(this));
    }

    private onSubmit(event: Event) {
        event.preventDefault();

        // Ensure that first name and last name are not empty
        if (!this._firstNameInput.value || !this._lastNameInput.value) {
            const p = this.shadowRoot!.querySelector('p')!;
            p.style.display = '';
            return;
        } else {
            const p = this.shadowRoot!.querySelector('p')!;
            p.style.display = 'none';
        }

        // Do somethin with the input
        alert(`Hello, ${this._firstNameInput.value} ${this._lastNameInput.value}`);
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['first-name', 'last-name'];
    }

    attributeChangedCallback(name: string, _: string, newValue: string) {
        if (name === 'first-name') {
            this._firstName = newValue;
        } else if (name === 'last-name') {
            this._lastName = newValue;
        }
        this.render();
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    render() {
        this._firstNameInput.value = this._firstName;
        this._lastNameInput.value = this._lastName;
    }
}
