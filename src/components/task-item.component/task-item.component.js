import React from "react";
import "./task-item.component.scss";

export function TaskItemComponent(props) {
    return (
        <div className="row">
            <div className="col-sm-2">
                <input type="checkbox" />
            </div>
            <div className="col-sm-10">{props.task}</div>
        </div>
    );
}
