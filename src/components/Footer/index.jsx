import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    // Callback function for selecting all of the checkbox
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }


    // Callback function to delete all of the done tasks  
    handleDeleteDone = () => {
        if (window.confirm('Are you sure to delete these tasks?')){
            this.props.deleteDone()
        }
    }

    render() {
        const {todos} = this.props
        const doneTodos = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todos.length
        
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneTodos === total && total !== 0}/>
                </label>
                <span>
                    <span>Finished {doneTodos}</span> / All {total}
                </span>
                <button onClick={this.handleDeleteDone}  className="btn btn-danger">Delete the finished tasks</button>
            </div>
        )
    }
}
 