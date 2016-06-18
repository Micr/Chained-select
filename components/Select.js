import React from 'react'

/**
 * Creates a select element
 * @param  {Array} optionArray - an array of options for this select
 * @param  {Function} onChange - a mapDispatchToProps callback
 * @param  {Boolean} disabled - if the element is disabled
 * @param  {Number|undefined} elId - element Id 
 * @return {Object} - a new react element
 */
var Select = ({ optionArray, onChange, disabled, elId }) => (
  <select disabled={disabled} onChange={function (e) { onChange(e.target.value === '--'? elId : e.target.value) }}>
    <option value="--">--</option>
    { disabled ? <option>--</option> : optionArray.map(element => (<option key={element.id} value={element.id}>{element.name}</option>))}
  </select>
)

export default Select;
