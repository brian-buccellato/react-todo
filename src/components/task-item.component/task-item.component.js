import React from "react";
import "./task-item.component.scss";

export class TaskItem extends React.Component {
    render() {
        return (
            <div
                className="col-sm-12 task-item"
                style={
                    this.props.complete ? { backgroundColor: "#28a745" } : null
                }
            >
                <span style={{ marginRight: 10 }}>
                    <input
                        onChange={this.handleChange}
                        onClick={this.props.handleTaskSelected}
                        disabled={this.props.complete}
                        type="checkbox"
                        name={this.props.name}
                    />
                </span>
                {this.props.name}
            </div>
        );
    }
}
