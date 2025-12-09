function TaskItem({ task, selectTask, deleteTask }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div className="todo-item" onClick={() => selectTask(task)}>
      <h3>{task.heading}</h3>
      <p>{task.content}</p>
      <button className="delete-button" onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default TaskItem;