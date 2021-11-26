import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        };
        // binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
        console.log('onChange', this.state.name);
    }

    // handle submit
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .post('/tasks', {
                name: this.state.name
            })
            .then(response => {
                console.log('from handle submit', response);
                // set state
                this.setState({
                    tasks: [response.data, ...this.state.tasks]
                });
                // then clear the value of textarea
                this.setState({
                    name: ''
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    // handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = task => task.id !== id;
        const updateTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updateTasks });
        // delete request to the backend
        axios.delete(`/tasks/${id}`);
    }

    // render tasks
    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className="media">
                <div className="media-body">
                    <p>
                        {task.id} - {task.name}{' '}
                        <button
                            onClick={() => this.handleDelete(task.id)}
                            className="btn btn-sm btn-outline-danger float-right"
                        >
                            Delete
                        </button>
                    </p>
                </div>
            </div>
        ));
    }

    // get all tasks from the backend
    getTasks() {
        axios
            .get('/tasks')
            .then(response => {
                console.log(response.data.tasks);
                this.setState({
                    tasks: [...response.data.tasks]
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    // lifecycle method
    componentDidMount() {
        this.getTasks();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Task</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className="form-control"
                                            rows="3"
                                            maxLength="255"
                                            placeholder="Create a new task"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create Task
                                    </button>
                                </form>
                                <hr />
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
                <TestComponent/>
            </div>
        );
    }
}
