import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.age = 27;
    }

    onSayHello() {
        alert("Hello!");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} age={this.age} greet={this.onSayHello}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));