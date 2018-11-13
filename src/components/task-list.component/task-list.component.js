import React from "react";
import { TaskItem } from "../task-item.component/task-item.component";

export function TaskList(props) {
    const displayTasks = props.tasks.slice().filter(task => {
        return !task.deleted && task.display;
    });

    return displayTasks.map(task => {
        return (
            <div key={task.name}>
                <TaskItem
                    handleTaskSelected={props.handleTaskSelected}
                    name={task.name}
                    selected={task.isSelected}
                    complete={task.complete}
                    // display={task.display}
                />
            </div>
        );
    });
}
