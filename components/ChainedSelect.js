import React from 'react'
import Select from './Select'

/**
 * Creates a chained select component
 * @param  {Array} selectArray - an array of active selects
 * @param  {Function} onSelectChange mapDispatchToProps callback
 * @return {Object} a new React element 
 */
var ChainedSelect = ({ selectArray, onSelectChange }) => (
  <ul>
    {[0,1,2].map(element => selectArray[element] ? <Select key={element} elId={selectArray[element].id} optionArray={selectArray[element].types} onChange={onSelectChange}/> : <Select key={element} disabled/>)}
  </ul>
)
export default ChainedSelect;
