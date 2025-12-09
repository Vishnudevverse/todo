function TaskForm({ currentTask, setCurrentTask, saveTask, setIsFormVisible, isFormVisible }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  return (
    <div className={`form-container ${isFormVisible ? 'visible' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>{currentTask.id ? 'Edit' : 'New'}</strong>
        <span style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setIsFormVisible(false)} className="mob-only">×</span>
      </div>
      <input
        className="input-field"
        placeholder="Heading"
        name="heading"
        value={currentTask.heading}
        onChange={handleInputChange}
      />
      <textarea
        className="input-field"
        rows="5"
        placeholder="Content"
        name="content"
        value={currentTask.content}
        onChange={handleInputChange}
      />
      <button className="button" onClick={saveTask}>
        {currentTask.id ? 'UPDATE' : 'CREATE'}
      </button>
    </div>
  );
}

export default TaskForm;