import * as React from 'react'

import './App.css';

function FormInput({input, values, setValues}) {
    const {label, warning, name, ...inputProps} = input
    const [warn, setWarn] = React.useState(false)
    return <div className="Form-line">
            <label>{label}</label>
            <input className="Form-input" {...inputProps} onBlur={() => setWarn(true)} onChange={e => setValues({...values, [name]: e.target.value })} warn={warn.toString()}/>
            <div className="Form-sub"><span className="Form-warning">{warning}</span></div>
            </div>
}

export default FormInput