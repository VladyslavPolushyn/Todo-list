import React, {useState} from 'react';
import Header from '../header';
import SearchInput from '../search-input';
import TodoList from '../todo-list';
import './app.css';
import AddInput from './../add-input/add-input';

let todoId = 0;

const App = () => {

  const [todoData, setTodoData] = useState(
    [
      createTodoItem('milk'),
      createTodoItem('beer'),
      createTodoItem('meat'),
    ]
  );

  const [searchText, setSearchText] = useState('');
  const [filterText, setFilterText] = useState('all');

  const doneCount = todoData.filter(item => item.done).length;
  const toDoCount = todoData.length - doneCount;

  function createTodoItem(text) {
    return {
      text,
      done: false,
      important: false,
      id: todoId++,
    }
  }

  const deleteItem = id => {
    setTodoData(prev => prev.filter(item => item.id !== id));
  }

  const addItem = text => {
    if (text && text.trim()) {
      setTodoData(prev => [...prev, createTodoItem(text)]);
    }
  }

  const onToggleImportant = id => {
    setTodoData(prev => prev.map(item => {
      if (item.id === id) {
        item.important = !item.important;
      }
      return item;
    }));
  }

  const onToggleDone = id => {
    setTodoData(prev => prev.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    }));
  }

  const onFilter = (array, filterText) => {

    switch(filterText) {
      case 'all' : return array;
      case 'active' : return array.filter(item => !item.done);
      case 'done' : return array.filter(item => item.done);
      default: return array;
    }

  }

  const onFilterChange = text => {
    setFilterText(text);
  }

  const onSearchChange = text => {
    setSearchText(text);
  }

  const onSearch = (array, text) => {
    if (text.length === 0) {
      return array;
    }

    return (todoData.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase().trim());
    }));
  }

  const visibleData = onFilter(onSearch(todoData, searchText), filterText);
  
  return (
    <div className="app-wrapper bg-light">
        <Header done={ doneCount } toDo={ toDoCount } />
        <SearchInput
          onSearchChange={ onSearchChange }
          onFilterChange={ onFilterChange }
          filterText={ filterText }  
        />
        <TodoList 
          todos={ visibleData }
          onDelete={ deleteItem }
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
        />
        <AddInput 
          onAdd={ addItem }
        />
    </div>
  )
  
}

export default App;
