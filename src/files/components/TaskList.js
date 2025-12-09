import TaskItem from './TaskItem';

function TaskList({ tasks, selectTask, deleteTask }) {
  return (
    <div className="list-container">
      {tasks.length === 0 && <p style={{ color: '#999', textAlign: 'center' }}>No items.</p>}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          selectTask={selectTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;