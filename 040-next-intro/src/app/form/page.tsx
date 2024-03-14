'use client'

import styles from "./page.module.css";
import { FormEvent, useState } from 'react';

const NameForm = () => {
    const [firstNameInput, setFirstNameInput] = useState('John');
    const [lastNameInput, setLastNameInput] = useState('Doe');
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!firstNameInput || !lastNameInput) {
            setErrorMessage('Please enter first and last name');
            return;
        } else {
            setErrorMessage('');
        }

        alert(`Hello, ${firstNameInput} ${lastNameInput}`);
    };

    return (
        <form onSubmit={onSubmit} className={styles.nameForm}>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" value={firstNameInput} onChange={e => setFirstNameInput(e.target.value)} />
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" value={lastNameInput} onChange={e => setLastNameInput(e.target.value)} />
            <div></div>
            <button type="submit">Submit</button>
            <div></div>
            {errorMessage && <p className={styles.highlight}>{errorMessage}</p>}
        </form>
    );
};

export default NameForm;
