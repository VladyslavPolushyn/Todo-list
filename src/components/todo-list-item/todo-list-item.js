import './todo-list-item.css';

const TodoListItem = ({text, onDelete, onToggleDone, onToggleImportant, important, done}) => {

  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }
    
  return (
    <div className="d-flex w-100 justify-content-between">

      <span 
        className={classNames} 
        onClick={ onToggleDone }  
      >
        { text }
      </span>

      <div className="todo-list-item__controls">
        <button className="btn btn-danger" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
        </button>
        <button className="btn btn-success" onClick={ onToggleImportant }>
            <i className="fa fa-exclamation"></i>
        </button>
      </div>
      
    </div>
    
  );

}

export default TodoListItem;