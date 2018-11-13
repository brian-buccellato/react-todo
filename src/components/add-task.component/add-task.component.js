import React from "react";
import "./add-task.component.scss";

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            blankTaskError: false
        };
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate = () => {
        if (this.state.taskName.length < 1) {
            this.setState({ blankTaskError: true });
            return false;
        } else {
            this.setState({ blankTaskError: false });
            return true;
        }
    };

    handleNewTask(e) {
        e.preventDefault();
        if (this.validate()) {
            this.props.handleNewTask(this.state.taskName);
            this.setState({ taskName: "" });
        } else {
            return;
        }
    }

    handleChange(e) {
        this.setState({
            taskName: e.target.value,
            blankTaskError: e.target.value > 0
        });
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleNewTask}>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <input
                            value={this.state.taskName}
                            name="task-name"
                            className="add-task-input"
                            placeholder="Enter a new task you lazy bastard..."
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                {this.state.blankTaskError ? (
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <div
                                style={{
                                    color: "red",
                                    fontSize: 12
                                }}
                            >
                                *Task name cannot be blank, you hoser
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="form-group row">
                    <div className="col-sm-12">
                        <button className="btn-sm btn-primary" type="submit">
                            Add Task
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
