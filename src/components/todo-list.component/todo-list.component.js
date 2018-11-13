import React from "react";

import { SearchBar } from "../search-bar.component/search-bar.component";
import { AddTask } from "../add-task.component/add-task.component";
import { TaskList } from "../task-list.component/task-list.component";

import "./todo-list.component.scss";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: initialTasks, filterText: "" };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleNewTask = this.handleNewTask.bind(this);
        this.completeSelectedTasks = this.completeSelectedTasks.bind(this);
        this.deleteSelectedTasks = this.deleteSelectedTasks.bind(this);
        this.handleTaskSelected = this.handleTaskSelected.bind(this);
    }

    completeSelectedTasks() {
        const tasksCopy = this.state.tasks.slice();
        for (const task of tasksCopy) {
            if (task.isSelected) {
                task.complete = true;
                task.isSelected = false;
            }
        }
        this.setState({
            tasks: tasksCopy
        });
    }

    deleteSelectedTasks() {
        const tasksCopy = this.state.tasks.slice();
        for (const task of tasksCopy) {
            if (task.isSelected) {
                task.deleted = true;
            }
        }
        this.setState({
            tasks: tasksCopy
        });
    }

    handleNewTask(val) {
        if (val.length > 0) {
            this.setState({
                tasks: this.state.tasks.concat({
                    name: val,
                    complete: false,
                    isSelected: false,
                    deleted: false,
                    display: true
                })
            });
        }
    }

    handleTaskSelected(e) {
        const tasksCopy = this.state.tasks.slice();
        for (const task of tasksCopy) {
            if (task.name === e.target.name) {
                task.isSelected = e.target.checked;
            }
        }
        this.setState({ tasks: tasksCopy });
    }

    handleSearch(event) {
        const filter = event.target.value.toLowerCase();
        const tasksCopy = this.state.tasks.slice();
        const tasks = tasksCopy.map(task => {
            if (new RegExp(filter).test(task.name.toLowerCase())) {
                return {
                    ...task,
                    display: true
                };
            } else {
                return {
                    ...task,
                    display: false
                };
            }
        });
        this.setState({ tasks: tasks, filterText: filter });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-sm-6" style={{ color: "#545454" }}>
                        <h4>
                            Number of Tasks Remaining:{" "}
                            {
                                this.state.tasks.slice().filter(task => {
                                    return !task.complete && !task.deleted;
                                }).length
                            }
                        </h4>
                        <h4>
                            Number of Tasks Completed:{" "}
                            {
                                this.state.tasks.slice().filter(task => {
                                    return task.complete;
                                }).length
                            }
                        </h4>
                    </div>
                    {this.state.tasks.slice().filter(task => {
                        return !task.complete && !task.deleted;
                    }).length < 1 ? (
                        <div className="col-sm-6" style={{ color: "#545454" }}>
                            <h3>
                                Congratulations!! You Have Finished Your Tasks!
                            </h3>
                        </div>
                    ) : null}
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <SearchBar
                            handleSearch={this.handleSearch}
                            filterText={this.state.filterText}
                        />
                    </div>
                    <div className="col-sm-6">
                        <AddTask handleNewTask={this.handleNewTask} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <TaskList
                            tasks={this.state.tasks}
                            handleTaskSelected={this.handleTaskSelected}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button
                            className="btn btn-secondary submit-button"
                            onClick={this.completeSelectedTasks}
                        >
                            Complete Selected Tasks
                        </button>
                        <button
                            className="btn btn-danger submit-button"
                            onClick={this.deleteSelectedTasks}
                        >
                            Delete Selected Tasks
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const initialTasks = [
    {
        name: "Buy Milk",
        complete: false,
        isSelected: false,
        deleted: false,
        display: true
    },
    {
        name: "Clean the Bathroom",
        complete: false,
        isSelected: false,
        deleted: false,
        display: true
    },
    {
        name: "Milk the Yaks",
        complete: false,
        isSelected: false,
        deleted: false,
        display: true
    },
    {
        name: "Smell the flowers",
        complete: false,
        isSelected: false,
        deleted: false,
        display: true
    },
    {
        name: "Make custom slack emojis",
        complete: false,
        isSelected: false,
        deleted: false,
        display: true
    }
];
