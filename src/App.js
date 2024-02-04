import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('')
        }
    }
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ))
    }
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Список задач</h1>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Введите новую задачу"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ flex: 1, marginRight: '10px', padding: '8px' }}
                />
                <button onClick={addTask} style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: '1px solid black', cursor: 'pointer' }}>
                    Добавить
                </button>
            </div>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {tasks.map(task => (
                    <li key={task.id} style={{ marginBottom: '8px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: task.completed ? '#f2f2f2' : 'white' }}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
              {task.text}
            </span>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button onClick={() => toggleTaskCompletion(task.id)} style={{ marginRight: '8px', backgroundColor: '#4CAF50', color: 'white', border: '1px solid black', cursor: 'pointer' }}>
                                {task.completed ? 'Отменить' : 'Выполнено'}
                            </button>
                            <button onClick={() => deleteTask(task.id)} style={{ backgroundColor: '#f44336', color: 'white', border: '1px solid black', cursor: 'pointer' }}>
                                Удалить
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;
