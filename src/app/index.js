import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>ReactJS Seed Project</h1>
                <Home>
                    My Home Component!
                </Home>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));