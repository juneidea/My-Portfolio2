import * as React from 'react'

import './App.css'
import FormInput from './FormInput'
import { inputs } from './data'

function Form({data, setData}) {
    const [values, setValues] = React.useState({})
    return <>
            <div className="Register">Register</div>
            <form className="Form-base" onSubmit={(e) => {
                e.preventDefault()
                const added = data.filter(d => d.name === values.name).length
                if ( added === 0) {
                    setData([...data, values])
                }
                }}>
                {inputs.map( (input) => {
                    return <FormInput input={input} values={values} setValues={setValues} key={input.name} />
                })}
                <button className="Submit">Submit</button>
            </form>
            </>
}

export default Form