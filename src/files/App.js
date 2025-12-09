import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ heading: '', content: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const saveTask = () => {
    if (!form.heading) return;

    const newTasks = tasks.slice();

    if (editIndex !== null) {

      newTasks[editIndex] = {
        heading: form.heading,
        content: form.content
      };
    } else {

      newTasks.push({
        heading: form.heading,
        content: form.content
      });
    }

    setTasks(newTasks);
    setForm({ heading: '', content: '' });
    setEditIndex(null);
    setShowForm(false);
  };

  const deleteTask = (indexToDelete) => {

    const filtered = tasks.filter((item, index) => index !== indexToDelete);
    setTasks(filtered);
  };

  const loadTask = (task, index) => {
    setForm({ heading: task.heading, content: task.content });
    setEditIndex(index);
    setShowForm(true);
  };

  const openNew = () => {
    setForm({ heading: '', content: '' });
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <div className="m">
      <div className="hd">
        <h1>ToDo Lists</h1>
        <button className="btn add" onClick={openNew}>+</button>
      </div>

      <div className="w">
        <div className="l">
          {tasks.length === 0 ? <p style={{ color: '#777', textAlign: 'center' }}>No tasks</p> : null}

          {tasks.map((task, index) => (
            <div key={index} className="i" onClick={() => loadTask(task, index)}>
              <h3>{task.heading}</h3>
              <p>{task.content}</p>
              <button
                className="del"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>

        <div className={`f ${showForm ? 'show' : ''}`}>
          <div className="f-hd">
            <strong>{editIndex !== null ? 'Edit Task' : 'New Task'}</strong>
            <button className="close" onClick={() => setShowForm(false)}>X</button>
          </div>

          <input
            className="inp"
            placeholder="Heading"
            value={form.heading}
            onChange={(e) => setForm({ heading: e.target.value, content: form.content })}
          />

          <textarea
            className="inp"
            rows="5"
            placeholder="Content"
            value={form.content}
            onChange={(e) => setForm({ heading: form.heading, content: e.target.value })}
          />

          <button className="btn save" onClick={saveTask}>
            {editIndex !== null ? 'UPDATE' : 'CREATE'}
          </button>
        </div>
      </div>
    </div>
  );
}