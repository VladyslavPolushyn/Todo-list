import React from 'react';
import './header.css';

const Header = ({ toDo, done }) => {
  return (
      <header className="header d-flex justify-conent-between align-items-center">
        <h3 className="col-6 m-0">Todo List</h3>
        <p className="col-6 m-0">
          {toDo} more to do, {done} done.
        </p>
      </header> 
  )
}

export default Header;