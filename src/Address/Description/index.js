import React from 'react';
import './Description.css'

const DescriptionComponent = ({ input: { value, onChange }}) => {
  return (
    <div className="description">
      <textarea
        cols="50"
        rows="5"
        value={value}
        onChange={onChange}
      />
      <span>Length: {value.length}</span>
    </div>
  )
}



export default DescriptionComponent