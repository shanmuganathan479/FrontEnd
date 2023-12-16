import React, { useState } from 'react'

const MultiInuput = () => {

    const intialValues = {
        firstName: "",
        lastName: ""
    }

    const [field, setField] = useState(intialValues)

    const hanleChange = (e) => {
        const { name, value } = e.target

        setField({
            ...field,
            [name]: value
        })

        // console.log(name, value)
    }

    // console.log(intialValues)

    const catchValues=(e)=>{
        e.preventDefault()
        console.log(field)
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>MultiInuput</h1>

            <form onSubmit={catchValues}>
                <input type='text' value={field.firstName || ""} name="firstName" onChange={hanleChange} />
                <input type='text' value={field.lastName || ""} name="lastName" onChange={hanleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default MultiInuput