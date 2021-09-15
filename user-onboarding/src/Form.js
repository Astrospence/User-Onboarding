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
                <h1>Join the Cause</h1>
                <button disabled={disabled}>Submit</button>
                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className="form-section inputs">
                <label className="labels">Username&nbsp;
                    <input 
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    /><br></br>
                </label>

                <label className="labels">Email&nbsp;
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    /><br></br>
                </label>

                <label className="labels">Password&nbsp;
                    <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    /><br></br>
                </label>

                <label className="labels">Warrior Class&nbsp;
                    <select
                        name="warriorClass"
                        value={values.warriorClass}
                        onChange={onChange}
                    >
                        <option value="">-Choose-</option>
                        <option value="Swordsman">Swordsman</option>
                        <option value="Archer">Archer</option>
                        <option value="Necromancer">Necromancer</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Mage">Mage</option>
                    </select><br></br>
                </label>

                <label className="labels">I read and agree to the Terms of Service&nbsp;
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