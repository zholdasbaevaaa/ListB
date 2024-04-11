import React, { useState } from 'react';
import { useAdContext } from './AddContext';
import './AddForm.css'; 

const AddForm = () => {
  const { addAnnouncement } = useAdContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    

    const newAnnouncement = {
      id: Math.random().toString(36).substr(2, 9), 
      title,
      description
    };

    addAnnouncement(newAnnouncement);

 
    setTitle('');
    setDescription('');
  };

  return (
    <div class="container">
      <h2>Add Board</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"><b><h1>Title:</h1></b></label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
