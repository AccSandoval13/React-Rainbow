
// 1) We need a component that renders a given color. For simplicity, feel free to generate and render a component that just prints the name of one color.
// 2) We need to build a component holding a form that allows a user to enter a color.
// 3) With these components in mind, what behavior do you think we will be linking to State? What value will we track that needs to be changed? }

// Make sure to import the component we just built:
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

// Our App component will hold the state of our colors array 
// & render our ColorBlock components
function App() {
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])
  // We are sending props to our ColorBlock component
  // so we need to map over the colors array
  // & return a ColorBlock component for each color in the array
  
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  // Each child in a list should have a unique "key" prop. key={i} is a good way to do this
  // React insists we use a key property, as it helps enumerate these duplicated components
    return (
        <div className="App">
        {colorMap}
        <ColorForm addColor={addColor} />
        </div>
    )
}

export default App;
