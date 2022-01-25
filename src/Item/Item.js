import React from "react";

const Item = props => {
    const textStyleCompleted = {
        textDecoration : 'line-through'
    }
    const textStyleActive = {
        textDecoration : 'none'
    }

    return (
        <div className="item">
            <div className="item__title">
                <p style={ props.completed === true ? textStyleCompleted : textStyleActive}>{props.descripsion}</p>
                <input type="checkbox" defaultChecked={props.completed} onChange={props.handleChange}/>
            </div>
            <div className="item__actions">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default Item;