import React from "react";
import "./search-bar.component.scss";

export class SearchBar extends React.Component {
    handleSearch() {
        return this.props.handleSearch;
    }

    render() {
        return (
            <input
                onChange={this.handleSearch()}
                className="search-bar-input"
                placeholder="Search for a task..."
                value={this.props.filterText}
            />
        );
    }
}
