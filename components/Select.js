import React from 'react'

var Select = ({ optionArray, onChange, disabled, elId }) => (
  <select disabled={disabled} onChange={function (e) { onChange(e.target.value === '--'? elId : e.target.value) }}>
    <option value="--">--</option>
    { disabled ? <option>--</option> : optionArray.map(element => (<option key={element.id} value={element.id}>{element.name}</option>))}
  </select>
)

export default Select;
