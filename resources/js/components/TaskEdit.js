import axios from "axios";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            task: ''
        };
        // Binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle Change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
        console.log('onChange', this.state.name);
    }

    // Handle Submit
    handleSubmit(e) {
        // stop browser's default behaviour of reloading on form submit
        e.preventDefault();
        axios
            .put(`/tasks/${this.props.match.params.id}`, {
                name: this.state.name
            })
            .then(response => {
                console.log("task successfully edited");
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    // Get all tasks from the backend
    getTasks() {
        axios
            .get(`/tasks/${this.props.match.params.id}/edit`)
            .then(response => {
                console.log(response.data.tasks)
                this.setState({
                    name: response.data.task.name,
                    task: response.data.task
                });
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    // Lifecycle method
    componentDidMount() {
        this.getTasks();
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className="form-control"
                                            rows="3"
                                            maxLength="255"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Edit Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default useNavigate(TaskEdit);
