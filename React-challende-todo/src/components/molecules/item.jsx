import { Button } from "../atoms/button";
import Checkbox from "../atoms/checkbox";
import Text from "../atoms/text";

export default function TodoItem({ task, onToggle, onEdit, onDelete }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
            <Text value={task.text} />
            <Button color="edit" onClick={() => onEdit(task.id)}>Edit</Button>
            <Button color="delete" onClick={() => onDelete(task.id)}>Delete</Button>
        </div>
    );
}