import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React',
    content: 'React is a Front-End JS framework'
  },
  {
    title: 'Why use React',
    content: 'Favorite JS library'
  },
  {
    title: 'How to use React',
    content: 'By creating components'
  }
]

const App = () => {
  return (
    <div>
      {/* <Accordion items={items } /> */}
      <Search />
    </div>
  )
}

export default App;