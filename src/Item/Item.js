import React from "react";

const Item = props => {
    return (
        <div className="item">
            <div className="item__title">
                <p>{props.descripsion}</p>
                <input type="checkbox" defaultChecked={props.completed}/>
            </div>
            <div className="item__actions">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default Item;