export function setupForm(element: HTMLDivElement) {
    // Create a form with first name and last name using innerHTML
    element.innerHTML = `
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
      <input type="text" id="first-name">
      <label for="last-name">Last Name:</label>
      <input type="text" id="last-name">
      <div></div>
      <button type="submit">Submit</button>
      <div></div>
      <p style="display: none;">Please enter first and last name</p>
    </form>
    `;

    // Add an event listener for the button
    const form = element.querySelector('form')!;
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Ensure that first name and last name are not empty
        const firstName = (form.querySelector('#first-name') as HTMLInputElement).value;
        const lastName = (form.querySelector('#last-name') as HTMLInputElement).value;
        if (!firstName || !lastName) {
            const p = form.querySelector('p')!;
            p.style.display = '';
            return;
        } else {
            const p = form.querySelector('p')!;
            p.style.display = 'none';
        }

        // Do somethin with the input
        alert(`Hello, ${firstName} ${lastName}`);
    });
}