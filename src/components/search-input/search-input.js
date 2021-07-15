import React from 'react';
import './search-input.css';
import ItemStatusFilter from '../item-status-filter/index';

const SearchInput = ({ onSearchChange, onFilterChange, filterText }) => {
  return (
    <div className="search-input d-flex justify-content-between">
      <input 
        className="col-6"
        type="text"
        placeholder="search"
        onChange={event => onSearchChange(event.target.value)}
      />
      <ItemStatusFilter
        onFilterChange={ onFilterChange }
        filterText={ filterText }
      />
    </div>
  )
}

export default SearchInput;