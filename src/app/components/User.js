import React from "react";
import { browserHistory } from "react-router";

export class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}