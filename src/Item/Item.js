import React, { useCallback, useState } from "react";

/**
 * 
 * @param {{ task: {}, handleChange: (task) => void}} props 
 * @returns 
 */
const Item = props => {
    const { task, handleChange, handleOnDelete, handleOnEdit } = props;
    const [text, setText] = useState(task.descripsion);
    const [isEditorOpened, setIsEditorOpened] = useState(false);

    const textStyleCompleted = {
        textDecoration : 'line-through'
    }
    const textStyleActive = {
        textDecoration : 'none'
    }

    const handleOnChange = () => {
        const result = { ...task };
        result.completed = !result.completed;
        handleChange(result);
    }

    const handleToggleEditor = () => {
        setIsEditorOpened(prev => !prev);
    }

    const handleOnChangeText = ({ target }) => {
        const { value } = target;
        setText(value);
    }

    const handleOnBlur = () => {
        setIsEditorOpened(false);
        handleOnEdit({ ...task, descripsion: text });
    }

    return (
        <div className="item">
            <div className="item__title">
                {!isEditorOpened ? <p style={task.completed ? textStyleCompleted : textStyleActive}>{task.descripsion}</p> :
                <input type="text" value={text} onChange={handleOnChangeText} onBlur={handleOnBlur} />}
                <input type="checkbox" defaultChecked={task.completed} onChange={handleOnChange} />
            </div>
            <div className="item__actions">
                <button onClick={handleToggleEditor}>edit</button>
                <button onClick={() => {handleOnDelete(task)}}>delete</button>
            </div>
        </div>
    )
}

export default Item;
