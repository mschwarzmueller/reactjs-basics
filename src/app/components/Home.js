import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};