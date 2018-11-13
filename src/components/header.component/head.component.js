import React from "react";
import "./header.component.scss";

export function Header(props) {
    return (
        <div className="row">
            <div className="col-lg-12 header">{props.title}</div>
        </div>
    );
}
