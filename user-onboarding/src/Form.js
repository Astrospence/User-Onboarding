import React from 'react';

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { type, name, value, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>

            <div className="form-section submit">
                <h2>Join the Cause</h2>
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className="form-section inputs">
                <label>Username&nbsp;
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>

                <label>Email&nbsp;
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>Warrior Class&nbsp;
                    <select
                        name="warriorClass"
                        value={values.warriorClass}
                        onChange={onChange}
                    >
                        <option value="">-Choose-</option>
                        <option value="swordsman">Swordsman</option>
                        <option value="archer">Archer</option>
                        <option value="necromancer">Necromancer</option>
                        <option value="cleric">Cleric</option>
                        <option value="mage">Mage</option>
                    </select>
                </label>

                <label>I read and agree to the Terms of Service&nbsp;
                    <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}