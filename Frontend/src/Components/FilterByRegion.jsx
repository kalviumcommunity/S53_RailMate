import React from 'react'

const FilterByRegion = (props) => {
    function getFiltervalue(value){
props.FilteredData(value.target.value)
    }
  return (
    <div>
      <select name='Region' style={{
        padding:"10px 10px"
      }} onChange={getFiltervalue}>
        <option value="All">All</option>
        <option value="South">South</option>
        <option value="North">North</option>
        <option value="East">East</option>
        <option value="West">West</option>

      </select>
    </div>
  )
}

export default FilterByRegion
