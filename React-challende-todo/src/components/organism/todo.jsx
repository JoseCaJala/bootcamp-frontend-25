import { useState } from 'react';
import { Button } from "../atoms/button";
import { Input } from "../atoms/Input";
import TodoItem from "../molecules/item";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        if (text.trim() === '') return;

        if (editId) {
            setTasks(tasks.map(t => t.id === editId ? { ...t, text } : t));
            setEditId(null);
        } else {
            setTasks([...tasks, { id: Date.now(), text, completed: false }]);
        }
        setText('');
    };

    const handleToggle = id => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const handleDelete = id => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const handleEdit = id => {
        const task = tasks.find(t => t.id === id);
        setText(task.text);
        setEditId(id);
    };

    return (
        <div style={{ width: '300px', margin: '20px auto' }}>
            <h2>Prague itinerary</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <Input
                    type="text"
                    placeholder="Add task"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    style="input-task"
                />
                <Button color="primary" onClick={handleAdd}>{editId ? "Update" : "Add"}</Button>
            </div>

            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}
