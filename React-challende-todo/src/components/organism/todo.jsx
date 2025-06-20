import { useReducer } from 'react';
import { Button } from "../atoms/button";
import { Input } from "../atoms/Input";
import TodoItem from "../molecules/item";

const taskReducer = (tasks, action) => {
        if (action.type === 'update_text'){
            return {
                ...tasks,
                text: action.text
            };
        } else if(action.type === 'added') {
            if (tasks.text.trim() === '') return tasks;

            if (tasks.editId) {
                return {
                    ...tasks,
                    tasks: tasks.tasks.map(t =>
                        t.id === tasks.editId ? { ...t, text: tasks.text } : t
                    ),
                    text: '',
                    editId: null
                };
            }

            return {
                ...tasks,
                tasks: [...tasks.tasks, {
                    id: Date.now(),
                    text: tasks.text,
                    completed: false
                }],
                text: ''
            };
        } else if (action.type === 'changed') {
            return {
                ...tasks,
                tasks: tasks.tasks.map(t =>
                    t.id === action.task.id ? action.task : t
                )
            };
        } else if (action.type === 'deleted') {
            return {
                ...tasks,
                tasks: tasks.tasks.filter(t => t.id !== action.id)
            };
        } else if (action.type === 'start_edit') {
             return {
                ...tasks,
                text: action.text,
                editId: action.id
            };
        } else{
            throw Error('Unknown action:' + action.type);
        }
    }

export default function Todo() {
    const initialState = {
    tasks: [],
    text: '',
    editId: null
    };

    const [task, dispatch] = useReducer(taskReducer, initialState);


    const handleTextChange = (text) => {
    dispatch({ type: 'update_text', text });
    };
    
    const handleAddTask = () => {
        dispatch({ type: 'added' });
    };
    
    const handleChangeTask = (task) => {
        dispatch({ type: 'changed', task });
    };
    
    const handleDeleteTask = (taskId) => {
        dispatch({ type: 'deleted', id: taskId });
    };
    
    const handleEditTask = (taskId, taskText) => {
        dispatch({ type: 'start_edit', id: taskId, text: taskText });
    };
    
    
    return (
        <div style={{ width: '300px', margin: '20px auto' }}>
            <h2>Prague itinerary</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <Input
                    type="text"
                    placeholder="Add task"
                    value={task.text}
                    onChange={(e) => handleTextChange(e.target.value)}
                    style="input-task"
                />
                <Button color="primary" onClick={handleAddTask}>{task.editId ? 'Save' : 'Add'}</Button>
            </div>

            {task.tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={() => 
                        handleChangeTask({...task, completed: !task.completed})
                    }
                    onDelete={() => handleDeleteTask(task.id)}
                    onEdit={() => handleEditTask(task.id, task.text)}
                />
            ))}
        </div>
    );
}
