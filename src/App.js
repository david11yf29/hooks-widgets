import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React',
//     content: 'React is a Front-End JS framework'
//   },
//   {
//     title: 'Why use React',
//     content: 'Favorite JS library'
//   },
//   {
//     title: 'How to use React',
//     content: 'By creating components'
//   }
// ]

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A Shade of Blue",
    value: "blue"
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {/* <Accordion items={items } /> */}
      {/* <Search /> */}
      { showDropdown ? 
        <Dropdown 
          selected={selected} 
          onSelectedChange={setSelected}
          options={options} /> : null
        }
    </div>
  )
}

export default App;