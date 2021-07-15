import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({ onFilterChange, filterText }) => {

  const buttonsArr = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ];

  const buttons = buttonsArr.map(({name, label}) => {
    return (
      <button className={"col-4 " + (filterText === name ? "btn-success" : "btn-light")} key={name} onClick={() => onFilterChange(name)}>{label}</button>
    );
  });

  return (
    <div className="btn-group col-6">
      {buttons}
    </div>
  );
}

export default ItemStatusFilter;