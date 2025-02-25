import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        console.log(event.target);
        return;
      }

      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick)

    return () => {
       document.body.removeEventListener('click', onBodyClick);
    };
  }, [])

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  // console.log(ref.current);

  return  (
    <div ref ={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${ open ? 'visible active':'' }`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${ open ? 'visible transition':''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;