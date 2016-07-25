import React from "react";

export class Home extends React.Component {
    render() {
        const age = this.props.age + 1;
        return (
            <div>
                <h3>Hello {this.props.name}!</h3>
                <p>You're almost {age}</p>
            </div>
        );
    }
}