import React from 'react';

const SearchFilter = props => {
  const handleChange = props.handleChange;

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search" onChange={ handleChange } />
    </div>
  )
}

export default SearchFilter;
