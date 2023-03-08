// 1) In this component, we want to instantiate the value of input to a blank string.
// 2) Let's then build a form that contains an input field and a button to submit it.
// 3) Next, we want to have our input field call setInput every time the content changes. As the user types, we redefine the value of input!
import React, { useState } from 'react'


function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of the form submital
        e.preventDefault()
        // addColor, the function we just built, should be available to us as props
        props.addColor(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm