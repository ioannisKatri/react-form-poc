import {useEffect, useState} from "react"

import FormInput from "../form-input/form-input";

export default function Form() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [activateButton, setActivateButton] = useState(false);
    let [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (username.length && password.length) {
            setActivateButton(true)
            setSubmitted(false)
        } else {
            setActivateButton(false);
            setSubmitted(false)
        }
    }, [username, password])

    const handleChange = (stateHandler, event) => {
        stateHandler(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault();
        setSubmitted(true)
    };

    return (
        <div>
            <h2>My Form Test</h2>
            <br/>
            <form onSubmit={event => submitHandler(event)}>
                <FormInput
                    type="text"
                    name="username"
                    id="username-input"
                    label="Username"
                    value={username}
                    handleChange={handleChange.bind(this, setUsername)}
                />
                <FormInput
                    type="password"
                    name="password"
                    id="password-input"
                    label="password-input"
                    value={password}
                    handleChange={handleChange.bind(this, setPassword)}
                />
                <input disabled={activateButton === false} type="submit" value="Submit"/>
            </form>
            {submitted === true ? (
                <div>
                    <p>Form submitted with username -> {username}</p>
                </div>
            ) : null}
        </div>
    )
}