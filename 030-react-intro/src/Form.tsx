import './Form.css';
import { FormEvent, useState } from 'react';

export type NameFormProps = {
    firstName: string;
    lastName: string;
};

export type NameFormPropsWithCallback = NameFormProps & {
    onSubmit?: (props: NameFormProps) => void | undefined;
};

const NameForm = (props: NameFormPropsWithCallback) => {
    const [firstNameInput, setFirstNameInput] = useState(props.firstName);
    const [lastNameInput, setLastNameInput] = useState(props.lastName);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!firstNameInput || !lastNameInput) {
            setErrorMessage('Please enter first and last name');
            return;
        } else {
            setErrorMessage('');
        }

        if (props.onSubmit) {
            props.onSubmit({ firstName: firstNameInput, lastName: lastNameInput });
        } else {
            alert(`Hello, ${firstNameInput} ${lastNameInput}`);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" value={firstNameInput} onChange={e => setFirstNameInput(e.target.value)} />
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" value={lastNameInput} onChange={e => setLastNameInput(e.target.value)} />
            <div></div>
            <button type="submit">Submit</button>
            <div></div>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
};

export default NameForm;
