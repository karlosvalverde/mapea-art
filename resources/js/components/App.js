import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">App Component</div>

                            <div className="card-body">I'm an App component!</div>
                        </div>
                    </div>
                </div>
                <TestComponent/>
            </div>
        );
    }
}

// export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
