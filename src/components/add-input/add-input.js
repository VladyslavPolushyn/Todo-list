import React, {useState} from 'react';
import './add-input.css';

const AddInput = ({ onAdd }) => {

  const [addItem, setAddItem] = useState('');

  const setAddItemText = text => {
    setAddItem(text);
  }

  const onSubmit = event => {
    event.preventDefault();
    onAdd(addItem);
    setAddItem('');
  }

  return (
    <div className="mt-3 add-input d-flex justify-content-between">
      <form className="input-form" onSubmit={onSubmit}>
        <input id="addInput"
          className="col-8"
          type="text"
          placeholder="add..."
          onChange={ event => setAddItemText(event.target.value)} 
          value={addItem}
        />
        <button className="col-4 btn btn-success align-top">Add</button>
      </form>
    </div>
  )
}

export default AddInput;